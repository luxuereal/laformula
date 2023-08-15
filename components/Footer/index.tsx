"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-black pt-16 md:pt-20 lg:pt-24 "
        data-wow-delay=".1s"
        id="footer"
      >
        <div className="container border-transparent">
          <div className="w-full mb-16">
            <div className="lg:flex items-center">
              <div className="flex-1">
                <Link
                  target="_blank"
                  href="https://t.me/laformulacapitalgroup"
                  className="text-white flex items-center space-x-2 lg:text-xl text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    viewBox="0 0 48 48"
                    id="telegram"
                  >
                    <rect width="48" height="48" fill="#419FD9" rx="24"></rect>
                    <rect
                      width="48"
                      height="48"
                      fill="url(#paint0_linear)"
                      rx="24"
                    ></rect>
                    <path
                      fill="#fff"
                      d="M10.7874 23.4709C17.7667 20.3663 22.4206 18.3195 24.7493 17.3305C31.3979 14.507 32.7795 14.0165 33.68 14.0002C33.878 13.9968 34.3208 14.0469 34.6077 14.2845C34.8499 14.4852 34.9165 14.7563 34.9484 14.9465C34.9803 15.1368 35.02 15.5702 34.9884 15.9088C34.6281 19.774 33.0692 29.1539 32.276 33.483C31.9404 35.3148 31.2796 35.929 30.6399 35.9891C29.2496 36.1197 28.1938 35.051 26.8473 34.1497C24.7401 32.7395 23.5498 31.8615 21.5044 30.4854C19.1407 28.895 20.673 28.0209 22.0201 26.5923C22.3726 26.2185 28.4983 20.5295 28.6169 20.0135C28.6317 19.9489 28.6455 19.7083 28.5055 19.5813C28.3655 19.4543 28.1589 19.4977 28.0098 19.5322C27.7985 19.5812 24.4323 21.8529 17.9113 26.3473C16.9558 27.0172 16.0904 27.3435 15.315 27.3264C14.4602 27.3076 12.8159 26.833 11.5935 26.4273C10.0942 25.9296 8.90254 25.6666 9.0063 24.8215C9.06035 24.3813 9.65403 23.9311 10.7874 23.4709Z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="24"
                        x2="24"
                        y2="47.644"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#2AABEE"></stop>
                        <stop offset="1" stopColor="#229ED9"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <p>Telegram</p>
                </Link>
              </div>
              <div className="flex-1">
                <Link
                  target="_blank"
                  href="info@laformulacapitalgroup.com"
                  className="text-white flex items-center space-x-2 lg:text-xl text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width={64}
                    height={64}
                    id="email"
                  >
                    <g fill="#134563">
                      <path d="m55.5 18.8-1.9-1.9L36 34.5c-2.2 2.2-5.9 2.2-8.1 0L10.3 17l-1.9 1.9L21.5 32 8.4 45.1l1.9 1.9 13.1-13.1 2.6 2.6c1.6 1.6 3.7 2.5 5.9 2.5s4.3-.9 5.9-2.5l2.6-2.6L53.5 47l1.9-1.9L42.3 32l13.2-13.2"></path>
                      <path d="M51.8 50.4H12.3c-2.3 0-4.2-1.9-4.2-4.2V18c0-2.3 1.9-4.2 4.2-4.2h39.5c2.3 0 4.2 1.9 4.2 4.2v28.2c0 2.3-1.9 4.2-4.2 4.2zM12.2 16.5c-.8 0-1.4.6-1.4 1.4v28.2c0 .8.6 1.4 1.4 1.4h39.5c.8 0 1.4-.6 1.4-1.4V17.9c0-.8-.6-1.4-1.4-1.4H12.2z"></path>
                    </g>
                  </svg>
                  info@laformulacapitalgroup.com
                </Link>
              </div>
              <div className="text-white flex items-center space-x-2 lg:text-xl text-base">
                <svg
                  fill="#2c99dd"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={42}
                  height={42}
                  viewBox="0 0 395.71 395.71"
                  stroke="#2c99dd"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"  
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>Costa Rica</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={24}
                  id="costa-rica"
                >
                  <path fill="#f0f0f0" d="M0 85.331h512v341.326H0z"></path>
                  <path fill="#d80027" d="M0 211.473h512v89.043H0z"></path>
                  <path
                    fill="#0052b4"
                    d="M0 352.462h512v74.207H0zM0 85.331h512v74.207H0z"
                  ></path>
                </svg>
                <p>| Centroamerica</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8  bg-primary">
          <div className="container">
            <p className="text-center text-base text-body-color ">
              Copyright © LA FORMULA All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
