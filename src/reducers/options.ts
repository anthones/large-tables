import { StoreState } from ".";
import {
  ActionTypes,
  initialTypeOptions,
  initialStatusOptions,
  UpdateTypeOptionsAction,
  UpdateStatusOptionsAction,
} from "../actions";

export const typeOptionsReducer = (
  state: StoreState["typeOptions"] = initialTypeOptions,
  { type, payload }: UpdateTypeOptionsAction
) => {
  switch (type) {
    case ActionTypes.updateTypeOptions:
      return [...state, payload];
    default:
      return state;
  }
};

export const statusOptionsReducer = (
  state: StoreState["statusOptions"] = initialStatusOptions,
  { type, payload }: UpdateStatusOptionsAction
) => {
  switch (type) {
    case ActionTypes.updateStatusOptions:
      return [...state, payload];
    default:
      return state;
  }
};
