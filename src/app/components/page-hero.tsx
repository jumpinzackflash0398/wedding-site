export default function pageHero(title:string, text:string) {
    return (
        <div>
            <div className="flex justify-center font-modernLoveGrunge text-8xl pt-8 pb-4">{title}</div>
            <div className="flex justify-center font-modernLoveCaps text-xl pt-8 pb-16">{text}</div>
        </div>
    )
}