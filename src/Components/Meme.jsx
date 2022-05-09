import { useRef } from "react";
import domtoimage from "dom-to-image";

import Box from "./Box";

const saveImage = node =>
    domtoimage
        .toJpeg(node, { quality: 0.95 })

        .then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = "meme.jpeg";
            link.href = dataUrl;
            link.click();
        });

const Meme = ({ name, url, width, height, boxes, index }) => {
    const domReference = useRef();

    return (
        <div className="meme">
            <h3>
                {index >= 0 && <span>{index + 1}.</span>} {name}
                <button onClick={() => saveImage(domReference.current)}>
                    Save
                </button>
            </h3>

            <div
                ref={domReference}
                className="meme-wrapper"
                style={{
                    backgroundImage: `url(${url})`,
                    aspectRatio: width + " / " + height,
                }}
            >
                {boxes.map(Box)}
            </div>
        </div>
    );
};
export default Meme;
