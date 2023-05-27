import { Link } from "react-router-dom";

function ButtonPill(props) {
    return (
        <Link
            to={props.linkAction}
            className="w-[180px] h-[50px] grid place-items-center bg-pink text-white rounded-full font-semibold text-xl"
        >
            {props.content}
        </Link>
    );
}

export default ButtonPill;
