import { useEffect, useState } from "react";
import "./App.css";
import Meme from "./Components/Meme";
import Boxes from "./Components/Boxes";
import Button from "./Components/Button";

import { version } from "../package.json";

document.title += " v" + version;

const meme_url = "https://api.imgflip.com/get_memes";

function App() {
    const [memes, setMemes] = useState([]);
    const [meme, setMeme] = useState({});
    const [selected, setSelected] = useState(0);

    const [boxes, setBoxes] = useState([]);

    const randomNumber = () => Math.round(Math.random() * 99);

    useEffect(() => {
        fetch(meme_url)
            .then(response => {
                return response.json();
            })
            .then(memeData => {
                setMemes(memeData.data.memes);
                setSelected(0);
            });
    }, []);

    const buttonData = [
        {
            label: "PREV",
            click(event) {
                setSelected(selected => selected - 1);
            },
            disabled: () => selected <= 0,
        },
        {
            label: "RANDOM",
            click(event) {
                setSelected(randomNumber);
            },
            disabled: () => false,
        },
        {
            label: "NEXT",
            click(event) {
                setSelected(selected => selected + 1);
            },
            disabled: () => selected >= 99,
        },
    ];

    useEffect(() => {
        if (!memes.length) return;
        setMeme(memes[selected]);
    }, [memes, selected]);

    const handleUpload = event => {
        const url = URL.createObjectURL(event.target.files[0]);

        const img = new Image();
        img.src = url;

        img.onload = function () {
            setMeme({
                name: event.target.files[0].name.replace(/\.\w+$/, ""),
                custom: true,
                width: this.width,
                height: this.height,
                url,
            });
        };
    };

    return (
        <div className="App">
            {/* <h1>MEME GENERATOR v0.1</h1> */}

            <div className="wrapper">
                <Meme {...meme} index={selected} boxes={boxes}></Meme>

                <div className="controls">
                    <div className="navigation">
                        <input
                            type="number"
                            min={1}
                            max={100}
                            value={selected + 1}
                            onChange={e =>
                                e.target.value <= 100 &&
                                setSelected(parseInt(e.target.value) - 1 || 0)
                            }
                        />
                        {buttonData.map(Button)}
                    </div>

                    <div>
                        Upload:{" "}
                        <input onChange={handleUpload} type="file" id="input" />
                    </div>

                    <Boxes meme={meme} boxes={boxes} setBoxes={setBoxes} />
                </div>
            </div>
        </div>
    );
}

export default App;
