export type ActionType =
  | { type: "addBudget"; payload: { budget: number } }
  | { type: "updateBudget"; payload: { id: string; budget: number } }
  | { type: "deleteBudget"; payload: { id: string } }
  | { type: "clearBudget" };

export type BudgeState = {
  id: string;
  budget: number;
};

export const initialState: BudgeState = {
  id: "0",
  budget: 0,
};

export const reducer = (state: BudgeState, action: ActionType) => {
  switch (action.type) {
    case "addBudget":
      return {
        ...state,
        budget: action.payload.budget,
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
