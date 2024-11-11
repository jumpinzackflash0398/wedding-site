import navBar from "@/app/components/nav";
import footer from "@/app/components/footer";
import main from "@/app/components/main";

export default function Home() {
  return (
      <div
          className="grid grid-rows-[75px_1fr_75px] items-center min-h-screen gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {navBar()}
        {main()}
        {footer()}
      </div>
  );
}
