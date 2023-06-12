import { LOG_USER, LOG_EMAIL } from "./userTypes";

export const logUser = (payLoad = {}) => {
    return {
        type: LOG_USER,
        user: payLoad
    }
}

export const logEmail = (em) => {
    return {
        type: LOG_EMAIL,
        email: em
    }
}