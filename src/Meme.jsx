
const Meme = ({ name, url, id, topText, bottomText, middleText, index }) => (
    <div>
        <h3>
            {index + 1}. {name} ({id})
        </h3>
        <div className="meme-wrapper">
            <p className="meme-text top">{topText}</p>
            <p className="meme-text bottom">{middleText}</p>
            <p className="meme-text bottom">{bottomText}</p>
            <img src={url}></img>
        </div>
    </div>
);
export default Meme