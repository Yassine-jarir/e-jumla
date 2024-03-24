"use client";
import { useState } from "react";
import JoinForm from "../JoinForm";

const Ready = ({ translation, services, isRTL, lang }) => {
  const [isJoinFormActive, setIsJoinFormActive] = useState(false);
  return (
    <div className="">
      <div className="bg-white p-10 h-full  font-[600] rounded-t-lg ">
        <div className="flex justify-center text-center p-8 font-[500] text-black">
          <div
            className="flex flex-col justify-center items-center gap-1 bg-[var(--primary-color)] p-24"
            style={{ borderRadius: "64% 36% 66% 34% / 43% 58% 42% 57% " }}
          >
            <h1 className="font-[800] text-center text-5xl text-white">
              {translation?.ready?.title}
            </h1>
            <p className="text-slate-50 text-center text-2xl mt-4 font-[600]">
              {translation?.ready?.description}
            </p>

            <div className="mt-8 justify-center flex">
              <button
                onClick={() => setIsJoinFormActive(true)}
                className="h-[60px] w-[280px] text-[var(--primary-color)] text-[18px] font-medium bg-white hover:bg-[var(--primary-color)] hover:text-white border-2 border-white rounded-lg  duration-300 "
              >
                {translation?.ready?.buttons?.startNow}
              </button>
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
    </div>
  );
};

export default Ready;
