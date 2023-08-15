'use client'
import Image from "next/image";
import {useTranslations} from 'next-intl';

const AboutSectionThree = () => {
  const t = useTranslations('sectionThree');
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[200px] pb-16 bg-black"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="w-full flex items-center px-24 space-x-8">
                  {/* <Image
                    src="/images/texture/Texture Background.png"
                    alt="logo"
                    width={2164}
                    height={1298}
                  /> */}
                  <div className="relative w-1/2 h-[460px] bg-body_color/[.07] border-transparent rounded-[64px] pt-24">
                    <span className="absolute w-1/3 left-1/3 -top-[130px]">
                      <Image
                        src="/images/brand/Global Gradient.png"
                        alt="logo"
                        width="400"
                        height="400"
                      />
                    </span>
                    <div className="text-3xl text-white mb-12 w-full">
                      <p className=" text-6xl font-semibold">{t('Title1')}</p>
                      <p className=" text-6xl font-semibold">{t('Title2')}</p>
                      <p className=" pt-4 text-center mx-auto">
                      {t('para1')}
                      </p>
                    </div>
                  </div>
                  <div className="relative w-1/2 h-[460px] bg-body_color/[.07] border-transparent rounded-[64px] pt-24">
                    <span className="absolute w-1/3 left-1/3 -top-[130px]">
                      <Image
                        src="/images/brand/Gradient Bank.png"
                        alt="logo"
                        width="400"
                        height="400"
                      />
                    </span>
                    <div className="text-3xl text-white mb-12 w-full">
                      <p className=" text-7xl font-semibold">{t('Title3')}</p>
                      <p className=" text-6xl font-semibold">&{t('Title4')}</p>
                      <p className=" pt-4 text-center mx-auto">
                      {t('para2')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionThree;
