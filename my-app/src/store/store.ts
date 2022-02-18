import { createStore, applyMiddleware } from "redux";
import { StateWithHistory } from "redux-undo";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {
    },
    applyMiddleware(thunk)
)