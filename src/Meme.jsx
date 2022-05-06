import { useRef } from "react";
import domtoimage from "dom-to-image";

const saveImage = (node) =>
    domtoimage
        .toJpeg(node, { quality: 0.95 })

        .then(function (dataUrl) {
            var link = document.createElement("a");
            link.download = "my-image-name.jpeg";
            link.href = dataUrl;
            link.click();
        });

const Meme = ({ name, url, id, topText, bottomText, middleText, index }) => {
    const domReference = useRef();

    console.log(domReference.current);

    return (
        <div>
            <h3>
                {index + 1}. {name}
            </h3>

            <button onClick={() => saveImage(domReference.current)}>
                Save
            </button>

            <div
                ref={domReference}
                className="meme-wrapper"
                style={{
                    backgroundImage: `url(${url})`,
                }}
            >
                <p className="meme-text top">{topText}</p>
                <p className="meme-text bottom">{middleText}</p>
                <p className="meme-text bottom">{bottomText}</p>
            </div>
        </div>
    );
};
export default Meme;
