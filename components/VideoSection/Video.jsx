"use client";
import Image from "next/image";
import { useState } from "react";
import cover from "@/public/assets/videoCover.jpg";
import coverEng from "@/public/assets/Thumbnail EN-01.png";

const Video = ({ isRTL }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div className="md:w-[700px] md:h-[400px] sm:w-[500px] h-[220px] w-[95%] relative ">
        {!active && (
          <div
            onClick={() => setActive(true)}
            className="absolute inset-0 z-50 cursor-pointer"
          >
            <Image
              src={isRTL ? cover : coverEng}
              className="object-contain"
              alt="Jumla Video"
            />
          </div>
        )}
        {active && (
          <video
            width="700"
            height="400"
            controls
            controlsList="nodownload"
            autoPlay
            preload="none"
          >
            <source src="/assets/ejumlaVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default Video;
