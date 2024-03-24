"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/NavBar.module.css";
import Image from "next/image";
import saudi from "@/public/assets/FlagS.png";
import britich from "@/public/assets/britich.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import jumla from "@/public/assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import JoinForm from "../JoinForm";
import { usePathname } from "next/navigation";

function NavBar({ translation, isRTL, services, lang }) {
  const [isJoinFormActive, setIsJoinFormActive] = useState(false);
  const [menuIcon, setIcon] = useState(false);
  const handleSmall = () => {
    setIcon(!menuIcon);
  };

  // Scrolling Effects
  useEffect(() => {
    const header = document.getElementById("navbar");

    let lastScrollTop = 0;
    let ticking = false;

    function updateNavbarVisibility(scrollTop) {
      if (scrollTop > lastScrollTop) {
        header.classList.add("navbar-hidden");
      } else if (scrollTop === 0) {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
      } else {
        header.classList.remove("navbar-hidden");
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 5px 16px rgb(0, 0, 0, 0.5)";
      }
      lastScrollTop = scrollTop;
    }

    function onScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (!ticking) {
        requestAnimationFrame(() => {
          updateNavbarVisibility(scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    }
    // Debounce scroll events
    window.addEventListener("scroll", onScroll);

    // Cleanup the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}`;

  return (
    <header
      dir={isRTL ? "rtl" : "ltr"}
      id="navbar"
      className="w-full flex justify-center items-center fixed top-0 z-[999]"
    >
      <nav className="md:h-[100px] h-[80px] flex justify-between items-center">
        <div className="hidden text-xl lg:text-base lg:flex items-center gap-16">
          <div className="">
            <Link href={`/${lang}`} className="cursor-pointer">
              <Image src={jumla} alt="Jumla Logo" className="w-[150px]" />
            </Link>
          </div>
          <ul className="flex items-start gap-10 text-[20px] font-[500]">
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-[20px] cursor-pointer"
                >
                  {translation?.navbar?.home}
                </ScrollLink>
              ) : (
                <Link href={`/${lang}`} className="text-[20px] cursor-pointer">
                  {translation?.navbar?.home}
                </Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-[20px] cursor-pointer"
                >
                  {translation?.navbar?.about}
                </ScrollLink>
              ) : (
                <Link
                  href={`/${lang}#about`}
                  className="text-[20px] cursor-pointer"
                >
                  {translation?.navbar?.about}
                </Link>
              )}
            </li>

            <li>
              <div className="group inline-block relative text-[20px]">
                <span className="rounded inline-flex items-center text-[20px] cursor-pointer">
                  {translation?.navbar?.services}
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
                <ul className="absolute hidden w-[250px] text-gray-700 text-lg group-hover:block text-start rounded-[26px] py-5 bg-white shadow-2xl">
                  {services?.map((item, key) => (
                    <li key={key} className="">
                      {isHomePage ? (
                        <ScrollLink
                          to={item?._id}
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                          className="drop-text py-2 px-4 block whitespace-no-wrap cursor-pointer"
                        >
                          {lang === "ar"
                            ? item?.title?.ar
                            : lang === "en"
                            ? item?.title?.en
                            : ""}
                        </ScrollLink>
                      ) : (
                        <Link
                          href={`/${lang}#${item?._id}`}
                          className="drop-text py-2 px-4 block whitespace-no-wrap cursor-pointer"
                        >
                          {lang === "ar"
                            ? item?.title?.ar
                            : lang === "en"
                            ? item?.title?.en
                            : ""}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              {isHomePage ? (
                <ScrollLink
                  to="howItWorks"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer"
                >
                  {translation?.navbar?.howWeWork}
                </ScrollLink>
              ) : (
                <Link
                  href={`/${lang}#howItWorks`}
                  className="text-[20px] cursor-pointer"
                >
                  {translation?.navbar?.howWeWork}
                </Link>
              )}
            </li>
          </ul>
          {/* Languages */}
          <ul className="flex items-center gap-2 ">
            <li className=" cursor-not-allowed">
              <Link href={`/en/${pathname?.slice(4)}`}>
                <Image
                  className="rounded-full min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] object-cover"
                  src={britich}
                  alt="British"
                />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                href={`/ar/${pathname?.slice(4)}`}
                className="cursor-pointer"
              >
                <Image
                  className="rounded-full min-w-[25px] min-h-[25px] max-w-[25px] max-h-[25px] object-cover"
                  src={saudi}
                  alt="Arabic"
                />
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsJoinFormActive(true)}
            className={`${styles.buttonNav} `}
          >
            {translation?.navbar?.buttons?.startNow}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div dir="ltr" className="w-full lg:hidden">
        <div className="flex lg:hidden ">
          <div className="text-gray-800 font-bold mt-2 w-full flex justify-between md:px-10 px-5">
            <Link href="/">
              <Image src={jumla} alt="Jumla Logo" className="w-[130px]" />
            </Link>
            <button className="  rounded-xl" onClick={handleSmall}>
              {menuIcon ? (
                <></>
              ) : (
                <HiBars3BottomRight className="text-orange text-4xl" />
              )}
            </button>
          </div>
          <div
            className={
              menuIcon
                ? "lg:hidden absolute top-0  right-0 left-0  justify-center w-full h-screen ease-in bg-white duration-300"
                : "lg:hidden absolute top-0  left-full -right-full flex justify-center items-center w-full h-screen duration-300"
            }
          >
            <div className="w-full h-[80px] flex justify-end items-center p-5">
              <button onClick={handleSmall}>
                <CgClose className="text-orange text-3xl" />
              </button>
            </div>

            <div className="w-full text-center">
              <ul className="font-[500]  text-[20px] mt-10 text-slate-800 flex flex-col gap-5">
                <li className="mt-5">
                  {isHomePage ? (
                    <ScrollLink
                      onClick={handleSmall}
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {translation?.navbar?.home}
                    </ScrollLink>
                  ) : (
                    <Link href={`/${lang}`}>{translation?.navbar?.home}</Link>
                  )}
                </li>
                <li className="mt-5">
                  {isHomePage ? (
                    <ScrollLink
                      onClick={handleSmall}
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      className="cursor-pointer"
                    >
                      {translation?.navbar?.about}
                    </ScrollLink>
                  ) : (
                    <Link href={`/${lang}#about`}>
                      {translation?.navbar?.about}
                    </Link>
                  )}
                </li>
                <li className="mt-5">
                  {isHomePage ? (
                    <ScrollLink onClick={handleSmall} href={`/${lang}`}>
                      {translation?.navbar?.services}
                    </ScrollLink>
                  ) : (
                    <Link href={`/${lang}`}>
                      {translation?.navbar?.services}
                    </Link>
                  )}
                </li>
                <li className="mt-5">
                  {isHomePage ? (
                    <ScrollLink
                      onClick={handleSmall}
                      to="howItWorks"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {translation?.navbar?.howWeWork}
                    </ScrollLink>
                  ) : (
                    <Link href={`/${lang}#howItWorks`}>
                      {translation?.navbar?.howWeWork}
                    </Link>
                  )}
                </li>
                <ul className="flex justify-center items-center gap-5 my-5">
                  <li>
                    <Link
                      href={`/ar/${pathname?.slice(4)}`}
                      className="cursor-pointer inline-block"
                    >
                      <Image
                        className="rounded-[100%] w-[30px] h-[30px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300"
                        src={saudi}
                        alt="Arabic"
                      />
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={`/en/${pathname?.slice(4)}`}
                      className="cursor-pointer inline-block"
                    >
                      <Image
                        className="rounded-[100%] w-[30px] h-[30px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-140  duration-300"
                        src={britich}
                        alt="English"
                      />
                    </Link>
                  </li>
                </ul>

                <li className="mt-2">
                  <button
                    onClick={() => setIsJoinFormActive(true)}
                    className="text-orange underline"
                  >
                    {translation?.navbar?.buttons?.startNow}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isJoinFormActive && (
        <JoinForm
          setIsJoinFormActive={setIsJoinFormActive}
          services={services}
          isRTL={isRTL}
          lang={lang}
          translation={translation?.joinForm}
          alertMsgTranslation={translation?.alertMessage}
        />
      )}
    </header>
  );
}

export default NavBar;
