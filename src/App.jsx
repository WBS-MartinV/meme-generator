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

    useEffect(() => {
        fetch(meme_url)
            .then((response) => {
                return response.json();
            })
            .then((memeData) => {
                setMemes(memeData.data.memes);
                setMeme(memeData.data.memes[0]);
            });
    }, []);

    return (
        <div className="App">
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
