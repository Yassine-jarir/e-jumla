import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Almarai } from "next/font/google";
const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export const metadata = {
  title: "Jumla Maroc",
  description:
    "إي-جملة هي وجهتك الموثوقة لعالم البيع بالجملة والاستيراد. نلتزم بتقديم خدمات استيراد فعّالة وسهلة من الصين، حيث نوفر مجموعة متنوعة من المنتجات بجودة عالية. اعتمد على إي-جملة لتلبية احتياجات عملك بكفاءة وبأسعار تنافسية، مما يجعلنا شريكك المثالي في رحلتك التجارية.",
  keywords: [
    "استيراد بضائع صينية",
    "تصدير من الصين بالجملة",
    "مستوردين صينيين ",
    "شركات الشحن من الصين",
    "استيراد من المصانع الصينية",
    "تصنيع المنتجات في الصين, خدمات التخليص الجمركي من الصين",
    "شركات الشحن الدولي من الصين",
    "مراكز تجميع الشحن في الصين",
    "تصدير سيارات من الصين",
    "استيراد قطع الغيار من الصين",
    "توريد مواد بناء من الصين",
    "استيراد أدوات كهربائية من الصين",
    "تجارة الملابس الصينية بالجملة",
    "استيراد مواد غذائية من الصين",
    "توريد معدات طبية من الصين",
    "تجارة الإلكترونيات الصينية بالجملة",
    "شركات التصنيع في الصين",
    "استيراد مواد تجميل من الصين",
    "توريد أدوات حديقة من الصين",
  ],
  authors: [{ name: "Ajicod", url: "https://ajicod.com/fr" }],
  publisher: "Ajicod Agency",
  creator: "Ajicod Agency",
  alternates: {
    canonical: `/`,
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={almarai.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER} />
    </html>
  );
}
