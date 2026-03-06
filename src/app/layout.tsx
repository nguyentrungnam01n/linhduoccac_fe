import type { Metadata } from 'next';
import { Big_Shoulders, Saira } from 'next/font/google';
import './globals.css';

const saira = Saira({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-saira',
});

const bigShouldersDisplay = Big_Shoulders({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-big-shoulders-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Dược Linh Các',
    template: '%s | Dược Linh Các',
  },
  description:
    'Nội dung sức khỏe, dược liệu, dịch vụ và bài đăng từ Dược Linh Các.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${saira.variable} ${bigShouldersDisplay.variable} min-h-dvh bg-white text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
