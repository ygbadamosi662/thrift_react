import { SET_THRIFTS, SET_THRIFT } from "./thriftTypes";

export const setThrifts = (payload = {}) => {
    return {
        type: SET_THRIFTS,
        thrifts: payload
    }
}

export const setThrift = (thrift = {}, mOl = '') => {
    return {
        type: SET_THRIFT,
        thri: thrift,
        mol: mOl
    }
}