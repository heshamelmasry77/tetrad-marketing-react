import React from "react";
import ServiceDigsyn from "../components/ServiceDigsyn";
import ServiceMarkeds from "../components/ServiceMarkeds";
import ServiceInnhold from "../components/ServiceInnhold";

function Services() {
    return (
        <div id="tjenester" className="bg-offblack mb-16">
            <div className="flex flex-col gap-16 py-32">
                <h2 className=" mx-auto text-5xl font-bold w-fit border-b-pink border-b-4 pb-2 ">
                    Komplett Digital Markedsføring
                </h2>
                <div className="inner flex justify-between">
                    <ServiceDigsyn />
                    <ServiceInnhold />
                    <ServiceMarkeds />
                </div>
            </div>
        </div>
    );
}

export default Services;
