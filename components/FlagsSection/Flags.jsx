import Image from "next/image";
import flagsPic from "@/public/assets/Countries.png";
import flagsPicEng from "@/public/assets/Countries Flags EN-02.png";
const Flags = ({ translation, isRTL }) => {
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className=" w-full flex md:flex-row flex-col-reverse justify-center items-center sm:p-10 p-5"
    >
      <div
        className={`md:w-[50%] w-full h-full flex flex-col sm:gap-10 gap-5 rounded-lg`}
      >
        <div className="sm:text-5xl text-4xl font-extrabold text-[var(--primary-color)]">
          <h1>{translation?.title}</h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className=" text-start text-black sm:text-lg text-base font-medium">
            {translation?.description}
          </p>
        </div>
      </div>
      <div
        className={`md:w-[50%] w-full h-full flex justify-center items-center `}
      >
        <Image
          src={isRTL ? flagsPic : flagsPicEng}
          width={2000}
          height={2000}
          alt="service pic"
          className="sm:w-[500px] w-[300px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Flags;
