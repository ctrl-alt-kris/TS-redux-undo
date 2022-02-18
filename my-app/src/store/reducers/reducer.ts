import { ActionType } from "../actiontypes/actionTypes";
import { Action } from "../actions/Index";
import undoable from "redux-undo";


const initialState = 0;


const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
      case ActionType.ADD:
        return state + action.payload;
      case ActionType.SUBSTRACT:
        return state - action.payload;
      default:
        return state
    }
  }
  
export default reducer