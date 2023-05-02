import digsyn from "../assets/icons/digsynBig.svg";
import somedia from "../assets/icons/PersonPlusFill.svg";
import branding from "../assets/icons/PaintBucket.svg";
import seo from "../assets/icons/Cursor.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function OrganiskSynlighet() {
    return (
        <div>
            <img src={digsyn} alt="graphic ilustration" />
            <h1>Organisk Synlighet</h1>
            <p className="font-semibold opacity-50 text-center">
                Selv om det finnes mange måter å tiltrekke trafikk til et
                nettsted eller sosiale medier, er organisk synlighet en av de
                mest effektive. Organisk synlighet refererer til evnen til å
                rangere høyt på søkemotorer og tiltrekke seg besøkende uten å
                betale for annonser. Dette kan være en viktig faktor for å øke
                merkevarebevissthet, engasjement og konverteringer på nettstedet
                ditt.
            </p>
            <div>
                <h3>
                    <img src={branding} alt="graphic ilustration" />
                    Branding
                </h3>
                <p>
                    En annen viktig faktor for å øke organisk trafikk og
                    synlighet er å ha et sterkt brand. Branding handler om å
                    bygge opp en tydelig og unik identitet som skiller seg ut
                    fra konkurrentene. Dette inkluderer å ha et godt design, en
                    klar merkevaremelding og å skape en positiv oppfatning av
                    merkevaren blant publikum.
                </p>
            </div>
            <div>
                <h3>
                    <img src={somedia} alt="graphic ilustration" />
                    Sosiale Media
                </h3>
                <p>
                    Sosiale medier kan også være en viktig faktor for å øke
                    organisk trafikk til nettstedet ditt. Ved å bygge opp en
                    tilstedeværelse på sosiale medier kan du øke
                    merkevarebevisstheten, øke synligheten av innholdet ditt, og
                    engasjere med følgere og potensielle kunder. Det er viktig å
                    velge de riktige sosiale mediene som passer for din
                    virksomhet og din målgruppe.
                </p>
            </div>
            <div>
                <h3>
                    <img src={seo} alt="graphic ilustration" />
                    SEO
                </h3>
                <p>
                    Hvis du ønsker mer organisk trafikk til nettstedet ditt og
                    sosiale medier, er det viktig å ha god organisk synlighet og
                    optimalisere for søkemotorer gjennom SEO-teknikker. SEO står
                    for "Search Engine Optimization", og refererer til en rekke
                    teknikker som brukes for å optimalisere nettsider for
                    søkemotorer. Dette inkluderer blant annet å bruke de riktige
                    søkeordene, optimalisere nettstedets innhold og struktur, og
                    bygge kvalitetslenker.
                </p>
            </div>
            <p></p>
        </div>
    );
}
