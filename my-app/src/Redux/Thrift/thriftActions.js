import { SET_THRIFTS, SET_TICKET } from "./thriftTypes";

export const setThrifts = (payload = {}) => {
    return {
        type: SET_THRIFTS,
        thrifts: payload
    }
}

export const setTicket = (tic = '') => {
    return {
        type: SET_TICKET,
        ticket: tic
    }
}