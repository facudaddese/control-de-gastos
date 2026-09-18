import { useEffect, useReducer, type ReactNode } from "react";
import { initialState, reducer, type BudgeState } from "../reducers/reducer";
import { Context } from "../context/Context";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const stored = localStorage.getItem("budget");
    return stored ? (JSON.parse(stored) as BudgeState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
