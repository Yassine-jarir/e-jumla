"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity";

export default function Hero({ translation, isRTL, services, lang }) {
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex flex-col justify-center items-center lg:gap-10 gap-5 mt-36 sm:mt-16 "
    >
      <div className="rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="flex justify-center"
        >
          <h1
            className="xl:w-[60%] sm:w-[70%] w-[90%] xl:leading-[60px]
           lg:leading-[50px] leading-[40px] font-extrabold xl:text-5xl 
           lg:text-4xl text-3xl text-center text-slate-900 sm:mt-16"
          >
            {translation?.bigTitle}
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex justify-center "
      >
        <h2
          style={{ direction: "rtl" }}
          className="text-center lg:text-3xl text-xl font-regular text-slate-800"
        >
          {translation?.secondTitle}
        </h2>
      </motion.div>

      <div className="flex flex-col justify-center py-5">
        <div className="w-full grid grid-cols-1 sm:grid-cols-6 gap-5 text-center">
          {services?.map((item, key) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: key * 0.3, duration: 0.3 }}
              key={key}
              className={`flex flex-col justify-center items-center p-3 rounded-3xl bg-white shadow-[0_0_60px_-15px_rgba(236,90,49,0.7)]`}
            >
              <Link href={`${lang}/service/${item?.slug?.current}`}>
                {item?.icon && (
                  <Image
                    src={urlFor(item?.icon)?.url()}
                    width={1000}
                    height={1000}
                    alt="service"
                    className="w-[150px] sm:w-[150px]"
                  />
                )}

                <p
                  className={`${
                    isRTL ? "text-lg" : "text-base"
                  } font-medium text-slate-900`}
                >
                  {lang === "ar"
                    ? item?.title?.ar
                    : lang === "en"
                    ? item?.title?.en
                    : ""}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
