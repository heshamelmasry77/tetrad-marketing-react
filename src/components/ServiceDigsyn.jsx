import digsyn from "../assets/icons/digsynBig.svg";
import somedia from "../assets/icons/PersonPlusFill.svg";
import branding from "../assets/icons/PaintBucket.svg";
import seo from "../assets/icons/Cursor.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function ServiceDigsyn() {
    return (
        <div className="service-card">
            <div className="service-card_description">
                <img
                    className="service-card_description_img"
                    src={digsyn}
                    alt="graphic illustration"
                />
                <h3 className="service-card_description_heading">
                    Organisk Synlighet
                </h3>
                <p className="service-card_description_text">
                    Ønsker du mer organisk trafikk til nettstedet ditt og
                    sosiale medier?
                </p>
            </div>
            <div className="service-card_content">
                <div className="service-card_content_bullet">
                    <img src={branding} alt="facebook logo" />
                    <span>Branding</span>
                </div>
                <div className="service-card_content_bullet">
                    <img src={somedia} alt="instagram logo" />
                    <span>Sosiale Media</span>
                </div>
                <div className="service-card_content_bullet">
                    <img src={seo} alt="linkedin logo" />
                    <span>SEO</span>
                </div>
            </div>
            <ButtonPill linkAction="/orgsyn" content="Mer info" />
        </div>
    );
}
