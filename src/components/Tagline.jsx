export default function Tagline(props) {
    return (
        <h2 className={props.className ? props.className : "text-xl text-white font-normal leading-snug"}>
            {props.label}
        </h2>
    );
}