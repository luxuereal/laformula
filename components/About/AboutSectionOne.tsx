import Image from "next/image";

const AboutSeciontOne = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto text-center"
                data-wow-delay=".2s"
              >
                <div className="w-full items-center lg:flex lg:space-x-24">
                  {/* <Image
                    src="/images/texture/Texture Background.png"
                    alt="logo"
                    width={2164}
                    height={1298}
                  /> */}
                  <div className="text-3xl text-white text-left mb-12 w-full lg:!w-[50%]">
                    <p className=" text-7xl font-bold">Optimizing</p>
                    <p className=" text-7xl font-bold">Processes</p>
                    <p>We achieve outstanding results by enhancing processes and efficiently managing costs.</p>
                  </div>
                  <span className="w-full lg:!w-[50%] m-12">
                    <Image
                      src="/images/brand/Gradient Gear.png"
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

export default AboutSeciontOne;
