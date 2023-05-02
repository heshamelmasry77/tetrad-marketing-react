import React from "react";
import zebraStripes from "../assets/zebra-stripes.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
function Footer() {
    return (
        <footer id="kontakt" className="inner flex flex-col">
            {/* <img src={zebraStripes} alt="zebra-stripes" /> */}
            <div className="my-16">
                <h2 className="text-5xl font-bold w-fit border-b-green border-b-4 pb-2 ">
                    Kontakt Tetrad Marketing
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-col max-w-pMax gap-4 pt-4">
                        <p className="text-lg">
                            Vi vil gjerne høre fra deg! Vennligst send oss en
                            e-post hvis du har spørsmål eller ønsker å
                            samarbeide med oss. Takk for at du besøkte nettsiden
                            vår!
                        </p>
                        <div>
                            <p className="font-bold text-lg">e-post:</p>
                            <p className="text-3xl font-bold w-fit border-b-green border-b-4 pb-2">
                                hello@tetradmarketing.no
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col pt-4">
                        <p></p>
                        <div className="flex flex-col gap-4 justify-end text-end">
                            <h2 className="text-xl">Sosiale Media:</h2>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-[6px] items-center justify-end text-end">
                                    <a href="https://www.facebook.com/tetradmarketingoslo">
                                        Facebook
                                    </a>

                                    <img src={facebook} alt="facebook logo" />
                                </div>
                                <div className="flex gap-[6px] items-center justify-end text-end">
                                    <a href="https://www.instagram.com/tetrad_marketing/">
                                        Instagram
                                    </a>

                                    <img src={instagram} alt="instagram logo" />
                                </div>
                                <div className="flex gap-[6px] items-center justify-end text-end">
                                    <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A90636687&keywords=tetrad%20marketing&origin=RICH_QUERY_SUGGESTION&position=0&searchId=938343a9-efd2-4d7e-958f-1ddbee33059d&sid=)V3">
                                        LinkedIn
                                    </a>

                                    <img src={linkedin} alt="linkedin logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
