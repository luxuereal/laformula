'use client'
import Image from "next/image";
import {useTranslations} from 'next-intl';
import Link from "next/link";
import { useInView, animated } from "react-spring";

const Hero = () => {
  const t = useTranslations('hero');
  const navbar = useTranslations('navbar');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -80,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '0% 0px',
    }
  )
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-20 lg:pt-[140px] pb-16"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <animated.div ref={ref} style={springs} className="relative w-full items-center lg:flex lg:space-x-24">
                  {/* <Image
                    src="/images/texture/Texture Background.png"
                    alt="logo"
                    width={2164}
                    height={1298}
                  /> */}
                  <div className="text-base font-bold text-white lg:text-left mb-12 w-full lg:!w-[50%] lg:text-4xl lg:font-black md:text-4xl sm:text-2xl">
                    <p className="mx-auto">{t('para1')}</p>
                    <p className="text-2xl font-bold lg:text-4xl  bg-gradient-to-r from-red-500 via-pink-500 to-purple-500  text-transparent bg-clip-text">{t('para2')}</p>
                    <div className="flex items-start space-x-10 pt-10">
                      <Link href="#footer" onClick={handleScroll} className="flex-1 rounded-[64px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-4 text-center">{navbar('contact')}</Link>
                      <Link href="#footer" onClick={handleScroll} className="flex-1 rounded-[64px] bg-body_color p-4 text-center">{navbar('about')}</Link>
                    </div>
                  </div>
                  <span className="w-full lg:!w-[50%] m-12">
                    <Image
                      src="/images/hero/Increase Arrow.png"
                      alt="logo"
                      width="500"
                      height="500"
                    />
                  </span>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
