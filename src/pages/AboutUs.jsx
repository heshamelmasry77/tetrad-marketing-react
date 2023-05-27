import React from "react";
import { Link } from "react-router-dom";
import ButtonPill from "../components/ButtonPillPink";

export default function AboutUs() {
    return (
        <div className="inner">
            <div className="max-w-pMax flex flex-col gap-4 pt-32 pb-8">
                <h2 className="text-5xl font-bold w-fit border-b-pink border-b-4 pb-2 mb-4 ">
                    Om Oss
                </h2>
                <p className="text-xl">
                    Tetrad tilbyr markedsføringstjenester for å hjelpe bedrifter
                    å nå sine målgrupper og øke salget. Vi tilbyr en rekke
                    tjenester, inkludert digital markedsføring, sosiale
                    medier-markedsføring, søkemotoroptimalisering, grafisk
                    design og mer.
                </p>

                <p className="text-xl text-offWhite">
                    Vårt erfarne team jobber sammen med våre kunder for å
                    utvikle skreddersydde markedsføringsstrategier som passer
                    deres behov og budsjett. Vi bruker de nyeste teknologiene og
                    strategiene for å sikre at våre kunder får best mulig
                    resultater. 
                </p>
                <p className="text-xl text-offWhite">
                    Kontakt oss i dag for å diskutere hvordan vi kan hjelpe deg
                    med å nå dine forretningsmål!
                </p>
                <Link
                    className="underline underline-offset-4 font-bold"
                    to="/marfor"
                >
                    Les mer om tjenestene våre.
                </Link>
                <ButtonPill linkAction="/kontakt" content="Ta kontakt" />
            </div>
        </div>
    );
}
