'use client'
import Image from "next/image";
import {useTranslations} from 'next-intl';

const AboutSectionTwo = () => {
  const t = useTranslations('sectionTwo');
  return (
    <>
      <section id="home" className="relative z-10 pt-16 overflow-hidden pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="w-full items-center">
                  <div className="text-3xl text-white mb-12 w-full">
                    <p className=" text-7xl font-bold">{t('Title1')}</p>
                    <p className=" text-7xl font-bold">{t('Title2')}</p>
                    <p className=" pt-4 w-1/2 text-center mx-auto">
                    {t('para')}
                    </p>
                  </div>
                  <div className="lg:flex items-center justify-evenly">
                    <span className="w-1/6">
                      <Image
                        src="/images/brand/Gradient Corporate Gears.png"
                        alt="logo"
                        width="400"
                        height="400"
                      />
                    </span>
                    <span className="w-1/6">
                      <Image
                        src="/images/brand/Gradient Idea.png"
                        alt="logo"
                        width="400"
                        height="400"
                      />
                    </span>
                    <span className="w-1/6">
                      <Image
                        src="/images/brand/Gradient Business.png"
                        alt="logo"
                        width="400"
                        height="400"
                      />
                    </span>
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

export default AboutSectionTwo;
