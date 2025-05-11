export default function Heading (props) {
    return (
        <h1 className={`text-7xl text-transparent bg-[linear-gradient(to_bottom,_white_60%,_transparent_100%)] bg-clip-text font-semibold leading-snug ${props.className}`}>{props.label}</h1>
    );
}