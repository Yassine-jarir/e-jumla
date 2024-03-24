import Image from "next/image";
import Marquee from "react-fast-marquee";
import { urlFor } from "@/sanity";

const OurPartners = ({ ourPartners, translation }) => {
  return (
    <div className="w-full py-16 bg-[#fcfbff]">
      <div className="flex flex-col justify-center w-full h-full text-white">
        <div className="flex flex-col gap-16">
          <div className="justify-center text-5xl text-center text-[var(--primary-color)]">
            <h1 className="font-extrabold">{translation?.title}</h1>
          </div>
          <div className="w-full flex justify-center items-center gap-16">
            <Marquee>
              {ourPartners?.map((item, key) => (
                <div key={key} className={`h-fit mx-10`}>
                  {item?.logo && (
                    <Image
                      src={urlFor(item?.logo?.asset)?.url()}
                      width={1000}
                      height={1000}
                      alt={item?.title?.en}
                      className="w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-300"
                    />
                  )}
                </div>
              ))}
              {ourPartners?.map((item, key) => (
                <div key={key} className={`h-fit mx-10`}>
                  {item?.logo && (
                    <Image
                      src={urlFor(item?.logo?.asset)?.url()}
                      width={1000}
                      height={1000}
                      alt={item?.title?.en}
                      className="w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-300"
                    />
                  )}
                </div>
              ))}
              {ourPartners?.map((item, key) => (
                <div key={key} className={`h-fit mx-10`}>
                  {item?.logo && (
                    <Image
                      src={urlFor(item?.logo?.asset)?.url()}
                      width={1000}
                      height={1000}
                      alt={item?.title?.en}
                      className="w-[200px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-300"
                    />
                  )}
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
