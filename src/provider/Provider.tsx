import { useReducer, type ReactNode } from "react";
import { initialState, reducer } from "../reducers/reducer";
import { Context } from "../context/Context";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
