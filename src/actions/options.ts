import { Action, ActionTypes } from "./types";

export interface UpdateTypeOptionsAction {
    type: ActionTypes.updateTypeOptions;
    payload: string
}

export interface UpdateStatusOptionsAction {
    type: ActionTypes.updateStatusOptions;
    payload: string
}

export const updateOptions = (action: ActionTypes, newOption: string ): Action => {
    return {
        type: action,
        payload: newOption
    }
}