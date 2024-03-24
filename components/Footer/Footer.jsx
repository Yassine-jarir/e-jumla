"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

// icons
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

// logo
import jumlaLogo from "@/public/assets/jumlaLogoWhite.png";
import { usePathname } from "next/navigation";

export default function Footer({
  translation,
  navTranslation,
  isRTL,
  services,
  lang,
}) {
  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}`;

  const navLink1 = [
    {
      path: "/",
      icon: <BsFacebook />,
    },
    {
      path: "/",
      icon: <BsLinkedin />,
    },
    {
      path: "https://instagram.com/ejumla.ma?igshid=OGQ5ZDc2ODk2ZA==",
      icon: <RiInstagramFill />,
    },
    {
      path: "/",
      icon: <RiTwitterXLine />,
    },
    {
      path: "/",
      icon: <BsYoutube />,
    },
  ];
  const navLink2 = [
    {
      to: "home",
      display: navTranslation?.home,
    },
    {
      to: "about",
      display: navTranslation?.about,
    },
    {
      to: "services",
      display: navTranslation?.services,
    },
    {
      to: "howItWorks",
      display: navTranslation?.howWeWork,
    },
  ];
  const year = new Date().getFullYear();
  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="w-full bg-[#0042aa]">
      <svg
        className="Banner__StyledDivider-sc-17df1p-3 ka-Duzu rotate-180 relative -top-[1px]"
        viewBox="0 0 1920 60"
      >
        <path
          fill="#fff"
          d="M-153.5,85.5a4002.033,4002.033,0,0,1,658-71c262.854-6.5,431.675,15.372,600,27,257.356,17.779,624.828,19.31,1089-58v102Z"
        ></path>
      </svg>
      <footer className="pt-10">
        <div className="container">
          <div className="flex justify-between md:items-start items-center md:text-start text-center flex-col md:flex-row flex-wrap p-8 gap-[30px]">
            <div>
              <h2 className="text-3xl leading-[30px] font-extrabold mb-4 text-white md:text-start text-center">
                {translation?.contactUs}
              </h2>
              <ul className="md:text-start text-center">
                <li className="leading-7 font-medium hover:text-[var(--primary-color)] text-gray-300">
                  <a dir="ltr" href={`tel:+212666668701`}>
                    +212 666-668701
                  </a>
                </li>
                <li className="leading-7 font-medium hover:text-[var(--primary-color)] text-gray-300">
                  <a href={`mailto:CONTACT@EJUMLA.MA`}>CONTACT@EJUMLA.MA</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl leading-[30px] font-extrabold mb-4 text-white md:text-start text-center">
                {translation?.ourServices}
              </h2>
              <ul>
                {services?.map((item, index) => (
                  <li key={index} className="mb-2 md:text-start text-center">
                    {isHomePage ? (
                      <ScrollLink
                        to={item?._id}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="text-md  leading-7 font-medium hover:text-[var(--primary-color)] text-gray-300 cursor-pointer"
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
                        className="text-md  leading-7 font-medium hover:text-[var(--primary-color)] text-gray-300 cursor-pointer"
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
            <div className="flex flex-col gap-5">
              <span className="text-3xl leading-[30px] font-extrabold text-white md:text-start text-center">
                {translation?.list}
              </span>
              <ul>
                {navLink2.map((item, index) => (
                  <li key={index} className="mb-3 md:text-start text-center">
                    {isHomePage ? (
                      <ScrollLink
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="text-md  leading-7 font-medium hover:text-[var(--primary-color)] text-gray-300 cursor-pointer"
                      >
                        {item.display}
                      </ScrollLink>
                    ) : (
                      <Link
                        href={`/${lang}#${item?.to}`}
                        className="text-md  leading-7 font-medium hover:text-[var(--primary-color)] text-gray-300 cursor-pointer"
                      >
                        {item?.display}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div dir={isRTL ? "ltr" : "rtl"}>
              <div className="w-fit flex justify-center md:justify-start">
                <Image
                  src={jumlaLogo}
                  className="w-[120px]"
                  alt="Jumla White Logo"
                />
              </div>
              <p className="text-2xl leading-7 text-white mt-4 font-medium">
                {translation?.description}{" "}
                <span className=" text-2xl text-[var(--primary-color)]">
                  {translation?.jumlaMaroc}
                </span>
              </p>
              <div className="flex md:justify-start justify-center items-center gap-5 py-4">
                {navLink1?.map((link, index) => (
                  <a
                    target="_blank"
                    href={link?.path}
                    key={index}
                    className=" text-white hover:text-[var(--primary-color)] duration-300 cursor-pointer text-xl"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p
                dir="ltr"
                className={`text-[12px] leading-7 font-[500] text-gray-400 ${
                  isRTL ? "text-start" : "text-end"
                } `}
              >
                © {year} E-JUMLA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
