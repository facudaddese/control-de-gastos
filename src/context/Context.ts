import { createContext } from "react";
import type { ActionType, BudgeState } from "../reducers/reducer";

type Context = {
  state: BudgeState;
  dispatch: React.ActionDispatch<[action: ActionType]>;
};

export const Context = createContext<Context | undefined>(undefined);
