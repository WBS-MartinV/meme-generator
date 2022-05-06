
const Meme = ({ name, url, id, topText, bottomText, middleText, index }) => (
    <div>
        <h3>
            {index + 1}. {name} ({id})
        </h3>
        <div className="meme-wrapper" style={{
            backgroundImage: `url(${url})`
        }}>
            <p className="meme-text top">{topText}</p>
            <p className="meme-text bottom">{middleText}</p>
            <p className="meme-text bottom">{bottomText}</p>

        </div>
    </div>
);
export default Meme