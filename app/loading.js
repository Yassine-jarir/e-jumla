import Image from "next/image";
import Logo from "@/public/assets/logo.png";
export default function loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image
        src={Logo}
        className="w-[250px] animate-bounce"
        alt="E-Jumla Logo"
      />
    </div>
  );
}
