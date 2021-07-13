import React from "react";
import {Link} from "react-router-dom";
import BoardComponent from "./boardComponent/boardComponent";



const  PlayComponent = () => {
    const playBoard = {
        display: "flex",
        flexWrap: "wrap",
        border: "2px solid red",
        width: "100%",
         maxHeight: "95vh",
        margin: "0",
        overflow: 'hidden',
        overflowY:'auto',
        backgroundImage: `url(https://wfpk.org/wp-content/uploads/Moe.jpg)`,
        backgroundSize:'100% 100%',
    }
    const ButtonPanel = () => {
        return (
            <div>
                <Link to="/">
                    <button>Назад</button>
                </Link>
            </div>
        )
    }
    return (
        <div>
            <div style={playBoard}>
                <BoardComponent/>
            </div>
            <ButtonPanel/>
        </div>
    )
}
export default PlayComponent