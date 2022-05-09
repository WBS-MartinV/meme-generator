export default function Box({
    index,
    text,
    top,
    left,
    color,
    width,
    size,
    rotation,
    active,
}) {
    const style = {
        position: "absolute",
        top: top + "%",
        left: left + "%",
        width: "fit-content",
        maxWidth: width + "%",
        fontSize: size + "rem",
        color: color,
        transform: "rotate(" + rotation + "deg)",
        transformOrigin: "center",
        border: active ? "3px dashed gray" : "3px solid transparent",
        boxSizing: "border-box",
        whiteSpace: "pre-wrap",
        margin: 0,
    };

    return (
        <p key={index} style={style} title={"Box " + (index + 1)}>
            {text || "PLACEHOLDER " + (index + 1)}
        </p>
    );
}
