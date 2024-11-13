'use client'
import navBar from "@/app/components/nav";
import footer from "@/app/components/footer";
import pageHero from "@/app/components/page-hero"

export default function page() {
    return (
        <div
            className="flex flex-col justify-between items-stretch min-h-screen sm:[p-2 pl-8 pr-8] font-[family-name:var(--font-geist-sans)]">
            {navBar()}
            {pageHero("Travel & Stay", "Wedding Party and select attendees will receive accommodations at the Stanley House Inn located at 236 Church St, Marietta, GA 30060.\n" +
                "However, room is extremely limited, here is a list of nearby hotels at reasonable rates as well as a embedded map to explore the area:")}
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
