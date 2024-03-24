"use client";
import Image from "next/image";
import { useState } from "react";

// Count up
import CountUp from "react-countup";

// Scroll trigger
import ScrollTrigger from "react-scroll-trigger";

export default function counter({ isRTL, item }) {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      className="min-w-fit flex justify-center items-center gap-5"
    >
      <Image src={item?.icon} className="w-[100px]" alt="icon" />
      <div className="flex flex-col">
        <span
          dir="ltr"
          className={`sm:text-5xl text-4xl font-extrabold text-[var(--primary-color)]  ${
            isRTL ? "text-end" : "text-start"
          }`}
        >
          +{counterOn && <CountUp start={0} end={item?.value} duration={3} />}
        </span>
        <p className="text-xl">{item?.label}</p>
      </div>
    </ScrollTrigger>
  );
}
