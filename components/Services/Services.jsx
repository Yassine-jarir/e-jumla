import Service from "./Service";

export default function Services({
  setIsJoinFormActive,
  services,
  isRTL,
  translation,
  lang,
}) {
  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      id="services"
      className="w-full flex flex-col"
    >
      {services?.map((item, key) => (
        <Service
          key={key}
          setIsJoinFormActive={setIsJoinFormActive}
          data={item}
          translation={translation}
          lang={lang}
          isRTL={isRTL}
        />
      ))}
    </div>
  );
}
