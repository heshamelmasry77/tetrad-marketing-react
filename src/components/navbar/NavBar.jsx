import LogoSmall from "../../assets/logo-small.svg";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
    return (
        <div className="w-full bg-black bg-opacity-80 sticky top-0 z-[1000] py-2">
            <nav
                className="flex relative selection:bg-none justify-between items-center h-16
            inner text-lg"
            >
                <a href="/">
                    <img src={LogoSmall} alt="tetrad logo" />
                </a>
                <HamburgerMenu />
            </nav>
        </div>
    );
}
