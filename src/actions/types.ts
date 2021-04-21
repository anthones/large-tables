import { UpdateTypeOptionsAction, UpdateStatusOptionsAction } from "./options";

export enum ActionTypes {
  updateTypeOptions,
  updateStatusOptions,
}

export enum TypeSelectOptions {
  N = "TypeN",
  New = "New Type",
  Fizz = "TypeFizz",
  Buzz = "TypeBuzz",
  FizzBuzz = "TypeFizzBuzz",
}

export enum StatusSelectOptions {
  N = "StatusN",
  New = "New Status",
  Fizz = "StatusFizz",
  Buzz = "StatusBuzz",
  FizzBuzz = "StatusFizzBuzz",
}

export const initialTypeOptions: TypeSelectOptions[] = [
  TypeSelectOptions.Fizz,
  TypeSelectOptions.Buzz,
  TypeSelectOptions.FizzBuzz,
  TypeSelectOptions.N,
  TypeSelectOptions.New,
];

export const initialStatusOptions: StatusSelectOptions[] = [
  StatusSelectOptions.Fizz,
  StatusSelectOptions.Buzz,
  StatusSelectOptions.FizzBuzz,
  StatusSelectOptions.N,
  StatusSelectOptions.New,
];

export type Action = UpdateTypeOptionsAction | UpdateStatusOptionsAction;
