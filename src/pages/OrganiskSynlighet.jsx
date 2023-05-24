import digsyn from "../assets/icons/digsynBig.svg";
import somedia from "../assets/icons/PersonPlusFill.svg";
import branding from "../assets/icons/PaintBucket.svg";
import seo from "../assets/icons/Cursor.svg";
import ServiceInnhold from "../components/ServiceInnhold";
import ServiceMarkeds from "../components/ServiceMarkeds";

export default function OrganiskSynlighet() {
    return (
        <div className="inner">
            <img
                className="mt-32 mx-auto h-48"
                src={digsyn}
                alt="graphic ilustration"
            />
            <h1 className="text-center py-16 text-5xl">Organisk Synlighet</h1>
            <div className="flex flex-col gap-8">
                <p className="font-semibold opacity-50">
                    Selv om det finnes mange måter å tiltrekke trafikk til et
                    nettsted eller sosiale medier, er organisk synlighet en av
                    de mest effektive. Organisk synlighet refererer til evnen
                    til å rangere høyt på søkemotorer og tiltrekke seg besøkende
                    uten å betale for annonser. Dette kan være en viktig faktor
                    for å øke merkevarebevissthet, engasjement og konverteringer
                    på nettstedet ditt.
                </p>
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
                        <p className="font-semibold">
                            En annen viktig faktor for å øke organisk trafikk og
                            synlighet er å ha et sterkt brand. Branding handler
                            om å bygge opp en tydelig og unik identitet som
                            skiller seg ut fra konkurrentene. Dette inkluderer å
                            ha et godt design, en klar merkevaremelding og å
                            skape en positiv oppfatning av merkevaren blant
                            publikum.
                        </p>
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
                        <p className="font-semibold">
                            Sosiale medier kan også være en viktig faktor for å
                            øke organisk trafikk til nettstedet ditt. Ved å
                            bygge opp en tilstedeværelse på sosiale medier kan
                            du øke merkevarebevisstheten, øke synligheten av
                            innholdet ditt, og engasjere med følgere og
                            potensielle kunder. Det er viktig å velge de riktige
                            sosiale mediene som passer for din virksomhet og din
                            målgruppe.
                        </p>
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
                        <p className="font-semibold">
                            Hvis du ønsker mer organisk trafikk til nettstedet
                            ditt og sosiale medier, er det viktig å ha god
                            organisk synlighet og optimalisere for søkemotorer
                            gjennom SEO-teknikker. SEO står for "Search Engine
                            Optimization", og refererer til en rekke teknikker
                            som brukes for å optimalisere nettsider for
                            søkemotorer. Dette inkluderer blant annet å bruke de
                            riktige søkeordene, optimalisere nettstedets innhold
                            og struktur, og bygge kvalitetslenker.
                        </p>
                    </div>
                </div>
                <p className="mb-32 font-semibold opacity-50 max-w-pMax">
                    For å oppnå økt organisk trafikk og synlighet er det viktig
                    å implementere en helhetlig strategi som tar hensyn til SEO,
                    branding og sosiale medier. Ved å bruke disse teknikkene kan
                    du tiltrekke deg flere besøkende til nettstedet ditt og øke
                    sjansen for at de konverterer til kunder.
                </p>
            </div>
            <div className=" service-cards-wrapper-only-two">
                <ServiceInnhold />
                <ServiceMarkeds />
            </div>
        </div>
    );
}
