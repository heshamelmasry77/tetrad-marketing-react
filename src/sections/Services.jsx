import React from "react";
import ServiceDigsyn from "../components/ServiceDigsyn";
import ServiceMarkeds from "../components/ServiceMarkeds";
import ServiceInnhold from "../components/ServiceInnhold";

function Services() {
    return (
        <div id="tjenester" className="bg-offblack py-32 mt-32">
            <div className="flex flex-col gap-16 py-32  inner">
                <h2 className="mx-auto service-heading text-5xl font-bold w-fit border-b-pink midScreen:border-b-4 pb-2 ">
                    Komplett Digital{" "}
                    <span className="border-b-pink border-b-4 pb-2 midScreen:border-0 midScreen:p-0">
                        Markedsføring
                    </span>
                </h2>
                <div className="service-cards-wrapper items-center">
                    <ServiceDigsyn />
                    <ServiceInnhold />
                    <ServiceMarkeds />
                </div>
            </div>
        </div>
    );
}

export default Services;
