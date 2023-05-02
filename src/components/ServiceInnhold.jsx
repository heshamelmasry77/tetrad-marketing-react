import innhold from "../assets/icons/innholdBig.svg";
import codeSlash from "../assets/icons/CodeSlash.svg";
import paletteFill from "../assets/icons/PaletteFill.svg";
import textIcon from "../assets/icons/text-icon.svg";
import ButtonPill from "../components/ButtonPillPink";

export default function ServiceInnhold() {
    return (
        <div className="flex flex-col gap-4 items-center justify-between max-w-serviceCard">
            <div className="flex flex-col gap-2">
                <img
                    className="max-w-hundre mx-auto"
                    src={innhold}
                    alt="graphic illustration"
                />
                <h3 className="text-trettito font-semibold text-center">
                    Innholdsproduksjon
                </h3>
                <p className="font-semibold opacity-50 text-center">
                    Ønsker du unikt innhold skreddersydd til din strategi og
                    merkevare?
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-[6px] items-center">
                    <img src={codeSlash} alt="facebook logo" />
                    <span>Nettside & CMS</span>
                </div>
                <div className="flex gap-[6px] items-center">
                    <img src={paletteFill} alt="instagram logo" />
                    <span>Grafisk innhold</span>
                </div>
                <div className="flex gap-[6px] items-center">
                    <img src={textIcon} alt="linkedin logo" />
                    <span>Tekstforfatting</span>
                </div>
            </div>
            <ButtonPill linkAction="innholdAction" content="Mer info" />
        </div>
    );
}
