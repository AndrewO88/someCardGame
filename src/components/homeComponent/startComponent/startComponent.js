import React from "react";
import {NavLink} from "react-router-dom";
import {useCustomState} from "../../../context/context";
import './startComponent.css';
import {Button, IconButton} from "@material-ui/core";
import audio from "../../../state/the_simpsons_01TheSimpsonsMainTitleTheme.mp3";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const StartComponent = () => {
    const {state: globalState, dispatch} = useCustomState()
    function startSound()  {
        new Audio(audio).play();
    }

    function initGame() {
        dispatch({type: 'initGame', quantityCards: globalState.quantityCards})

    }
    return (
            <div className={'background'}>
                <Button size="large" className={'background_button'} variant="contained" color="secondary" onClick={initGame}><NavLink to='/play'>Start game</NavLink></Button>
                <Button size="large" className={'background_button'} variant="contained" color="secondary"><NavLink to='/setting'>Settings</NavLink></Button>
                <Button size="large" className={'background_button'} variant="contained" color="secondary"><NavLink to='/records'>Records</NavLink></Button>
                <IconButton className={'sound_button'} color="primary" onClick={startSound}><PlayArrowIcon fontSize="large"/></IconButton>
            </div>
    )
}
export default StartComponent