import Image from "next/image";

// images
import howItWorksPicDesktop from "@/public/assets/HowItWorks-01.png";
import howItWorksPicMobile from "@/public/assets/HowItWorksMobile-01.png";

import howItWorksPicDesktopEng from "@/public/assets/How It Works EN-01.png";
import howItWorksPicMobileEng from "@/public/assets/How It Works Mobile EN-01.png";

const HowItWorks = ({ translation, isRTL }) => {
  return (
    <div id="howItWorks" className="flex flex-col h-auto sm:p-10 p-5">
      <div className="w-full text-center ">
        <div className="h-[80px]">
          <h1 className="font-extrabold sm:text-5xl text-4xl text-[var(--primary-color)]">
            {translation?.title}
          </h1>
        </div>
      </div>
      <div className="bg-white w-auto h-full">
        <div className="w-full flex justify-center items-center">
          <Image
            className="hidden md:block w-full"
            width={5000}
            height={5000}
            src={isRTL ? howItWorksPicDesktop : howItWorksPicDesktopEng}
            alt="How it works?"
          />
          <Image
            className="block md:hidden w-[80%] h-auto"
            width={5000}
            height={5000}
            src={isRTL ? howItWorksPicMobile : howItWorksPicMobileEng}
            alt="How it works?"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
