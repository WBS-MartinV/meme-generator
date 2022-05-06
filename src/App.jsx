import { useEffect, useState } from "react";
import "./App.css";
import Meme from "./Meme";

const meme_url = "https://api.imgflip.com/get_memes";

function App() {
    const [memes, setMemes] = useState([]);
    const [meme, setMeme] = useState({});
    const [selected, setSelected] = useState(0);

    const [topText, setTopText] = useState("TOP TEXT!!!!");
    const [bottomText, setBottomText] = useState("Bottom TEXT!!!!");
    const [middleText, setMiddleText] = useState("MIDDLE TEXT!!!!");

    const randomNumber = () => Math.round(Math.random() * 100);

    useEffect(() => {
        fetch(meme_url)
            .then((response) => {
                return response.json();
            })
            .then((memeData) => {
                setMemes(memeData.data.memes);
                setMeme(memeData.data.memes[selected]);
            });
    }, []);

    useEffect(() => {
        setMeme(memes[selected]);
    }, [memes, selected]);

    return (
        <div className="App">
            <h1>MEME GENERATOR</h1>
            <input
                value={topText}
                onChange={(event) => setTopText(event.target.value)}
                type="text"
            ></input>
            <input
                value={middleText}
                onChange={(event) => setMiddleText(event.target.value)}
                type="text"
            ></input>
            <input
                value={bottomText}
                onChange={(event) => setBottomText(event.target.value)}
                type="text"
            ></input>
            <div className="buttons">
                <button
                    disabled={selected <= 0}
                    onClick={(event) => {
                        setSelected((previous) => previous - 1);
                    }}
                >
                    PREV
                </button>
                <button
                    onClick={(event) => {
                        setSelected(randomNumber());
                    }}
                >
                    RANDOM
                </button>
                <button
                    disabled={selected >= 99}
                    onClick={(event) => {
                        setSelected((previous) => previous + 1);
                    }}
                >
                    NEXT
                </button>
            </div>
            <input type="file" id="input" multiple></input>
            Selected meme: {selected + 1}
            <Meme
                {...meme}
                index={selected}
                topText={topText}
                bottomText={bottomText}
                middleText={middleText}
            ></Meme>
        </div>
    );
}

export default App;
