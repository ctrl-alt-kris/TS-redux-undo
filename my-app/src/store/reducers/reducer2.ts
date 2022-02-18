import { ActionType } from "../actiontypes/actionTypes";
import { Action } from "../actions/Index";
import undoable from "redux-undo";


const initialState = 0;


const reducer2 = (state: number = initialState, action: Action): number => {
    switch (action.type) {
      case ActionType.ADD2:
        return state + action.payload;
      case ActionType.SUBSTRACT2:
        return state - action.payload;
      default:
        return state
    }
  }

  const undoableReducer = undoable(reducer2)
  
export default undoableReducer