import React from "react";
import {NavLink} from "react-router-dom";
import {useCustomState} from "../../../context/context";

const StartComponent = () => {
    const {state: globalState, dispatch} = useCustomState()
    function initGame() {
        dispatch({type: 'initGame', quantityCards: globalState.quantityCards})
    }
    return (
            <>
                <button onClick={initGame}><NavLink to='/play'>Начать игру</NavLink></button>
                <button><NavLink to='/setting'>Настройки</NavLink></button>
                <button><NavLink to='/records'>Рекорды</NavLink></button>
            </>
    )
}
export default StartComponent