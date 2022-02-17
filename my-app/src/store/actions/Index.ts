import {ActionType} from "../actiontypes/actionTypes"

interface AddAction {
  type: ActionType.ADD,
  payload: number
}

interface SubtractAction {
  type: ActionType.SUBSTRACT,
  payload: number
}

export type Action = AddAction | SubtractAction