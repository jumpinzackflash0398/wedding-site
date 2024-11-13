import homePageTile from "@/app/components/home-page-tile";
import pageHero from "@/app/components/page-hero";

export default function main() {
    return (
        <div className="flex flex-col">
            {pageHero("You're Invited!", "We are incredibly excited to request your presence at the Wedding of Jamieson Drayton Hunt and Zachary James Flynn")}
            <main className="grid grid-cols-2 gap-4 grid-rows-2 pl-16 pr-24">
                {homePageTile(
                    "/ceremony", "/stanley-house-inn.jpg", "Ceremony & Reception", "Ceremony & Reception"
                )}
                {homePageTile(
                    "/travelandstay", "/IMG_0396.JPG", "Travel & Stay", "Travel & Stay"
                )}
                {homePageTile(
                    "/rsvp", "/108A1229-1.JPG", "RSVP", "RSVP"
                )}
                {homePageTile(
                    "https://www.amazon.com/wedding/registry/29RGHJ7ZR4K0X", "/IMG_0229.JPG", "Registry", "Registry"
                )}
            </main>
        </div>
    )
}