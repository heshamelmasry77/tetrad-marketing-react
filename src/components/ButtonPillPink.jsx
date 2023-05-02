import React from "react";

function ButtonPill(props) {
    return (
        <div
            id={props.linkAction}
            className="w-[180px] h-[50px] grid place-items-center bg-pink text-white rounded-full font-semibold text-xl"
        >
            {props.content}
        </div>
    );
}

export default ButtonPill;
