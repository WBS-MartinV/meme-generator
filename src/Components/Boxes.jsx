import { useEffect } from "react";
import BoxInputs from "./BoxInput";

export default function Boxes({ meme, boxes, setBoxes }) {
    const range = length =>
        Array(length)
            .fill()
            .map((_, i) => i);

    const boxChange = field => event =>
        setBoxes(boxes =>
            boxes.map(item =>
                item.index == event.target.getAttribute("index")
                    ? {
                          ...item,
                          [field]:
                              field === "details"
                                  ? event.target.checked
                                  : event.target.value,
                          active: field !== "active",
                      }
                    : {
                          ...item,
                          active: false,
                      }
            )
        );

    const newBox = (index, i, array) => ({
        index,
        text: "",
        top: (100 / (array?.length || 10)) * index + 5,
        left: 45,
        color: "#000000",
        width: 50,
        size: 1,
        rotation: 0,
        details: false,
    });

    const addBox = event => {
        event.preventDefault();
        setBoxes(prev => prev.concat(newBox(prev.length)));
    };

    const resetBoxes = event => {
        event.preventDefault();
        setBoxes(range(meme.box_count).map(newBox));
        localStorage.removeItem(meme.name + "_boxes");
    };

    const boxEvents = {
        ...[
            "text",
            "top",
            "left",
            "width",
            "size",
            "color",
            "rotation",
            "details",
            "active",
        ].reduce(
            (events, prop) => ({
                [prop + "Change"]: boxChange(prop),
                ...events,
            }),
            {}
        ),

        remove: event => {
            event.preventDefault();
            setBoxes(boxes => {
                return boxes
                    .filter(
                        box => box.index != event.target.getAttribute("index")
                    )
                    .map((box, index) => ({
                        ...box,
                        index,
                    }));
            });
        },
    };

    useEffect(() => {
        const savedBoxes = JSON.parse(
            localStorage.getItem(meme.name + "_boxes")
        );
        setBoxes(savedBoxes || range(meme.box_count).map(newBox));
    }, [meme]);

    useEffect(() => {
        boxes.some(box => box.active) &&
            localStorage.setItem(meme.name + "_boxes", JSON.stringify(boxes));
    }, [boxes]);

    return (
        <form>
            <button onClick={addBox}>Add</button>
            <button onClick={resetBoxes}>Reset</button>
            {boxes.map(box => ({ ...box, boxEvents })).map(BoxInputs)}
        </form>
    );
}
