"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { animated, useInView } from "react-spring";

const AboutSectionFour = () => {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 80,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "0% 0px",
    }
  );
  const t = useTranslations("sectionFour");
  return (
    <>
      <section id="home" className="relative z-10 pt-16 overflow-hidden pb-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
          <div
              className="w-full px-4 rounded-lg bg-cover bg-no-repeat"
              style={{
                backgroundImage: "url('/images/texture/texture.png')",
              }}
            >
              <div
                className="wow fadeInUp mx-auto text-center pt-20"
                data-wow-delay=".2s"
              >
                <div className="w-full items-center">
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="text-base lg:text-3xl text-white mb-12 w-full"
                  >
                    <p className="text-xl lg:text-7xl lg:font-bold ">
                      {t("Title1")}
                    </p>
                    <p className="text-xl lg:text-7xl lg:font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 inline-block text-transparent bg-clip-text leading-10">
                      {t("Title2")}
                    </p>
                  </animated.div>
                  <animated.div ref={ref} style={springs} className="flex justify-center items-center pb-8">
                    <Image
                      src="/images/brand/Gradient map.png"
                      alt="logo"
                      width="400"
                      height="400"
                    />
                  </animated.div>
                  <animated.div
                    ref={ref}
                    style={springs}
                    className="flex justify-center items-center"
                  >
                    <p className="text-base lg:text-3xl lg:w-1/2 mb-12 border-2 border-white text-white rounded-3xl text-center px-1 lg:px-2 py-4">
                      {t("para")}
                    </p>
                  </animated.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionFour;
