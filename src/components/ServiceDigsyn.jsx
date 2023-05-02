import digsyn from "../assets/icons/digsynBig.svg";
import somedia from "../assets/icons/PersonPlusFill.svg";
import branding from "../assets/icons/PaintBucket.svg";
import seo from "../assets/icons/Cursor.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function ServiceDigsyn() {
    return (
        <div className="flex flex-col gap-4 items-center justify-between max-w-serviceCard">
            <div className="flex flex-col gap-2">
                <img
                    className="max-w-hundre mx-auto"
                    src={digsyn}
                    alt="graphic illustration"
                />
                <h3 className="text-trettito font-semibold text-center">
                    Organisk Synlighet
                </h3>
                <p className="font-semibold opacity-50 text-center">
                    Ønsker du mer organisk trafikk til nettstedet ditt og
                    sosiale medier?
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-[6px] items-center">
                    <img src={branding} alt="facebook logo" />
                    <span>Branding</span>
                </div>
                <div className="flex gap-[6px] items-center">
                    <img src={somedia} alt="instagram logo" />
                    <span>Sosiale Media</span>
                </div>
                <div className="flex gap-[6px] items-center">
                    <img src={seo} alt="linkedin logo" />
                    <span>SEO</span>
                </div>
            </div>
            <ButtonPill linkAction="digsynAction" content="Mer info" />
        </div>
    );
}
