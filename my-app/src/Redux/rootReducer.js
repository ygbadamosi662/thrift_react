import { combineReducers } from "redux";
import { userReducer } from './user/userReducer'
import { thriftReducer } from "./Thrift/thriftReducers";

export const rootReducer = combineReducers({
    user: userReducer,
    thrifts: thriftReducer
})