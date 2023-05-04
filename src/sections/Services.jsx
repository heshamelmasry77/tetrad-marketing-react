import React from "react";
import ServiceDigsyn from "../components/ServiceDigsyn";
import ServiceMarkeds from "../components/ServiceMarkeds";
import ServiceInnhold from "../components/ServiceInnhold";

function Services() {
    return (
        <div id="tjenester" className="bg-offblack mb-16">
            <div className="flex flex-col gap-16 py-32">
                <div className="inner flex justify-between">
                    <ServiceDigsyn />
                </div>
            </div>
        </div>
    );
}

export default Services;
