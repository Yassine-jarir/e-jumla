import { Fragment } from "react";

// icons
import icon1 from "@/public/assets/Icons/icon11.svg";
import icon2 from "@/public/assets/Icons/icon13.svg";
import icon3 from "@/public/assets/Icons/icon12.svg";

// components
import Counter from "./components/Counter";

export default function index({ isRTL, translation }) {
  const data = [
    {
      label: translation?.clients,
      value: "1200",
      icon: icon1,
    },
    {
      label: translation?.factory_visited,
      value: "100",
      icon: icon2,
    },

    {
      label: translation?.import,
      value: "90",
      icon: icon3,
    },
  ];
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full flex justify-center items-center px-2 py-5"
    >
      <div className="lg:h-[150px] h-auto flex lg:flex-row flex-col flex-items xl:gap-10 lg:gap-5 gap-y-10 bg-white shadow-[0_0_32px_rgba(0,0,0,0.2)] rounded-xl py-5 px-10">
        {data?.map((item, key) => (
          <Fragment key={key}>
            <Counter isRTL={isRTL} item={item} />
            {key !== data?.length - 1 && (
              <div className="lg:h-full min-h-[3px] lg:min-w-[3px] w-full rounded-full bg-[var(--primary-color)]" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
