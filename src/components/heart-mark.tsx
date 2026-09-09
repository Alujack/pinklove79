import Image from "next/image";
import logo from "@/assets/logo.png";

/** The PinkLove79 mark — a parent and child held inside a heart. */
export function HeartMark({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt=""
      aria-hidden
      width={40}
      height={40}
      priority
      className={className}
    />
  );
}
