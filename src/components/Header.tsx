import Link from 'next/link';
import Image from 'next/image';

import logo from '@/assets/logo/logo-header.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen bg-[#F9FFDC] z-50">
      <div className="absolute inset-x-0 top-0 h-[105px] border-b-[3px] border-[#9A0009]" />

      <div className="relative mx-auto flex h-[105px] w-full max-w-[1440px] items-center justify-center px-4">
        <nav
          aria-label="Primary"
          className="flex items-center gap-16 text-[16px] font-medium uppercase leading-[25px] tracking-wide text-[#771010] lg:gap-16"
          style={{ fontFamily: 'var(--font-saira)' }}
        >
          <Link href="/" aria-label="Dược Linh Các" className="shrink-0">
            <Image
              src={logo}
              alt="Dược Linh Các"
              priority
              // width={logo.width}
              // height={logo.height}
              className="h-auto w-auto max-h-[72px]"
            />
          </Link>

          <Link href="/chung-benh" className="hover:text-[#5f0c0c]">
            Các chứng bệnh
          </Link>
          <Link href="/dich-vu" className="hover:text-[#5f0c0c]">
            Sản phẩm - dịch vụ
          </Link>
          <Link href="/linh-duoc" className="hover:text-[#5f0c0c]">
            Linh dược
          </Link>
          <Link href="/bai-dang" className="hover:text-[#5f0c0c]">
            Bài đăng
          </Link>
          <Link href="/lien-he" className="hover:text-[#5f0c0c]">
            Liên hệ
          </Link>
        </nav>
      </div>
    </header>
  );
}
