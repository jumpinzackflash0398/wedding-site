'use client'
import navBar from "@/app/components/nav";
import footer from "@/app/components/footer";
import pageHero from "@/app/components/page-hero"
import React, {useState} from "react";
import {handleGlobalErrors} from "next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler";

const areaRows:number = 4

const RsvpForm: React.FC = () => {
    const [nameValue, setNameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [messageValue, setMessageValue] = useState<string>('');
    const [rsvpStatus, setRsvpStatus] = useState<string>('false')
    const [plusOneValue, setPlusOneValue] = useState<string>('false')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = {
            "name": data.get("name"),
            "rsvpStatus": data.get("rsvpStatus"),
            "plusOne": data.get("plusOne"),
            "email": data.get("email"),
            "message": data.get("message")
        }
        try {
            const response = await fetch('http://localhost:3000/api/submit', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            });
            if (!response.ok) {
                handleGlobalErrors()
            }
            alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
            console.error(err);
            alert("We can't submit the form, try again later?");
        }
    }



    return (
        <div
            className="flex flex-col justify-between items-stretch min-h-screen sm:[p-2 pl-8 pr-8] font-[family-name:var(--font-geist-sans)]">
            {navBar("/rsvp")}
            {pageHero("RSVP", "We are delighted to have you on our special day! Please, feel free to leave any additional questions.")}
            <div
                className="flex flex-grow pr-8 justify-center"
            >
                <form action="../api/submit/route.ts" onSubmit={handleSubmit} className="flex flex-col flex-grow max-w-screen-xl gap-6">
                    <h1 className="font-modernLoveCaps text-3xl">Your Name</h1>
                    <input type="text" name="name" id="full-name" placeholder="Full Name" value={nameValue} onChange={(e) => setNameValue(e.target.value)} required={true} className="p-2.5 w-full h-12 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <h1 className="font-modernLoveCaps text-3xl">Will you be attending Zachary Flynn and Jamie Hunt&#39;s Wedding on October 25, 2025?</h1>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" name="rsvpStatus" id="attending" required={true} className="sr-only peer" value={rsvpStatus.toString()} onChange={(e) => setRsvpStatus(e.target.value)}/>
                        <div
                            className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-modernLoveCaps text-gray-900 dark:text-gray-300">Yes/No</span>
                    </label>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-modernLoveCaps text-3xl">Will you be bringing a plus one?</h1>
                        <label className="inline-flex items-center cursor-pointer">
                            <input name="plusOne" type="checkbox" id="plusOne" className="sr-only peer" value={plusOneValue.toString()} onChange={(e) => setPlusOneValue(String(e.target.value))}/>
                            <div
                                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span
                                className="ms-3 text-sm text- font-modernLoveCaps text-gray-900 dark:text-gray-300">Yes/No</span>
                        </label>
                    </div>
                    <h1 className="font-modernLoveCaps text-3xl">Your Email&#9;<span className="text-sm">(Optional)</span></h1>
                    <input type="email" name="email" id="email" placeholder="your.email@domain.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
                           className="p-2.5 w-full h-12 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <h1 className="font-modernLoveCaps text-3xl">Any additional comments or questions?</h1>
                    <textarea name="message" id="message" rows={areaRows} value={messageValue} onChange={(e) => setMessageValue(String(e.target.value))}
                              className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Write your thoughts here..."/>
                    <button type="submit"
                            className="text-white text-xl font-modernLoveGrunge bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">RSVP
                    </button>
                </form>
            </div>
            {footer()}
        </div>
    );
}

export default RsvpForm;
