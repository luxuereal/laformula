import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[240px] pb-16"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="relative w-full items-center lg:flex lg:space-x-24">
                  {/* <Image
                    src="/images/texture/Texture Background.png"
                    alt="logo"
                    width={2164}
                    height={1298}
                  /> */}
                  <div className="text-xl text-white text-left font-bold mb-12 w-full lg:!w-[50%] md:text-4xl sm:text-2xl">
                    <p>We enhance your efficiency and competitiveness with specialized</p>
                    <p>B2B solutions.</p>
                    <div className="flex items-start space-x-10 pt-10">
                      <div>Contact</div>
                      <div>About</div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
