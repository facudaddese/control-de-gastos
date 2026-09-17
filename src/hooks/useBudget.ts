import { useContext } from "react";
import { Context } from "../context/Context";

export const useBudget = () => {
  const context = useContext(Context);

  if (context === undefined)
    throw new Error("useBudget debe usarse dentr de Provider");

  return context;
};
