import {characters} from "../state/state";

function initCardObj(obj, quantityCards){
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    function createCardsProps(obj, index, propsName, numberCard) {
        switch (propsName) {
            case 'id': {
                return  obj[index + 1]['id'] = [index + 1]
            }
            case 'numberCard': {
                return  obj[index + 1]['numberCard'] = numberCard;
            }
            case 'disabled': {
                return obj[index + 1]['disabled'] = false;
            }
            case 'state': {
                return  obj[index + 1]['state'] = false;
            }
            case 'character': {
                return  obj[index + 1]['character'] = characters[numberCard];
            }
            default: {
                throw new Error(`Unhandled propsName type: ${propsName}`)
            }
        }
    }
    obj = {};
    [...Array(quantityCards).keys()].map((num) => obj[num +1] = {})

    let halfNumberCardsArr = [...Array(quantityCards /2).keys()].map((num) => {
        return num +1;
    })
    const numberCardsArr = halfNumberCardsArr.concat(halfNumberCardsArr)
    let shuffledArr = shuffle(numberCardsArr)
    shuffledArr.forEach((numberCard, index) => {
        createCardsProps(obj, index, 'id' )
        createCardsProps(obj, index, 'numberCard', numberCard)
        createCardsProps(obj, index, 'disabled' )
        createCardsProps(obj, index, 'state' )
        createCardsProps(obj, index, 'character', numberCard)
    })
    return obj;
}
function init(initialState) {
   // ?????????????????? https://ru.reactjs.org/docs/hooks-reference.html#usereducer
    return initialState
}


const functionsFromContext = {
    initCardObj, init
}
export default functionsFromContext