import { Link } from "react-router-dom";
import LogoSmall from "../assets/logo-small.svg";

export default function () {
    return (
        <div className="w-full bg-black bg-opacity-80 sticky top-0 z-50">
            <nav className="flex selection:bg-none justify-between   items-center h-16 inner text-lg">
                <a href="/">
                    <img src={LogoSmall} alt="tetrad logo" />
                </a>
                <div className="flex gap-4">
                    <details className="cursor-pointer flex flex-col gap-8 relative">
                        <summary className="hover:text-white">
                            Tjenester
                        </summary>
                        <div className=" flex flex-col absolute p-4 gap-2 pt-0 mt-[18px] bg-black bg-opacity-80">
                            <Link className="hover:text-white" to="/orgsyn">
                                Organisk Synlighet
                            </Link>
                            <Link className="hover:text-white" to="/marfor">
                                Markedsføring
                            </Link>
                            <Link className="hover:text-white" to="/innprod">
                                Innholdsproduksjon
                            </Link>
                        </div>
                    </details>
                    <Link className="hover:text-white" to="/about">
                        Om Oss
                    </Link>
                    <Link className="hover:text-white" to="/kontakt">
                        Kontakt
                    </Link>
                    <Link className="hover:text-white" to="/blog">
                        Blogg
                    </Link>
                </div>
            </nav>
        </div>
    );
}
