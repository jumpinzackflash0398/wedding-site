export default function homePageTile(href:string, src:string, altTxt:string, text:string) {


    return (
        <a href={href}
           className="relative block overflow-hidden group">
            <img src={src} alt={altTxt}
                 className="w-full opacity-60 transition duration-300 ease-in-out group-hover:blur-lg"/>
            <span
                className="absolute inset-0 flex items-center justify-center text-6xl font-bold transition duration-300 ease-in-out font-modernLoveRegular">
                    {text}
            </span>
        </a>
    )
}