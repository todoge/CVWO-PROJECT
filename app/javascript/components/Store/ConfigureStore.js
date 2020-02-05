// The store manages the Reducers

import {createStore, combineReducers} from "redux"
import FlashReducer from "../Messages/FlashReducer"

export default ()=>{
    const store = createStore(combineReducers({
        flash: FlashReducer
    }));
    return store;
}
