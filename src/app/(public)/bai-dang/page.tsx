import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import bannerImage from '@/assets/banner/banner-bai-dang.png';
import backgroundImage from '@/assets/background/background-baidang.png';
import titleBanner from '@/assets/banner/title-banner.png';
import navbarBox from '@/assets/boxes/navbar-box.png';
import baidangBox from '@/assets/boxes/baidang-box.png';
import paginationBox from '@/assets/boxes/pagination-box.png';
import { AutoScroll, SearchInput } from '@/components';
import {
  fetchCategories,
  fetchContentList,
  fetchFeaturedContents,
} from '@/lib/api';
import type { Category } from '@/types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Bài đăng',
  description: 'Danh sách bài đăng.',
};

// 2. Cấu hình font
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const bigShouldersDisplay = localFont({
  src: [
    {
      path: '../../../assets/fonts/BigShouldersDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/BigShouldersStencil_18pt-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-big-shoulders-display',
  display: 'swap',
});

const ITEMS_PER_PAGE = 4;

const CATEGORY_COLORS = ['#F9FFDC', '#FFF9A7', '#D7F9FA', '#FFD6E0'];

export default async function PostListPage(props: {
  searchParams: Promise<{ page?: string; query?: string; category?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const categorySlug = searchParams?.category || '';

  const [categories, contentRes, featuredPosts] = await Promise.all([
    fetchCategories().catch((err) => {
      console.error('Failed to load categories', err);
      return [] as Category[];
    }),
    fetchContentList({
      page: currentPage,
      pageSize: ITEMS_PER_PAGE,
      q: query,
      category: categorySlug,
    }).catch((err) => {
      console.error('Failed to load contents', err);
      return { items: [], total: 0, page: 1, pageSize: ITEMS_PER_PAGE };
    }),
    fetchFeaturedContents().catch((err) => {
      console.error('Failed to load featured contents', err);
      return [];
    }),
  ]);

  const posts = contentRes.items;
  console.log('Loaded posts:', posts);
  const pageSize = contentRes.pageSize || ITEMS_PER_PAGE;
  const totalPages = Math.ceil(contentRes.total / pageSize);
  const rowsCount = Math.ceil(posts.length / 2);
  const paginationTop = 400 + (rowsCount > 0 ? rowsCount : 1) * 592;

  const renderPaginationLinks = () => {
    if (totalPages <= 1) return null;
    const links = [];

    const createLink = (page: number) => {
      const isActive = page === currentPage;
      const params = new URLSearchParams();
      if (query) params.set('query', query);
      if (categorySlug) params.set('category', categorySlug);
      params.set('page', page.toString());

      return (
        <Link
          key={page}
          href={`?${params.toString()}`}
          scroll={false}
          className={`w-[45px] h-[46px] flex items-center justify-center text-[20px] font-bold transition-all
                  ${isActive ? 'text-[#F8FEDC] scale-110' : 'text-[#8D6E63] hover:text-[#5D4037]'}
                `}
          style={{
            fontFamily: 'var(--font-big-shoulders-display)',
          }}
        >
          {page}
        </Link>
      );
    };

    const renderEllipsis = (key: string) => (
      <span
        key={key}
        className="w-[45px] h-[46px] flex items-center justify-center text-[20px] font-bold text-[#8D6E63]"
        style={{ fontFamily: 'var(--font-big-shoulders-display)' }}
      >
        ...
      </span>
    );

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        links.push(createLink(i));
      }
    } else {
      // Always show first page
      links.push(createLink(1));

      if (currentPage > 3) {
        links.push(renderEllipsis('start-ellipsis'));
      }

      // Show current page range
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage === 1) end = Math.min(totalPages - 1, start + 2);
      if (currentPage === totalPages) start = Math.max(2, end - 2);

      for (let i = start; i <= end; i++) {
        links.push(createLink(i));
      }

      if (currentPage < totalPages - 2) {
        links.push(renderEllipsis('end-ellipsis'));
      }

      // Always show last page
      links.push(createLink(totalPages));
    }

    return links;
  };

  return (
    <div className="">
      <AutoScroll />
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner dịch vụ"
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <section
        id="post-list-top"
        className="relative w-full overflow-hidden bg-[#4D0000]/90"
        style={{ minHeight: `${paginationTop + 100}px` }}
      >
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover object-center pointer-events-none opacity-100"
          style={{
            maskImage:
              'linear-gradient(to bottom, black 95%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 95%, transparent 100%)',
          }}
          priority
        />

        {/* ===== MOBILE LAYOUT (hidden on lg+) ===== */}
        <div className="lg:hidden relative z-10 flex flex-col px-4 pt-6 pb-10 gap-6">
          {/* Title Banner – Mobile */}
          <div className="relative w-full max-w-[400px] mx-auto aspect-[569/320] flex items-center justify-center p-6">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-[28px] text-center uppercase leading-tight mr-2`}
              style={{
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: '#FDE3B1',
              }}
            >
              BÀI ĐĂNG
            </h1>
          </div>

          {/* Sidebar – Mobile */}
          <div
            className={`w-full rounded-lg bg-[#F8FEDC] border border-[#760000]/30 p-4 flex flex-col gap-3 ${beVietnamPro.className}`}
          >
            {/* SearchInput wraps in relative container to contain its absolute positioning */}
            <div className="relative h-[52px] w-full [&_input]:!w-full [&_input]:!left-0 [&_input]:!top-0 [&_input]:!h-full">
              <SearchInput />
            </div>
            <div className="uppercase font-black text-[14px] text-[#AF0000]">
              Chuyên mục
            </div>
            <div className="flex flex-col gap-1.5">
              {categories.map((category) => {
                const isSelected = category.slug === categorySlug;
                return (
                  <Link
                    key={category.id}
                    href={isSelected ? '?' : `?category=${category.slug}`}
                    scroll={false}
                    className={`text-[12px] text-[#AF0000] hover:underline ${isSelected ? 'font-bold' : 'font-normal'}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
            <div className="uppercase font-black text-[14px] text-[#AF0000] mt-1">
              CÁC BÀI VIẾT NỔI BẬT
            </div>
            <div className="flex flex-col gap-4">
              {featuredPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="flex items-start gap-3">
                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className="relative w-[56px] h-[56px] shrink-0 rounded-md overflow-hidden border border-[#AF0000]/20 group"
                  >
                    {post.coverImage?.url ? (
                      <Image
                        src={post.coverImage.url}
                        alt={post.coverAlt || post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-200" />
                    )}
                  </Link>
                  <div className="flex flex-col gap-1">
                    <Link
                      href={`/bai-dang/${post.slug}`}
                      className="text-[12px] font-bold text-[#AF0000] hover:underline line-clamp-2 leading-snug"
                    >
                      {post.title}
                    </Link>
                    <span className="text-[11px] text-[#760000]/80 italic">
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString('vi-VN')
                        : ''}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Post Cards – Mobile, 1 column */}
          <div className="flex flex-col gap-6">
            {posts.map((post, index) => {
              const catColor = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
              return (
                <div
                  key={post.id}
                  className="relative w-full bg-[#F8FEDC] rounded-lg border border-[#760000]/20 shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Cover image – aspect 3/2, ~65% of desktop 400×267 */}
                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className="relative block w-full aspect-[3/2] overflow-hidden"
                  >
                    {post.coverImage?.url ? (
                      <Image
                        src={post.coverImage.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-stone-200 flex items-center justify-center text-stone-400 text-sm">
                        No Image
                      </div>
                    )}
                  </Link>
                  <div
                    className={`p-4 flex flex-col gap-2 ${beVietnamPro.className}`}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[12px] text-[#760000]">
                        Chuyên mục:
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full bg-[#E75739] text-[10px]"
                        style={{ color: catColor }}
                      >
                        {post.category?.name || 'Chung'}
                      </span>
                    </div>
                    <Link
                      href={`/bai-dang/${post.slug}`}
                      className="text-[14px] font-black uppercase text-[#760000] leading-tight line-clamp-2 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <p className="text-[12px] text-[#760000] leading-snug line-clamp-3">
                      {post.excerpt || '...'}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#760000]">
                      <span>
                        Ngày đăng:{' '}
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString(
                              'vi-VN',
                            )
                          : ''}
                      </span>
                      <span>|</span>
                      <span>Tác giả: {post.authorName}</span>
                    </div>
                    <Link
                      href={`/bai-dang/${post.slug}`}
                      className="text-[12px] font-bold italic underline text-[#760000]"
                    >
                      Đọc thêm
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination – Mobile */}
          {totalPages > 1 && (
            <div
              className={`flex items-center justify-center gap-2 flex-wrap ${beVietnamPro.className}`}
            >
              {currentPage > 1 && (
                <Link
                  href={`?${new URLSearchParams({ ...(query ? { query } : {}), ...(categorySlug ? { category: categorySlug } : {}), page: (currentPage - 1).toString() }).toString()}`}
                  scroll={false}
                  className="px-3 py-2 text-[14px] font-bold text-[#760000] bg-[#F8FEDC] rounded hover:bg-[#FDE3B1]"
                >
                  &lt; Trước
                </Link>
              )}
              {renderPaginationLinks()}
              {currentPage < totalPages && (
                <Link
                  href={`?${new URLSearchParams({ ...(query ? { query } : {}), ...(categorySlug ? { category: categorySlug } : {}), page: (currentPage + 1).toString() }).toString()}`}
                  scroll={false}
                  className="px-3 py-2 text-[14px] font-bold text-[#760000] bg-[#F8FEDC] rounded hover:bg-[#FDE3B1]"
                >
                  Sau &gt;
                </Link>
              )}
            </div>
          )}
        </div>

        {/* ===== DESKTOP LAYOUT (hidden below lg) ===== */}
        <div className="hidden lg:flex relative z-10 flex-col items-center h-full">
          {/* Title Banner – Desktop */}
          <div
            className="absolute z-10 flex items-center justify-center p-8 ml-4"
            style={{ top: '45px', width: '568.61px', height: '319.84px' }}
          >
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase mr-4`}
              style={{
                fontSize: '32.7345px',
                fontWeight: 600,
                lineHeight: '39px',
                letterSpacing: '-0.03em',
                color: '#FDE3B1',
              }}
            >
              BÀI ĐĂNG
            </h1>
          </div>

          {/* Sidebar – Desktop */}
          <div
            className="absolute z-10"
            style={{
              width: '324px',
              height: '560px',
              left: '1064px',
              top: '400px',
            }}
          >
            <Image
              src={navbarBox}
              alt="Navbar Box"
              fill
              className="object-fill"
            />
            <SearchInput />
            <div
              className={`absolute flex items-center uppercase ${beVietnamPro.className}`}
              style={{
                width: '180px',
                height: '51px',
                left: '13px',
                top: '52px',
                fontWeight: 900,
                fontSize: '14.7651px',
                lineHeight: '19px',
                color: '#AF0000',
              }}
            >
              Chuyên mục
            </div>
            {categories.map((category, index) => {
              const isSelected = category.slug === categorySlug;
              return (
                <Link
                  key={category.id}
                  href={isSelected ? '?' : `?category=${category.slug}`}
                  scroll={false}
                  className={`absolute flex items-center cursor-pointer hover:underline ${beVietnamPro.className}`}
                  style={{
                    width: '180px',
                    height: '18px',
                    left: '19px',
                    top: `${92 + index * 22}px`,
                    fontWeight: isSelected ? 700 : 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#AF0000',
                  }}
                >
                  {category.name}
                </Link>
              );
            })}
            <div
              className={`absolute flex items-center uppercase ${beVietnamPro.className}`}
              style={{
                width: '223px',
                height: '51px',
                left: '13px',
                top: '210px',
                fontWeight: 900,
                fontSize: '14.7651px',
                lineHeight: '19px',
                color: '#AF0000',
              }}
            >
              CÁC BÀI VIẾT NỔI BẬT
            </div>
            {featuredPosts.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className="absolute flex items-start gap-3"
                style={{
                  width: '290px',
                  left: '18px',
                  top: `${260 + index * 95}px`,
                }}
              >
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className="relative w-[80px] h-[80px] shrink-0 border border-[#AF0000]/20 rounded-md overflow-hidden cursor-pointer group"
                >
                  {post.coverImage?.url ? (
                    <Image
                      src={post.coverImage.url}
                      alt={post.coverAlt || post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-200" />
                  )}
                </Link>
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/bai-dang/${post.slug}`}
                    className={`text-sm font-bold text-[#AF0000] hover:underline line-clamp-2 ${beVietnamPro.className}`}
                    style={{ lineHeight: '1.4' }}
                  >
                    {post.title}
                  </Link>
                  <span
                    className={`text-xs text-[#760000]/80 italic ${beVietnamPro.className}`}
                  >
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('vi-VN')
                      : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Post Cards – Desktop */}
          {posts.map((post, index) => {
            const isColumn2 = index % 2 !== 0;
            const rowIndex = Math.floor(index / 2);
            const topPosition = 400 + rowIndex * 592;
            const leftPosition = isColumn2 ? 602 : 149;
            const catColor = CATEGORY_COLORS[index % CATEGORY_COLORS.length];

            return (
              <div
                key={post.id}
                className="absolute z-10 transition-transform duration-300 hover:-translate-y-2"
                style={{
                  width: '426px',
                  height: '536px',
                  left: `${leftPosition}px`,
                  top: `${topPosition}px`,
                }}
              >
                <Image
                  src={baidangBox}
                  alt={`Bai Dang Box ${post.id}`}
                  fill
                  className="object-contain"
                />
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className="absolute cursor-pointer"
                  style={{
                    width: '400px',
                    height: '267px',
                    left: '14px',
                    top: '16px',
                  }}
                >
                  {post.coverImage?.url ? (
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                      No Image
                    </div>
                  )}
                </Link>
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '98px',
                    height: '51px',
                    left: '28px',
                    top: '302px',
                    fontWeight: 400,
                    fontSize: '14.7651px',
                    lineHeight: '19px',
                    color: '#760000',
                  }}
                >
                  Chuyên mục:
                </div>
                <div
                  className="absolute bg-[#E75739]"
                  style={{
                    width: '67px',
                    height: '20.62px',
                    left: '139px',
                    top: '317px',
                    borderRadius: '10.3077px',
                  }}
                />
                <div
                  className={`flex items-center ${beVietnamPro.className}`}
                  style={{
                    height: '27px',
                    left: '153px',
                    top: '314px',
                    position: 'absolute',
                    fontWeight: 400,
                    fontSize: '7.8168px',
                    lineHeight: '10px',
                    color: catColor,
                  }}
                >
                  {post.category?.name || 'Chung'}
                </div>
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className={`absolute flex items-center uppercase cursor-pointer ${beVietnamPro.className}`}
                  style={{
                    width: '370px',
                    height: '51px',
                    left: '28px',
                    top: '345px',
                    fontWeight: 900,
                    fontSize: '14.7651px',
                    lineHeight: '19px',
                    color: '#760000',
                  }}
                >
                  <span className="line-clamp-2">{post.title}</span>
                </Link>
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '370px',
                    height: '51px',
                    left: '28px',
                    top: '396px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  <span className="line-clamp-2">{post.excerpt || '...'}</span>
                </div>
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '140px',
                    height: '51px',
                    left: '28px',
                    top: '452px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  Ngày đăng:{' '}
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('vi-VN')
                    : ''}
                </div>
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '9px',
                    height: '51px',
                    left: '164px',
                    top: '452px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  |
                </div>
                <div
                  className={`absolute flex items-center ${beVietnamPro.className}`}
                  style={{
                    width: '160px',
                    height: '51px',
                    left: '175px',
                    top: '452px',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  Tác giả: {post.authorName}
                </div>
                <Link
                  href={`/bai-dang/${post.slug}`}
                  className={`absolute flex items-center italic cursor-pointer underline ${beVietnamPro.className}`}
                  style={{
                    width: '67px',
                    height: '12px',
                    left: '29px',
                    top: '499px',
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#760000',
                  }}
                >
                  Đọc thêm
                </Link>
              </div>
            );
          })}

          {/* Pagination Box – Desktop */}
          <div
            className="absolute z-10"
            style={{
              width: '879px',
              height: '67px',
              left: '149px',
              top: `${paginationTop}px`,
            }}
          >
            <Image
              src={paginationBox}
              alt="Pagination Box"
              fill
              className="object-contain"
            />
            <div
              className={`absolute flex items-center justify-center ${beVietnamPro.className}`}
              style={{
                width: '110px',
                height: '100%',
                left: '30px',
              }}
            >
              {currentPage > 1 && (
                <Link
                  href={`?${new URLSearchParams({ ...(query ? { query } : {}), ...(categorySlug ? { category: categorySlug } : {}), page: (currentPage - 1).toString() }).toString()}`}
                  scroll={false}
                  style={{
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#760000',
                  }}
                >
                  &lt; Trang trước
                </Link>
              )}
            </div>
            <div
              className={`absolute flex items-center justify-center gap-6 ${beVietnamPro.className}`}
              style={{
                left: '0',
                right: '0',
                top: '0',
                bottom: '0',
                margin: 'auto',
                width: 'fit-content',
                height: '100%',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#760000',
              }}
            >
              {renderPaginationLinks()}
            </div>
            <div
              className={`absolute flex items-center justify-center ${beVietnamPro.className}`}
              style={{
                width: '110px',
                height: '100%',
                right: '30px',
              }}
            >
              {currentPage < totalPages && (
                <Link
                  href={`?${new URLSearchParams({ ...(query ? { query } : {}), ...(categorySlug ? { category: categorySlug } : {}), page: (currentPage + 1).toString() }).toString()}`}
                  scroll={false}
                  style={{
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px',
                    color: '#760000',
                  }}
                >
                  Trang sau &gt;
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
