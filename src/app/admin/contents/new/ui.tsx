'use client';

import { useState } from 'react';
import type {
  AdminContentCreateInput,
  ContentType,
} from '@/types';
import { adminApi } from '@/lib/adminApi';
import { useRouter } from 'next/navigation';

export function NewContentForm() {
  const router = useRouter();
  
  // Form states
  const [type, setType] = useState<ContentType>('POST');
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [html, setHtml] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [coverImageId, setCoverImageId] = useState('');
  const [publishedAt, setPublishedAt] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-generate slug from title if slug is empty
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!slug) {
      const newSlug = val
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[đĐ]/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
      setSlug(newSlug);
    }
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) {
        setError("Vui lòng nhập tiêu đề");
        return;
    }

    setError(null);
    setLoading(true);

    try {
      const payload: AdminContentCreateInput = { 
        type, 
        title, 
        slug, 
        html: html || '<p>Nội dung mới...</p>',
        excerpt,
        coverImageId: coverImageId || undefined,
        publishedAt: publishedAt ? new Date(publishedAt).toISOString() : undefined,
        createdById: authorId || undefined,
        metaTitle,
        metaDescription
      };
      
      const res = await adminApi.createContent(payload);
      // Redirect to edit page
      router.push(`/admin/contents/${res.id}`);
    } catch (err: any) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Create failed');
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
       {/* Header */}
       <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sticky top-4 z-10 bg-[#FDFBF7]/80 backdrop-blur-md p-4 rounded-xl border border-[#E5E1DA] shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-[#4D0000]">Tạo bài viết mới</h1>
          <p className="text-sm text-stone-500">Điền thông tin để tạo bài viết mới</p>
        </div>

        <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            >
              Hủy bỏ
            </button>
            <button
              onClick={onSubmit}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-[#E75739] px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#D1492E] disabled:opacity-50"
            >
              {loading ? 'Đang xử lý...' : 'Tạo bài viết'}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-[#E5E1DA] bg-white p-6 shadow-sm space-y-4">
             <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Tiêu đề bài viết <span className="text-red-500">*</span></label>
              <input
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Nhập tiêu đề..."
                className="w-full rounded-lg border-stone-200 px-4 py-2.5 text-lg font-semibold focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Mô tả ngắn (Excerpt)</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                placeholder="Tóm tắt nội dung..."
                className="w-full rounded-lg border-stone-200 px-3 py-2 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Nội dung (HTML/Markdown)</label>
              <div className="flex flex-col h-[500px] rounded-lg border border-stone-200">
                <textarea
                  value={html}
                  onChange={(e) => setHtml(e.target.value)}
                  className="flex-1 resize-none rounded-lg border-0 p-4 font-mono text-sm focus:ring-0"
                  placeholder="Nhập nội dung..."
                />
              </div>
            </div>
            
             {/* SEO Fields */}
             <div className="pt-4 border-t border-stone-100 space-y-4">
                <h3 className="font-semibold text-stone-800">SEO Meta Data</h3>
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-stone-700">Meta Title</label>
                        <input
                            value={metaTitle}
                            onChange={(e) => setMetaTitle(e.target.value)}
                            className="w-full rounded-lg border-stone-200 py-2 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
                        />
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-stone-700">Meta Description</label>
                        <textarea
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                            rows={2}
                            className="w-full rounded-lg border-stone-200 py-2 text-sm focus:border-[#4D0000] focus:ring-[#4D0000]"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <div className="rounded-xl border border-[#E5E1DA] bg-white p-5 shadow-sm space-y-4">
            <h3 className="font-semibold text-[#4D0000]">Cấu hình</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Chuyên mục</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as ContentType)}
                className="w-full rounded-lg border-stone-200 bg-white py-2 text-sm text-stone-700 focus:border-[#4D0000] focus:ring-[#4D0000]"
              >
                <option value="POST">Bài viết (Tin tức)</option>
                <option value="DISEASE">Bệnh học</option>
                <option value="HERB">Dược liệu</option>
                <option value="SERVICE">Dịch vụ</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Slug</label>
              <input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Ảnh Thumbnail (ID/URL)</label>
              <input
                value={coverImageId}
                onChange={(e) => setCoverImageId(e.target.value)}
                placeholder="Nhập ID hoặc URL ảnh..."
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Tác giả (Author ID)</label>
              <input
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                placeholder="Để trống = User hiện tại"
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-stone-700">Ngày xuất bản</label>
              <input
                type="datetime-local"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full rounded-lg border-stone-200 py-2 text-sm text-stone-600 focus:border-[#4D0000] focus:ring-[#4D0000]"
              />
              <p className="text-xs text-stone-400">Để trống = Chưa xuất bản (Draft)</p>
            </div>
          </div>
        </div>
      </div>
      
      {error && (
        <div className="fixed bottom-4 right-4 max-w-sm rounded-lg bg-red-100 p-4 text-sm text-red-800 shadow-lg border border-red-200 animate-in slide-in-from-bottom-2">
          <strong>Lỗi:</strong> {error}
          <button onClick={() => setError(null)} className="ml-2 underline">Đóng</button>
        </div>
      )}
    </div>
  );
}
