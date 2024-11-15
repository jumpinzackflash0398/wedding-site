'use client'
import navBar from "@/app/components/nav";
import footer from "@/app/components/footer";
import main from "@/app/components/main";

export default function Home() {
  return (
      <div
          className="flex flex-col justify-between items-stretch min-h-screen sm:[p-2 pl-8 pr-8] font-[family-name:var(--font-geist-sans)]">
        {navBar("/")}
        {main()}
        {footer()}
      </div>
  );
}
