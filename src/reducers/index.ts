import { combineReducers } from "redux";
import { typeOptionsReducer, statusOptionsReducer } from "./options";
import { TypeSelectOptions, StatusSelectOptions } from "../actions";

export interface StoreState {
  typeOptions: TypeSelectOptions[] | string[];
  statusOptions: StatusSelectOptions[] | string[];
}

export const reducers = combineReducers<StoreState>({
  typeOptions: typeOptionsReducer,
  statusOptions: statusOptionsReducer,
});
