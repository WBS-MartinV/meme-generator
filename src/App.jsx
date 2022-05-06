import { useEffect, useState } from "react";
import "./App.css";
import Meme from "./Meme";

const meme_url = "https://api.imgflip.com/get_memes";

function App() {
    const [memes, setMemes] = useState([]);
    const [meme, setMeme] = useState({});

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
                setMeme(memeData.data.memes[randomNumber()]);
            });
    }, []);

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
                <button>PREV</button>
                <button>RANDOM</button>
                <button>NEXT</button>
            </div>

            <input type="file" id="input" multiple></input>

            <Meme
                {...meme}
                topText={topText}
                bottomText={bottomText}
                middleText={middleText}
            ></Meme>
        </div>
    );
}

export default App;
