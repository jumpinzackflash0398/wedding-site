'use client'
import navBar from "@/app/components/nav";
import footer from "@/app/components/footer";
import pageHero from "@/app/components/page-hero"

export default function page() {
    return (
        <div
            className="flex flex-col justify-between items-stretch min-h-screen sm:[p-2 pl-8 pr-8] font-[family-name:var(--font-geist-sans)]">
            {navBar("/ceremony")}
            {pageHero("Ceremony & Reception", "Our Ceremony and Reception will be held at the Stanley House Inn located at:\n" +
                "236 Church St, Marietta, GA 30060\n" +
                "on Saturday, October 25, 2025")}
            <div
                className="flex flex-grow pr-8"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.72971612064!2d-84.55242422273045!3d33.95746047319285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5143b09730b51%3A0x46e9b844c9015f6!2sStanley%20House%20Inn!5e0!3m2!1sen!2sus!4v1731421112950!5m2!1sen!2sus"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="flex flex-grow"/>
            </div>
            {footer()}
        </div>
    );
}
