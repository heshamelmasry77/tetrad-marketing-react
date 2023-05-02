import markeds from "../assets/icons/markedsBig.svg";
import annonser from "../assets/icons/Annonser.svg";
import hubspot from "../assets/icons/hubspot.svg";
import markedsanalyse from "../assets/icons/Search.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function ServiceMarkeds() {
    return (
        <div className="flex flex-col gap-4 items-center justify-between max-w-serviceCard">
            <div className="flex flex-col gap-2">
                <img
                    className="max-w-hundre mx-auto"
                    src={markeds}
                    alt="graphic illustration"
                />
                <h3 className="text-trettito font-semibold text-center">
                    Markedsføring
                </h3>
                <p className="font-semibold opacity-50 text-center">
                    Ønsker du trafikk idag? Rask og effektivt betalt
                    markedsføring.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-[6px] items-center">
                    <img src={markedsanalyse} alt="facebook logo" />
                    <span>Markedsanalyse</span>
                </div>
                <div className="flex gap-[6px] items-center">
                    <img src={annonser} alt="instagram logo" />
                    <span>Kampanjer/ads</span>
                </div>
                <div className="flex gap-[6px] items-center">
                    <img src={hubspot} alt="linkedin logo" />
                    <span>Hubspot</span>
                </div>
            </div>
            <ButtonPill linkAction="markedsAction" content="Mer info" />
        </div>
    );
}
