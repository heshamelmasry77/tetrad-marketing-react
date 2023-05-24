import Contact from "../landingpage/Contact";
import HeroBanner from "../landingpage/HeroBanner";
import Services from "../landingpage/Services";
import Welcome from "../landingpage/Welcome";

export default function Landing() {
    return (
        <>
            <HeroBanner />
            <Welcome />
            <Services />
            <Contact />
        </>
    );
}
