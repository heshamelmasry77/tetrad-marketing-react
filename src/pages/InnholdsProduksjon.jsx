import digsyn from "../assets/icons/digsynBig.svg";
import somedia from "../assets/icons/PersonPlusFill.svg";
import branding from "../assets/icons/PaintBucket.svg";
import seo from "../assets/icons/Cursor.svg";
import ButtonPill from "../components/ButtonPillPink";
import ServiceMarkeds from "../components/ServiceMarkeds";
import ServiceDigsyn from "../components/ServiceDigsyn";

export default function InnholdsProduksjon() {
    return (
        <div className="inner">
            <img
                className="mt-32 mx-auto h-48"
                src={digsyn}
                alt="graphic ilustration"
            />
            <h1 className="text-center py-16 text-5xl">Innholdsproduksjon</h1>
            <div className="flex flex-col gap-8">
                <p className="font-semibold opacity-50">Selv om</p>
                <div className="gap-4 flex flex-col maxScreen:flex-row mx-auto">
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={branding}
                                alt="graphic ilustration"
                            />
                            Branding
                        </h3>
                        <p className="font-semibold">En annen</p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={somedia}
                                alt="graphic ilustration"
                            />
                            Sosiale Media
                        </h3>
                        <p className="font-semibold">Sosiale m</p>
                    </div>
                    <div className="flex-1 gap-2 max-w-pMax">
                        <h3 className="p-1 text-trettito gap-1 flex">
                            <img
                                className="h-10"
                                src={seo}
                                alt="graphic ilustration"
                            />
                            SEO
                        </h3>
                        <p className="font-semibold">Hvis duvalitetslenker.</p>
                    </div>
                </div>
                <p className="mb-32 font-semibold opacity-50 max-w-pMax">
                    For å oppnå økrer til kunder.
                </p>
            </div>
            <div className=" service-cards-wrapper-only-two">
                <ServiceDigsyn />
                <ServiceMarkeds />
            </div>
        </div>
    );
}
