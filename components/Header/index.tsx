"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = () => {
    if (openIndex === 100) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(100);
    }
  };

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
  const pathName = usePathname().slice(1);

  const t = useTranslations('navbar');
  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full `}
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
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
                >
                  <span className={`fi fi-${pathName === '' ? "us" : pathName}`}></span>
                </button>
                <ul
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 rounded border-[.5px] border-body-color/20 bg-black py-4 px-6 duration-300 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                    <li className="group relative">
                      <div
                        className={`submenu relative top-full left-0 rounded-md bg-black transition-[top] duration-300 group-hover:opacity-100`}
                      >
                        <Link
                          href="/en"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          <span className="fi fi-us"></span>
                          <span> EN</span>
                        </Link>
                        <Link
                          href="/es"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          <span className="fi fi-es"></span>
                          <span> ES</span>
                        </Link>
                        <Link
                          href="/pt"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          <span className="fi fi-pt"></span>
                          <span> PT</span>
                        </Link>
                        <Link
                          href="/de"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          <span className="fi fi-de"></span>
                          <span> DE</span>
                        </Link>
                        <Link
                          href="/fr"
                          className="block rounded py-2.5 text-sm text-white hover:opacity-70 lg:px-3"
                          scroll={false}
                        >
                          <span className="fi fi-fr"></span>
                          <span> FR</span>
                        </Link>
                      </div>
                    </li>
  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
