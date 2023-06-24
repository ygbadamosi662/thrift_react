import { SET_THRIFTS, SET_TICKET } from "./thriftTypes";

const initState = {
    thrifts: {},
    ticket: ''
}

export const thriftReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_THRIFTS: return {
            ...state,
            thrifts: action.thrifts
        }

        case SET_TICKET: return {
            ...state,
            ticket: action.ticket
        }
        
        default: return state
    }
}