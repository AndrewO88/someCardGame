import React from "react";
import {useCustomState} from "../../../../../context/context";
import "./cardComponent.css"



const CardComponent = (props) => {
    const {dispatch} = useCustomState()
    function flipper(card) {
        if(props.canClick) {
            dispatch({type: 'checkCard', id: card.id})
        }
    }

    return (
        <button className="scene scene--card" disabled={props.card.disabled}
                onClick={() => flipper(props.card)}>
            <div className={`card ${props.card.state ? "is-flipped" : ""}`}>
                <div className="card__face card__face--front">front</div>
                <div className="card__face card__face--back">{props.card.numberCard}</div>
            </div>
        </button>
    )
}
export default CardComponent