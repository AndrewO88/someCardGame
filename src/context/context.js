import * as React from 'react'
import {createContext, useContext, useReducer} from "react";
import functionsFromContext from "./functionsFromContext";
import globalState from "../state/state";

const StateContext = createContext()

function stateReducer(state, action) {
    switch (action.type) {
        case 'initGame': {
            return {
                ...state,
                cardsObj: functionsFromContext.initCardObj(state.cardsObj, action.quantityCards)
            }
        }
        case 'setQuantityCards': {
            return {
                ...state,
                quantityCards: action.quantityCards
            }
        }
        case 'checkCard': {
            return {
                ...state,
                cardsObj: {
                    ...state.cardsObj,
                    [action.id]: {
                        ...state.cardsObj[action.id],
                        state: true,
                        disabled: true,
                    }
                },
                compareObj: {
                    ...state.compareObj,
                    [state.cardsObj[action.id].id]: state.cardsObj[action.id].numberCard
                },
            }
        }
        case 'equal': {
            return {
                ...state,
                compareObj: {},
            }
        }
        case 'notEqual': {
            return {
                ...state,
                cardsObj: {
                    ...state.cardsObj,
                    [action.ids[0]]: {
                        ...state.cardsObj[action.ids[0]],
                        state: false,
                        disabled: false,
                    },
                    [action.ids[1]]: {
                        ...state.cardsObj[action.ids[1]],
                        state: false,
                        disabled: false,
                    }
                },
                compareObj: {},
            }
        }
        case 'reset':
            return functionsFromContext.init(globalState);
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function StateProvider({children}) {
    const [state, dispatch] = useReducer(stateReducer, globalState, functionsFromContext.init)
    const value = {state, dispatch}
    return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

function useCustomState() {
    const context = useContext(StateContext)
    if (context === undefined) {
        throw new Error('useCustomState must be used within a StateProvider')
    }
    return context
}


export {StateProvider, useCustomState}