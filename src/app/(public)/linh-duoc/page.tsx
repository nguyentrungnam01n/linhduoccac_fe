import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Image from 'next/image';
import localFont from 'next/font/local';
import bannerImage from '@/assets/banner/banner-linh-duoc.png';
import backgroundImage from '@/assets/background/background-linhduoc.png';
import titleBanner from '@/assets/banner/title-banner.png';
import titlePattern from '@/assets/patterns/title-pattern.png';
import thuocNamPattern from '@/assets/patterns/thuoc-nam-pattern.png';
import thuocBacPattern from '@/assets/patterns/thuoc-bac-pattern.png';
import linhDuocBox from '@/assets/boxes/linh-duoc-box.png';
import bigLine from '@/assets/line/big-line.png';
import dvuPattern1 from '@/assets/patterns/dvu-pattern-1.png';
import dvuPattern2 from '@/assets/patterns/dvu-pattern-2.png';
import dvuPattern4 from '@/assets/patterns/dvu-pattern-4.png';
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Linh dược',
  description: 'Danh sách nội dung về linh dược.',
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

export default function HerbListPage() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          src={bannerImage}
          alt="Banner linh dược"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <section className="relative w-full min-h-screen md:min-h-[7150px] overflow-hidden bg-[#4D0000]/90 pb-20 md:pb-0">
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

        <div className="relative z-10 flex flex-col items-center h-full w-full px-4 md:px-0 md:gap-0 mt-8 md:mt-0">
          {/* Title Banner: LINH DƯỢC */}
          <div className="relative md:absolute flex items-center justify-center p-8 md:ml-4 w-full max-w-[568.61px] aspect-[568/320] md:top-[45px]">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase md:mr-4 font-semibold text-[#FDE3B1] leading-[39px] tracking-[-0.03em]`}
            >
              <span className="text-[24px] md:text-[32.73px]">LINH DƯỢC</span>
            </h1>
          </div>

          {/* Title: NGUYÊN TẮC DỤNG DƯỢC CẦN BIẾT */}
          <div className="relative md:absolute flex items-center justify-center md:top-[335px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2">
            <Image
              src={titlePattern}
              alt="Title Pattern"
              fill
              className="object-contain -z-10"
              priority
            />
            <h2
              className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
            >
              <span className="text-[20px] md:text-[40.58px]">
                NGUYÊN TẮC DỤNG DƯỢC CẦN BIẾT
              </span>
            </h2>
          </div>

          {/* Linh Duoc Box Container */}
          <div className="relative md:absolute flex flex-col items-center md:block md:top-[576px] w-full md:w-[1167px] h-auto md:h-[1155px] md:left-1/2 md:-translate-x-1/2 gap-8 md:gap-0 px-4 md:px-0 py-10 md:py-0">
            {/* Hình nền: Mobile dùng object-fill để giãn, Desktop dùng object-contain để giữ tỉ lệ */}
            <div className="absolute inset-0">
              <Image
                src={linhDuocBox}
                alt="Linh Duoc Box"
                fill
                className="object-fill md:object-contain"
                priority
              />
            </div>

            {/* Nội dung bên trong - z-10 để nổi trên nền */}
            <div className="relative z-10 w-full h-full">
              {/* Block 1 */}
              <div className="flex flex-col items-center md:block">
                <h3
                  className={`${bigShouldersDisplay.className} relative md:absolute text-center uppercase font-semibold text-[#BA0B00] leading-[1.2] tracking-[-0.03em] w-full md:w-[724px] md:h-[73px] md:left-[235px] top-8 md:top-[95px]`}
                >
                  <span className="text-[28px] md:text-[60.77px]">
                    tại sao phải có kiến thức về thuốc?
                  </span>
                </h3>
                <div
                  className={`relative md:absolute ${beVietnamPro.className} text-[#690F0C] font-normal text-justify flex items-center w-full md:w-[1029px] md:h-[120px] md:left-[77px] md:top-[221px] mt-12 md:mt-0 px-2 md:px-0`}
                >
                  <p className="text-[14px] md:text-[16.68px] leading-[1.6] md:leading-[21px]">
                    Lorsem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qu
                  </p>
                </div>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col items-center md:block mt-10 md:mt-0">
                <h3
                  className={`${bigShouldersDisplay.className} relative md:absolute text-center uppercase font-semibold text-[#BA0B00] leading-[1.2] tracking-[-0.03em] w-full md:w-[921px] md:h-[73px] md:left-[127px] md:top-[425px]`}
                >
                  <span className="text-[28px] md:text-[60.77px]">
                    TẠI SAO PHẢI PHỐI THUỐC KHÔNG DÙNG ĐƠN LẺ?
                  </span>
                </h3>
                <div
                  className={`relative md:absolute ${beVietnamPro.className} text-[#690F0C] font-normal text-justify flex items-center w-full md:w-[1029px] md:h-[120px] md:left-[77px] md:top-[551px] mt-4 md:mt-0 px-2 md:px-0`}
                >
                  <p className="text-[14px] md:text-[16.68px] leading-[1.6] md:leading-[21px]">
                    Lorsem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qu
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="flex flex-col items-center md:block mt-10 md:mt-0 mb-10 md:mb-0">
                <h3
                  className={`${bigShouldersDisplay.className} relative md:absolute text-center uppercase font-semibold text-[#BA0B00] leading-[1.2] tracking-[-0.03em] w-full md:w-[724px] md:h-[73px] md:left-[235px] md:top-[745px]`}
                >
                  <span className="text-[28px] md:text-[60.77px]">
                    tại sao phải có kiến thức về thuốc?
                  </span>
                </h3>
                <div
                  className={`relative md:absolute ${beVietnamPro.className} text-[#690F0C] font-normal text-justify flex items-center w-full md:w-[1029px] md:h-[120px] md:left-[77px] md:top-[891px] mt-4 md:mt-0 px-2 md:px-0`}
                >
                  <p className="text-[14px] md:text-[16.68px] leading-[1.6] md:leading-[21px]">
                    Lorsem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qu
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BIG LINE DECORATION 1 */}
          <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[1791px] w-full max-w-[300px] md:max-w-[700px] h-auto flex items-center justify-center mt-4 md:my-0">
            <Image
              src={bigLine}
              alt="Decoration Line"
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Title Banner: TẠI SAO NAM DƯỢC ... */}
          <div className="relative md:absolute flex items-center justify-center md:ml-4 w-full max-w-[568.61px] aspect-[568/320] md:top-[1891px]">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase md:mr-4 font-semibold text-[#FDE3B1] leading-[39px] tracking-[-0.03em]`}
            >
              <span className="text-[20px] md:text-[32.73px]">
                TẠI SAO NAM DƯỢC LÀ LINH DƯỢC?
              </span>
            </h1>
          </div>

          {/* THUOC NAM Section */}
          <div className="w-full flex flex-col md:block items-center md:gap-0">
            {/* Pattern + Title */}
            <div className="relative md:absolute md:top-[2131px] w-[70%] md:w-[537.25px] aspect-[537/760] md:left-1/2 md:-translate-x-[520px]">
              <Image
                src={thuocNamPattern}
                alt="Thuoc Nam Pattern"
                fill
                className="object-contain"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#FDE3B1] leading-[1.2] tracking-[-0.03em] absolute top-[15%] left-1/2 -translate-x-1/2 md:w-[191px] md:h-[70px] md:left-[173px] md:top-[95px] md:translate-x-0`}
              >
                <span className="text-[20px] pt-10 md:text-[58.72px]">
                  THUỐC NAM
                </span>
              </h2>
            </div>

            {/* Content Text */}
            <div
              className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[2361px] w-full max-w-[452px] md:h-[300px] md:left-1/2 md:translate-x-[85px]`}
            >
              <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.&quot;
                <br />
                <br />
                Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
                &quot;Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qu
              </p>
            </div>
          </div>

          {/* THUOC BAC Section */}
          <div className="w-full flex flex-col md:block items-center md:gap-0">
            {/* Pattern + Title */}
            <div className="relative md:absolute md:top-[2753px] w-[60%] md:w-[537.25px] aspect-[537/760] md:left-1/2 md:translate-x-[0px] md:order-last">
              <Image
                src={thuocBacPattern}
                alt="Thuoc Bac Pattern"
                fill
                className="object-contain"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#FDE3B1] leading-[1.2] tracking-[-0.03em] absolute top-[15%] left-1/2 -translate-x-1/2 md:w-[175px] md:h-[70px] md:left-[181px] md:top-[96px] md:translate-x-0`}
              >
                <span className="text-[20px] md:text-[58.72px]">THUỐC BẮC</span>
              </h2>
            </div>

            {/* Content Text (DOM Reordered for mobile flow: Pattern is displayed first on mobile via flex order, but here I can just use flex-col on mobile and natural order.
               Wait, Thuoc Bac: Pattern is at 2753, Text is at 2983. So Pattern IS first naturally.
               Wait, in original code: Text at 2983 was listed BEFORE Pattern at 2753.
               I will list Pattern first here so it appears on top in mobile.
            */}
            <div
              className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[2983px] w-full max-w-[452px] md:h-[300px] md:left-1/2 md:-translate-x-[477px]`}
            >
              <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.&quot;
                <br />
                <br />
                Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
                &quot;Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qu
              </p>
            </div>
          </div>

          {/* BIG LINE DECORATION 2 */}
          <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[3443px] w-full max-w-[300px] md:max-w-[700px] h-auto flex items-center justify-center my-4 md:my-0">
            <Image
              src={bigLine}
              alt="Decoration Line"
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Title Banner: HUYỀN CƠ ... */}
          <div className="relative md:absolute flex items-center justify-center p-8 md:ml-4 w-full max-w-[568.61px] aspect-[568/320] md:top-[3583px]">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase md:mr-4 font-semibold text-[#FDE3B1] leading-[39px] tracking-[-0.03em]`}
            >
              <span className="text-[20px] md:text-[32.73px]">
                HUYỀN CƠ TẠO NÊN LINH DƯỢC
              </span>
            </h1>
          </div>

          {/* Text Block 1 */}
          <div
            className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[3946px] w-[90%] md:w-[1032px] md:h-[212px] md:left-1/2 md:-translate-x-[516px]`}
          >
            <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.&quot;
              <br />
              <br />
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
              <br />
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qu
            </p>
          </div>

          {/* Text Block 2 */}
          <div
            className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[4210px] w-[90%] md:w-[1045px] md:h-[212px] md:left-1/2 md:-translate-x-[519.5px]`}
          >
            <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.&quot;
              <br />
              <br />
              Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
              written by Cicero in 45 BC
              <br />
              &quot;Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qu
            </p>
          </div>

          {/* Title Banner: CÁC VỊ THUỐC ... */}
          <div className="relative md:absolute flex items-center justify-center p-8 md:ml-4 w-full max-w-[568.61px] aspect-[568/320] md:top-[4484px]">
            <Image
              src={titleBanner}
              alt="Title Banner"
              fill
              className="object-contain -z-10"
              priority
            />
            <h1
              className={`${bigShouldersDisplay.className} text-center uppercase md:mr-4 font-semibold text-[#FDE3B1] leading-[39px] tracking-[-0.03em]`}
            >
              <span className="text-[24px] md:text-[32.73px]">
                CÁC VỊ THUỐC DÂN TỘC
              </span>
            </h1>
          </div>

          {/* Item 1: THUỐC 1 */}
          <div className="w-full flex flex-col md:block items-center gap-6 md:gap-0">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[4820px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.58px]">THUỐC 1</span>
              </h2>
            </div>

            {/* Pattern Image */}
            <div className="relative md:absolute md:top-[4990px] w-[60%] md:w-[443px] aspect-[443/571] md:left-1/2 md:-translate-x-[519px]">
              <Image
                src={dvuPattern1}
                alt="Dvu Pattern 1"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <div
              className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[5100px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:translate-x-[16px]`}
            >
              <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.&quot;
                <br />
                <br />
                Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
                &quot;Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qu
              </p>
            </div>
          </div>

          {/* Item 2: THUỐC 2 */}
          <div className="w-full flex flex-col md:block items-center gap-6 md:gap-0">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[5570px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.58px]">THUỐC 2</span>
              </h2>
            </div>

            {/* Pattern Image (Note: In original, Image at 5790, Text at 5870) */}
            <div className="relative md:absolute md:top-[5790px] w-[60%] md:w-[443px] aspect-[443/481] md:left-1/2 md:translate-x-[74px]">
              <Image
                src={dvuPattern2}
                alt="Dvu Pattern 2"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <div
              className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[5870px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:-translate-x-[509px]`}
            >
              <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.&quot;
                <br />
                <br />
                Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
                &quot;Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qu
              </p>
            </div>
          </div>

          {/* Item 3: THUỐC 3 */}
          <div className="w-full flex flex-col md:block items-center gap-6 md:gap-0">
            {/* Title */}
            <div className="relative md:absolute flex items-center justify-center md:top-[6330px] w-full max-w-[572px] aspect-[572/193] md:left-1/2 md:-translate-x-1/2">
              <Image
                src={titlePattern}
                alt="Title Pattern"
                fill
                className="object-contain -z-10"
                priority
              />
              <h2
                className={`${bigShouldersDisplay.className} text-center uppercase font-semibold text-[#B90407] leading-[1.2] tracking-[-0.03em]`}
              >
                <span className="text-[20px] md:text-[40.58px]">THUỐC 3</span>
              </h2>
            </div>

            {/* Pattern Image (Note: In original, Image at 6560, Text at 6630) */}
            <div className="relative md:absolute md:top-[6560px] w-[60%] md:w-[443px] aspect-[443/481] md:left-1/2 md:translate-x-[74px]">
              <Image
                src={dvuPattern4}
                alt="Dvu Pattern 4"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text */}
            <div
              className={`relative md:absolute z-0 ${beVietnamPro.className} text-[#FFE7B6] font-normal text-justify flex items-center md:top-[6630px] w-full max-w-[539px] md:h-[357px] md:left-1/2 md:-translate-x-[509px]`}
            >
              <p className="text-[10px] md:text-[16.68px] leading-[1.5] md:leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.&quot;
                <br />
                <br />
                Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
                &quot;Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qu
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
