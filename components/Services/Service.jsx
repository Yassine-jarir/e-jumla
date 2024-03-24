"use client";
import { useState } from "react";
import JoinForm from "../JoinForm";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { urlFor } from "@/sanity";

const Service = ({ data, translation, lang, isRTL, services }) => {
  const [isJoinFormActive, setIsJoinFormActive] = useState(false);

  return (
    <div
      id={data?._id}
      className=" w-full flex md:flex-row flex-col justify-center items-center sm:p-10 p-5"
    >
      <div
        className={`md:w-[50%] w-full h-full flex flex-col sm:gap-10 gap-5 rounded-lg`}
      >
        <div className="sm:text-5xl text-4xl font-extrabold text-[var(--primary-color)]">
          <h1>
            {lang === "ar"
              ? data?.title?.ar
              : lang === "en"
              ? data?.title?.en
              : ""}
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <p className=" text-start text-black sm:text-lg text-base font-medium">
            {lang === "ar"
              ? data?.description?.ar
              : lang === "en"
              ? data?.description?.en
              : ""}
          </p>

          <div className="flex flex-col gap-5">
            {data?.features?.map((item, key) => (
              <div key={key} className="flex gap-3">
                <AiFillCheckCircle className="text-[var(--primary-color)] text-2xl" />
                <span className="w-fit">
                  {lang === "ar" ? item?.ar : lang === "en" ? item?.en : ""}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="justify-center text-1xl font-[500] cursor-pointer">
          <button
            onClick={() => setIsJoinFormActive(true)}
            className="h-[50px] text-white text-[18px] font-[600] px-8 bg-[#0042aa] duration-300 rounded-lg"
          >
            {translation?.services?.buttons?.startYourStep}
          </button>
        </div>
      </div>

      <div
        className={`md:w-[50%] w-full h-full flex justify-center items-center `}
      >
        {data?.picture && (
          <Image
            src={urlFor(data?.picture?.asset)?.url()}
            alt={data?.title?.ar}
            width={2000}
            height={2000}
            className="sm:w-[500px] w-[300px]  mx-auto"
          />
        )}
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
    </div>
  );
};

export default Service;
