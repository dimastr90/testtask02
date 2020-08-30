import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import mainReducer from "./mainReducer";

//create store using thunk middleware;
export const store = createStore(mainReducer, applyMiddleware(thunkMiddleware))