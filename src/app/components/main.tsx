import homePageTile from "@/app/components/home-page-tile";

export default function main() {
    return (
        <main className="grid grid-cols-2 gap-4 grid-rows-2">
            {homePageTile(
                "https://www.amazon.com/wedding/registry/29RGHJ7ZR4K0X", "/IMG_0229.JPG", "Ceremony & Reception", "Wedding Registry"
            )}
            {homePageTile(
                "https://www.amazon.com/wedding/registry/29RGHJ7ZR4K0X", "/IMG_0229.JPG", "Travel & Stay", "Travel & Stay"
            )}
            {homePageTile(
                "https://www.amazon.com/wedding/registry/29RGHJ7ZR4K0X", "/IMG_0229.JPG", "RSVP", "RSVP"
            )}
            {homePageTile(
                "https://www.amazon.com/wedding/registry/29RGHJ7ZR4K0X", "/IMG_0229.JPG", "Wedding Registry", "Wedding Registry"
            )}
        </main>
    )
}