import React from "react";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="inner text-offWhite flex flex-col font-semibold">
            <div className="flex my-16 justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl">Navigasjon</h3>
                    <div className="flex flex-col gap-2 text-montserrat">
                        <a className="hover:text-white" href="/">
                            Hjem
                        </a>
                        <Link className="hover:text-white" to="/#kontakt">
                            Kontakt
                        </Link>

                        <details className="cursor-pointer flex flex-col gap-8">
                            <summary className="hover:text-white">
                                Tjenester
                            </summary>
                            <div className=" flex flex-col  pl-4">
                                <Link className="hover:text-white" to="/orgsyn">
                                    Organisk Synlighet
                                </Link>
                                <Link className="hover:text-white" to="/marfor">
                                    Markedsføring
                                </Link>
                                <Link
                                    className="hover:text-white"
                                    to="/innprod"
                                >
                                    Innholdsproduksjon
                                </Link>
                            </div>
                        </details>
                        <Link className="hover:text-white" to="/blog">
                            Blogg
                        </Link>
                        <Link className="hover:text-white" to="/login">
                            Admin
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl">Sosiale Media</h3>
                        <div className="text-montserrat flex flex-col gap-2">
                            <div className="flex gap-[6px] items-center ">
                                <a href="https://www.facebook.com/tetradmarketingoslo">
                                    Facebook
                                </a>

                                <img src={facebook} alt="facebook logo" />
                            </div>
                            <div className="flex gap-[6px] items-center ">
                                <a href="https://www.instagram.com/tetrad_marketing/">
                                    Instagram
                                </a>

                                <img src={instagram} alt="instagram logo" />
                            </div>
                            <div className="flex gap-[6px] items-center ">
                                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A90636687&keywords=tetrad%20marketing&origin=RICH_QUERY_SUGGESTION&position=0&searchId=938343a9-efd2-4d7e-958f-1ddbee33059d&sid=)V3">
                                    LinkedIn
                                </a>

                                <img src={linkedin} alt="linkedin logo" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl">e-post</h3>
                            <p>Hello@tetradmarketing.no</p>
                        </div>
                    </div>
                </div>
                <Logo />
            </div>
        </footer>
    );
}

export default Footer;
