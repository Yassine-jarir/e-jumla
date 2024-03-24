import styles from "@/styles/blog.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";
import { urlFor } from "@/sanity";

// components
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { PortableText } from "@portabletext/react";

// Sanity
import { fetchData } from "@/sanity";

// Translation
import { getDictionary } from "@/getTranslation";

const getTranslation = async (params) => {
  const translation = await getDictionary(params.lang);
  return translation;
};

const getServices = async () => {
  const data = await fetchData(`*[_type == "services"]{
          _id,
          title,
          _createdAt
        }`);
  const sortedData = data.sort(
    (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
  );
  return sortedData;
};

const getBlog = async (slug) => {
  const data = await fetchData(
    `*[_type == "blogs" && service->slug.current=="${slug}"][0]{
      service->{
        title
      },
      title,
      description,
      picture,
      body,
      _createdAt
    }`
  );
  return data;
};

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const service =
    await fetchData(`*[_type == "services" && slug.current=="${slug}" ][0]{
    title,
  }`);

  return {
    title: service.title.en,
  };
}

const page = async ({ params }) => {
  const lang = params.lang;
  const slug = params.slug;
  const isRTL = lang === "ar" ? true : false;

  const translation = await getTranslation(params);
  const services = await getServices();
  const blog = await getBlog(slug);

  const myPortableTextComponents = {
    types: {
      image: ({ value, isInline }) => (
        <img
          src={urlFor(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
        />
      ),
    },
  };

  function formatDate(isoDate, language) {
    var date = new Date(isoDate);
    var day = ("0" + date.getDate()).slice(-2);
    var monthNames = {
      en: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      ar: [
        "يناير",
        "فبراير",
        "مارس",
        "أبريل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
    };
    var monthIndex = date.getMonth();
    var month = monthNames[language][monthIndex];
    var year = date.getFullYear();
    var formattedDate = day + " " + month + " " + year;
    return formattedDate;
  }

  return blog ? (
    <div className="w-full min-h-screen h-auto flex flex-col justify-between bg-white font-Almarai selection:bg-[var(--primary-color)] selection:text-white">
      <div className="w-full lg:h-[150px] h-[120px] relative">
        <NavBar
          translation={translation}
          isRTL={isRTL}
          services={services}
          lang={lang}
        />
      </div>

      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="w-full flex justify-center items-center sm:px-5 px-2"
      >
        <div className="h-auto w-full max-w-[1400px] flex flex-col items-center">
          {/* Heading */}
          <div className="w-full flex lg:flex-row flex-col-reverse justify-between">
            {/* Part 1 */}
            <div className="lg:w-[50%] flex flex-col gap-5 py-10">
              <h1 className="lg:text-5xl sm:text-4xl text-3xl font-regular">
                {lang === "ar" ? blog?.title?.ar : blog?.title?.en}
              </h1>
              <p className="lg:text-lg text-base font-light text-pretty">
                {lang === "ar" ? blog?.description?.ar : blog?.description?.en}
              </p>
              <div className="w-full flex justify-between">
                <div>
                  <h3 className="text-base font-bold italic">
                    {translation?.blog?.published_at}:
                  </h3>
                  <span className="text-sm font-light">
                    {formatDate(blog?._createdAt, lang)}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold italic">
                    {translation?.blog?.service}:
                  </h3>
                  <span className="text-sm font-light">
                    {lang === "ar"
                      ? blog?.service?.title?.ar
                      : blog?.service?.title?.en}
                  </span>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="lg:min-w-[450px] lg:max-w-[450px] w-full flex flex-col items-start gap-2">
              <Image
                src={blog?.picture ? urlFor(blog.picture).url() : ""}
                width={1000}
                height={1000}
                className="w-full h-[550px] object-cover"
                alt={blog?.title?.en}
              />
            </div>
          </div>

          {/* Body */}
          <div
            className={`${styles.blog} prose md:prose-lg prose-base w-full flex flex-col justify-center items-center py-16`}
          >
            <PortableText
              value={lang === "ar" ? blog?.body?.ar : blog?.body?.en}
              components={myPortableTextComponents}
            />
          </div>
        </div>
      </div>

      <Footer
        translation={translation?.footer}
        navTranslation={translation?.navbar}
        isRTL={isRTL}
        services={services}
        lang={lang}
      />
    </div>
  ) : null;
};
export default page;
