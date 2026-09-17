export type ActionType =
  | { type: "addBudget"; payload: { budget: string } }
  | { type: "updateBudget"; payload: { id: string; budget: string } }
  | { type: "deleteBudget"; payload: { id: string } }
  | { type: "clearBudget" };

export type BudgeState = {
  id: string;
  budget: string;
};

export const initialState: BudgeState = {
  id: crypto.randomUUID(),
  budget: "",
};

export const reducer = (state: BudgeState, action: ActionType) => {
  switch (action.type) {
    case "addBudget":
      return {
        ...state,
        budget: +action.payload.budget,
      };
    // case "updateBudget":
    //   return state.map((e) =>
    //     e.id === action.payload.id
    //       ? { ...e, budget: action.payload.budget }
    //       : e,
    //   );
    // case "deleteBudget":
    //   return state.filter((e) => e.id !== action.payload.id);
    case "clearBudget":
      return initialState;
    default:
      return state;
  }
};
