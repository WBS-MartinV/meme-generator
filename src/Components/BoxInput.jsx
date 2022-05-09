export default function BoxInputs({
    index,
    text,
    top,
    left,
    width,
    color,
    size,
    rotation,
    boxEvents,
    details,
}) {
    return (
        <div
            key={index}
            className="box-input"
            style={{
                border: "1px solid gray",
                margin: "1px",
            }}
        >
            <p>
                <input
                    type="checkbox"
                    checked={details}
                    index={index}
                    onChange={boxEvents.detailsChange}
                />
                Box {index + 1}.
                <button index={index} onClick={boxEvents.remove}>
                    X
                </button>
            </p>

            <div>
                Text:
                <textarea
                    type="text"
                    value={text}
                    onChange={boxEvents.textChange}
                    onBlur={boxEvents.activeChange}
                    index={index}
                />
            </div>

            {details && (
                <div className="details">
                    <div>
                        Top:
                        <input
                            type="number"
                            value={top}
                            onChange={boxEvents.topChange}
                            onBlur={boxEvents.activeChange}
                            index={index}
                        />
                    </div>
                    <div>
                        Left:
                        <input
                            type="number"
                            value={left}
                            onChange={boxEvents.leftChange}
                            onBlur={boxEvents.activeChange}
                            index={index}
                        />
                    </div>
                    <div>
                        Width:
                        <input
                            type="number"
                            value={width}
                            onChange={boxEvents.widthChange}
                            onBlur={boxEvents.activeChange}
                            index={index}
                        />
                    </div>
                    <div>
                        Color:
                        <input
                            type="color"
                            value={color}
                            onChange={boxEvents.colorChange}
                            onBlur={boxEvents.activeChange}
                            index={index}
                        />
                    </div>
                    <div>
                        Size:
                        <input
                            type="number"
                            min={0.25}
                            max={3}
                            step={0.25}
                            value={size}
                            onChange={boxEvents.sizeChange}
                            onBlur={boxEvents.activeChange}
                            index={index}
                        />
                    </div>
                    <div>
                        Rotation:
                        <input
                            type="number"
                            min={-180}
                            max={180}
                            step={5}
                            value={rotation}
                            onChange={boxEvents.rotationChange}
                            onBlur={boxEvents.activeChange}
                            index={index}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
