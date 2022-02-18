import { combineReducers } from "redux";
import reducer from "./reducer";
import undoable from "redux-undo";

const reducers = combineReducers({
    value: undoable(reducer, {
        limit: 10
    })
});

export default reducers

export type State = ReturnType<typeof reducers>