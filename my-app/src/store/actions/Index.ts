import {ActionType} from "../actiontypes/actionTypes"

interface AddAction {
  type: ActionType.ADD,
  payload: number
}

interface SubtractAction {
  type: ActionType.SUBSTRACT,
  payload: number
}

interface AddAction2 {
  type: ActionType.ADD2,
  payload: number
}

interface SubtractAction2 {
  type: ActionType.SUBSTRACT2,
  payload: number
}

export type Action = AddAction | SubtractAction | AddAction2 | SubtractAction2 