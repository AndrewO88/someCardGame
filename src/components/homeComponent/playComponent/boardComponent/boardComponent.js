import React, {useEffect, useState} from "react";
import {useCustomState} from "../../../../context/context";
import CardComponent from "./cardComponent/cardComponent"



const BoardComponent = () => {
    const [canClick, setCanClick] = useState(true);
    const {state: globalState, dispatch} = useCustomState()
    const cardsArr = Object.values(globalState.cardsObj);

    console.log('globalState', globalState);
    useEffect(() => {
        const cardsNumbers = Object.values(globalState.compareObj)
        const ids = Object.keys(globalState.compareObj)
        let size = ids.length;
        if (size === 2) {
           setCanClick(false);
           if(cardsNumbers[0] === cardsNumbers[1]) {
               dispatch({type: 'equal'});
               setCanClick(true);
           } else {
               setTimeout(() => {
                   dispatch({type: 'notEqual', ids});
                   setCanClick(true);
               }, 1000)
           }
        }
    }, [globalState.compareObj, dispatch]);

    function renderCards(arr, params) {
        return  arr.map((card) => {
            return <CardComponent key={card.id} card={card} canClick={params}/>
        })
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {renderCards(cardsArr, canClick)}
        </div>
    )

}
export default BoardComponent