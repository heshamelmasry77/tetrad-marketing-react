import React from "react";

export default function Contact() {
    return (
        <div id="kontakt" className="inner py-32 flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h2 className="service-heading text-5xl font-bold w-fit border-b-green border-b-4 pb-2 ">
                    Kontakt Tetrad Marketing
                </h2>
                <p className="text-offWhite max-w-pMax">
                    Vi vil gjerne høre fra deg! Vennligst send oss en e-post
                    hvis du har spørsmål eller ønsker å samarbeide med oss. Takk
                    for at du besøkte nettsiden vår!
                </p>
            </div>
            <div className=" w-full flex flex-col maxScreen:flex-row gap-8">
                <div className="flex flex-col w-full gap-4 max-w-pMax">
                    <h3 className="text-trettito font-semibold">
                        Tetrad kontaker deg!
                    </h3>
                    <div className="flex flex-col">
                        <label htmlFor="firma" className="text-xl text-White">
                            Firma
                        </label>
                        <input
                            type="text"
                            id="firma"
                            className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="firma" className="text-xl text-White">
                            Navn på kontaktperson
                        </label>
                        <input
                            type="text"
                            id="firma"
                            className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="firma" className="text-xl text-White">
                            Kontakt e-post
                        </label>
                        <input
                            type="text"
                            id="firma"
                            className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="firma" className="text-xl text-White">
                            Kontakt Telefon
                        </label>
                        <input
                            type="text"
                            id="firma"
                            className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="firma" className="text-xl text-White">
                            Melding til Tetrad
                        </label>
                        <textarea
                            className="border-input-radius bg-black p-3 border-2 border-offWhite placeholder:text-offWhite placeholder:hover:text-white hover:border-white target:border-white placeholder:target:placeholder-white selection:border-white placeholder:selection:placeholder-white text-xl"
                            name=""
                            id=""
                        ></textarea>
                    </div>
                    <button className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl">
                        Kontakt meg
                    </button>
                </div>
                <div className="flex flex-col gap-4 ">
                    <h3 className="text-trettito font-semibold">
                        Send e-post:
                    </h3>
                    <div className="flex flex-col">
                        <span className="text-xl text-offWhite">
                            hello@tetradmarketing.no
                        </span>
                        <button className="w-[180px] h-[50px] grid place-items-center bg-green text-black rounded-full font-semibold text-xl">
                            Åpne mail
                        </button>
                        <span className="font-bold text-offWhite text-xs">
                            Eller kopier epost
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
