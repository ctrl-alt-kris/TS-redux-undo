import { ActionType } from "../actiontypes/actionTypes"
import { Dispatch } from "redux"
import { Action } from "../actions/Index"

export const addValue = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD,
            payload: amount
        })
    }
}

export const subtractValue = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SUBSTRACT,
            payload: amount
        })
    }
}
export const addValue2 = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD2,
            payload: amount
        })
    }
}

export const subtractValue2 = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SUBSTRACT2,
            payload: amount
        })
    }
}