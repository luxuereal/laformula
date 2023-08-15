"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {useTranslations} from 'next-intl';

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = () => {
    if (openIndex === 100) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(100);
    }
  };

  const t = useTranslations('navbar');
  const lang = useTranslations('languages');
  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-black ${
          sticky
            ? "!fixed !z-[9999] !bg-black !bg-opacity-20 shadow-sticky backdrop-blur-sm !transition"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-4"
                } `}
                scroll={false}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 ${
                      navbarOpen ? "bg-dark " : "bg-white "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/20 bg-black py-4 px-6 duration-300  lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    <li className="group relative">
                      <Link
                        href="/"
                        className={`flex py-2 text-2xl font-bold text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-4 lg:px-0`}
                      >
                        {navbarOpen ? "" : <span className="pr-2 hidden lg:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </span>}
                        {t('contact')}
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/about"
                        className={`flex py-2 text-2xl font-bold text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-4 lg:px-0`}
                      >
                        {navbarOpen ? "" : <span className="pr-2 hidden lg:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </span>}
                        {t('about')}
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/blog"
                        className={`flex py-2 text-2xl font-bold text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-4 lg:px-0`}
                      >
                        {navbarOpen ? "" : <span className="pr-2 hidden lg:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </span>}
                        {t('faq')}
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/contact"
                        className={`flex py-2 text-2xl font-bold text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-4 lg:px-0`}
                      >
                        {navbarOpen ? "" : <span className="pr-2 hidden lg:block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-box-arrow-up-right"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                            />
                          </svg>
                        </span>}
                        {t('service')}
                      </Link>
                    </li>
                    <li className="group relative">
                      <a
                        onClick={() => handleSubmenu()}
                        className="flex cursor-pointer items-center justify-between py-2 text-2xl font-bold text-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                      >
                        {t('language')}
                        <span className="pl-3">
                          <svg width="15" height="14" viewBox="0 0 15 14">
                            <path
                              d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <div
                        className={`submenu relative top-full left-0 rounded-md bg-black transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                          openIndex === 100 ? "block" : "hidden"
                        }`}
                      >
                        <Link
                          href="/en"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          {lang('en')}
                        </Link>
                        <Link
                          href="/es"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          {lang('es')}
                        </Link>
                        <Link
                          href="/pt"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          {lang('pt')}
                        </Link>
                        <Link
                          href="/de"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          {lang('de')}
                        </Link>
                        <Link
                          href="/fr"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          {lang('fr')}
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
