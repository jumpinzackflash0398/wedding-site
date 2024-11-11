import Image from "next/image";

export default function footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Learn
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://www.youtube.com/jumpinzackflash"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/youtube.svg"
                    alt="YouTube icon"
                    width={16}
                    height={16}
                />
                YouTube
            </a>
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://jumpinzackflash.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                jumpinzackflash.com →
            </a>
        </footer>
    )
}