import { SET_THRIFTS, SET_THRIFT } from "./thriftTypes";

const initState = {
    thrifts: {},
    thrift: {},
    MoL: 'LESS'
}

export const thriftReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_THRIFTS: return {
            ...state,
            thrifts: action.thrifts
        }

        case SET_THRIFT: return {
            ...state,
            thrift: action.thri,
            MoL: action.mol
        }
        
        default: return state
    }
}