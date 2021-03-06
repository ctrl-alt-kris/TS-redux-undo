import { combineReducers } from "redux";
import reducer from "./reducer";
import reducer2 from "./reducer2"
import undoable from "redux-undo";

const reducers = combineReducers({

    undoGroup: undoable(combineReducers({
    value: reducer,
    value2: reducer2
}))
});

export default reducers

export type State = ReturnType<typeof reducers>