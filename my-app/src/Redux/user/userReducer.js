import { LOG_USER,LOG_EMAIL } from "./userTypes";

const initState = {
    user: {},
    email: ''
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_USER: return {
            ...state,
            user: action.user
        }

        case LOG_EMAIL: return {
            ...state,
            email: action.email
        }

        default: return state
    }
}
