import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import backgroundImage from '@/assets/background/background-chungbenh.png';
import bannerImage from '@/assets/banner/banner-chung-benh.png';
import titleBanner from '@/assets/banner/title-banner.png';
import chungBenhBox from '@/assets/boxes/chung-benh-box.png';
import redBox from '@/assets/boxes/red-box.png';
import cranePattern from '@/assets/patterns/crane-pattern.png';
import Image from 'next/image';
import { Reveal } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Chứng bệnh',
  description: 'Danh sách nội dung về chứng bệnh.',
};

// 2. Cấu hình font
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
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

export default async function DiseaseListPage() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner chứng bệnh"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <section className="relative w-full min-h-screen overflow-hidden bg-[#4D0000]/90 pb-20">
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
        <div className="relative z-10 flex flex-col items-center h-full px-4 md:px-0">
          {/* Title Banner */}
          <div className="relative mt-8 md:mt-[45px] w-full max-w-[568px] aspect-[568/320] flex items-center justify-center p-8">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase md:mr-4`}
              style={{
                lineHeight: '1.2',
                letterSpacing: '-0.03em',
                color: '#FDE3B1',
              }}
            >
              <span className="text-[20px] md:text-[32px] font-semibold">
                CÁC CHỨNG TRẠNG BỆNH NHÂN THƯỜNG GẶP
              </span>
            </h1>
          </div>

          {/* Main Content Box */}
          <div className="relative mt-4 md:mt-[60px] w-full max-w-[1167px]">
            <div className="absolute inset-0 -z-10 w-full h-full">
              <Image
                src={chungBenhBox}
                alt="Chứng bệnh box"
                fill
                className="object-fill"
                priority
              />
            </div>

            <div className="flex flex-col items-center justify-center px-6 py-12 md:px-[77px] md:py-[80px] text-center md:text-left">
              <h2
                className={`${bigShouldersDisplay.className} text-[#BA0B00] uppercase font-semibold mb-3 md:mb-6 text-center`}
              >
                <span className="text-[20px] md:text-[50px] lg:text-[60px] leading-tight">
                  HỤT HƠI, THỞ NGẮN, VẬN ĐỘNG NHANH MỆT
                </span>
              </h2>

              <div
                className={`${beVietnamPro.className} text-[#690F0C] font-normal mb-4 md:mb-8 text-justify`}
              >
                <span className="text-[10px] md:text-[16px] leading-[1.5]">
                  Chứng hụt hơi, thở ngắn, vận động nhanh mệt, có thể kèm theo
                  bụng hay chướng đầy, mắc tiểu phải đi ngay không nhịn được
                  lâu. Hoặc có thể kèm theo chứng dễ ho, ngứa họng khi trời mưa
                  ẩm hoặc thời tiết thay đổi; thỉnh thoảng trí nhớ hay quên cục
                  bộ. Bạn có bao giờ bị như vậy không? Khi bị như vậy bạn thường
                  nghĩ đến mình bị bệnh gì? Nguyên nhân tại sao?{' '}
                  <br className="hidden md:block" />
                  Phần lớn bệnh nhân khi thấy hụt hơi, thở ngắn, nhanh mệt
                  thường hay nghĩ đến Phổi và tìm bệnh ở Phổi và đường hô hấp
                  trên. Nếu kèm theo thỉnh thoảng hay quên cục bộ sẽ hay cho
                  rằng ảnh hưởng hậu COVID.
                </span>
              </div>

              <div
                className={`${beVietnamPro.className} text-[#771010] font-bold text-[12px] md:text-[20px] mb-3 md:mb-4 text-left md:text-left w-full`}
              >
                Nếu bạn phán đoán như vậy thì không sai nhưng chưa ĐÚNG, ĐỦ
              </div>

              <div
                className={`${beVietnamPro.className} text-[#690F0C] font-normal mb-8 text-justify`}
              >
                <span className="text-[10px] md:text-[16px] leading-[1.5]">
                  Chẩn đoán theo chuyên môn, chứng bệnh gặp phải ở phổi và hầu
                  họng, đường hô hấp trên; y học cổ truyền gọi đây là chứng
                  “NGỰC ĐẦY KHÍ ĐOẢN”. Để hiểu rõ nguyên nhân cần kiểm tra tổng
                  quát thông qua bắt mạch, quan sát và trò chuyện, trao đổi với
                  bệnh nhân “Tứ Chuẩn”, thậm chí kiểm tra một số sinh nguyệt và
                  một số điểm phản ứng trên cơ thể (Án Chẩn). Thông thường có
                  một số căn nguyên sau đây:
                </span>
              </div>

              <h3
                className={`${bigShouldersDisplay.className} text-[#B90407] uppercase font-semibold mb-3 md:mb-4 text-center`}
              >
                <span className="text-[20px] md:text-[40px] leading-tight">
                  DO THẬN HƯ KHÍ NGHỊCH
                </span>
              </h3>

              <div
                className={`${beVietnamPro.className} text-[#690F0C] font-normal mb-8 text-justify`}
              >
                <span className="text-[10px] md:text-[16px] leading-[1.5]">
                  Tức là thận dương nạp khí kém; lượng khí do phổi hô hấp không
                  được thận dương nạp đủ đầy dẫn đến dư, ứ khí ở phế (phổi).
                  Lượng khí này tuy là thanh khí nhưng khi bị dư đầy ở phế sẽ
                  làm cho lượng khí mới hít vào không có chỗ chứa, do đó có cảm
                  giác hơi thở ngắn, ngực đầy tức gọi là chứng “NGỰC ĐẦY KHÍ
                  ĐOẢN”. Lượng khí thừa ử phế như lớp sương mù, “quá mù sẽ ra
                  mưa”, khí ứ dễ hóa dịch gây ho ở hầu họng và có thể gây sổ
                  mũi. Hoặc khi ăn đồ có canh nóng như phở, hủ tiếu, canh nóng…
                  dễ chảy nước mũi.
                </span>
              </div>

              <h3
                className={`${bigShouldersDisplay.className} text-[#B90407] uppercase font-semibold mb-3 md:mb-4 text-center`}
              >
                <span className="text-[20px] md:text-[40px] leading-tight">
                  CƠ THỂ SẼ TỰ CHỮA BỆNH NHƯ THẾ NÀO?
                </span>
              </h3>

              <div
                className={`${beVietnamPro.className} text-[#690F0C] font-normal text-justify`}
              >
                <span className="text-[10px] md:text-[16px] leading-[1.5]">
                  Thường cơ thể con người rất vi diệu khi gặp những biến động
                  bất thường nó sẽ tự điều chỉnh tạo ra các phản ứng để “sữa
                  chữa” ví dụ: thường sẽ hay ngáp , hoặc vương vai thở dài đây
                  là phản ứng tự nhiên để tống tháo khi thừa trong lòng ngực ra.
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[1200px] mt-[-20px] md:mt-[-50px] lg:mt-[-100px] md:mb-[-100px] h-[200px] md:h-[400px] lg:h-[675px] z-0">
            <Reveal width="w-full" className="h-full">
              <Image
                src={cranePattern}
                alt="Crane Pattern"
                fill
                className="object-contain"
              />
            </Reveal>
          </div>

          <div className="relative w-full max-w-[757px] mt-8 md:mt-0 z-10 p-4">
            <div className="absolute inset-0 -z-10 w-full h-full">
              <Image src={redBox} alt="Red Box" fill className="object-fill" />
            </div>
            <Reveal>
              <div className="flex flex-col items-center justify-center p-10 md:p-12 lg:p-16">
                <div
                  className={`${bigShouldersDisplay.className} text-center uppercase`}
                  style={{
                    fontWeight: 600,
                    color: '#FFF017',
                    fontFeatureSettings: "'salt' on, 'kern' off",
                  }}
                >
                  <p className="text-[12px] md:text-[27px] leading-relaxed mb-4">
                    Pháp trị của DLC tùy theo từng bệnh nhân với các chứng trạng
                    kèm theo khác nhau để lập pháp trị. Thường chứng trạng trên
                    nếu ở thể nhẹ chỉ cần lập phác đồ châm cứu hoặc bấm huyệt
                    phục hồi công năng nạp khí của thận dương là phế thông họng
                    thoáng.
                  </p>
                  <p className="text-[12px] md:text-[27px] leading-relaxed">
                    Trường hợp bệnh nặng hơn hay kèm theo các chứng bụng chướng
                    đầy, mắc tiểu không nhịn lâu do tùy khí hạ hãm, khí chèn
                    bàng quan gây áp lực mắc tiểu không nhịn lâu thì có thể phải
                    lập phương dụng dược “kê thuốc” dùng thuốc nam để điều trị.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
