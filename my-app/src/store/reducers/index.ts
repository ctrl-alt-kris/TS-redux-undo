import { combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
    value: reducer
});

export default reducers

export type State = ReturnType<typeof reducers>