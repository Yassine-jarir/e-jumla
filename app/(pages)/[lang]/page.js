import dynamic from "next/dynamic";
import { Suspense } from "react";
import { fetchData } from "@/sanity";
import { getDictionary } from "@/getTranslation";

const NavBar = dynamic(() => import("@/components/NavBar/NavBar"), {
  loading: () => <div></div>,
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <div></div>,
});
const Hero = dynamic(() => import("@/components/Hero/Hero"), {
  loading: () => <div></div>,
});
const Ready = dynamic(() => import("@/components/Ready/Ready"), {
  loading: () => <div></div>,
});
const Video = dynamic(() => import("@/components/VideoSection/Video"), {
  loading: () => <div></div>,
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks/HowItWorks"), {
  loading: () => <div></div>,
});
const Infos = dynamic(() => import("@/components/Infos"), {
  loading: () => <div></div>,
});
const OurPartners = dynamic(
  () => import("@/components/OurPartners/OurPartners"),
  {
    loading: () => <div></div>,
  }
);
const PraticleBg = dynamic(() => import("@/components/Hero/PraticleBg"), {
  loading: () => <div></div>,
});
const Services = dynamic(() => import("@/components/Services/Services"), {
  loading: () => <div></div>,
});
const Flags = dynamic(() => import("@/components/FlagsSection/Flags"), {
  loading: () => <div></div>,
});
const About = dynamic(() => import("@/components/About/About"), {
  loading: () => <div></div>,
});

const getTranslation = async (params) => {
  const translation = await getDictionary(params.lang);
  return translation;
};

const getServices = async () => {
  const data = await fetchData(`*[_type == "services"]{
          _id,
          slug,
          title,
          description,
          features,
          picture,
          icon,
          _createdAt
        }`);
  const sortedData = data.sort(
    (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
  );
  return sortedData;
};

const getPartners = async () => {
  const data = await fetchData(`*[_type == "partners"]{
    title,
    logo,
  }`);
  return data;
};

export default async function page({ params }) {
  const lang = params.lang;
  const isRTL = lang === "ar" ? true : false;

  const translation = await getTranslation(params);
  const services = await getServices();
  const partners = await getPartners();

  return (
    <div className="w-full flex flex-col items-center font-Almarai selection:bg-[var(--primary-color)] selection:text-white overflow-hidden">
      <div
        id="home"
        className="sm:h-screen h-fit min-h-[700px] flex flex-col justify-center items-center relative"
      >
        <NavBar
          translation={translation}
          isRTL={isRTL}
          services={services}
          lang={lang}
        />
        <PraticleBg />
        <Hero
          translation={translation?.hero}
          isRTL={isRTL}
          services={services}
          lang={lang}
        />
      </div>
      <div className="w-full bg-white">
        <Suspense fallback={<p>Loading video...</p>}>
          <Video isRTL={isRTL} />
        </Suspense>

        <Services
          services={services}
          translation={translation}
          isRTL={isRTL}
          lang={lang}
        />
        <Infos isRTL={isRTL} translation={translation?.infos} />
        <HowItWorks translation={translation?.howWeWork} isRTL={isRTL} />
        <Flags translation={translation?.flags} isRTL={isRTL} />
        <OurPartners
          translation={translation?.partners}
          ourPartners={partners}
        />
        <About translation={translation?.about} isRTL={isRTL} />
        <Ready
          translation={translation}
          services={services}
          isRTL={isRTL}
          lang={lang}
        />
      </div>
      <Footer
        translation={translation?.footer}
        navTranslation={translation?.navbar}
        isRTL={isRTL}
        services={services}
        lang={lang}
      />
    </div>
  );
}
