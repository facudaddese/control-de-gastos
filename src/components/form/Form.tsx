import { useState } from "react";
import { useBudget } from "../../hooks/useBudget";

const Form = () => {
  const [input, setInput] = useState("");
  const { state, dispatch } = useBudget();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const isInvalid = () => {
    return input === "" || input[0] <= "0";
  };

  const handleAdd = () => {
    dispatch({ type: "addBudget", payload: { budget: input } });
    setInput("");
    console.log(state);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col items-center justify-center max-w-full gap-5 py-5 px-20 space-y-3 border border-gray-100 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.75)]"
    >
      <label htmlFor="input" className="text-[25px]">
        Presupuesto del mes de{" "}
        <strong className="capitalize text-indigo-900">
          {new Date().toLocaleDateString("es-ES", { month: "long" })}
        </strong>
      </label>
      <div className="flex items-center w-full gap-2">
        <span>$</span>
        <input
          type="number"
          id="input"
          placeholder="Ej. 975000"
          value={input}
          onChange={handleInput}
          className="outline-0 border-b border-indigo-900 rounded-[5px] p-1 w-full"
        />
      </div>
      <button
        disabled={isInvalid()}
        className={`border font-medium text-white rounded-2xl p-1 w-full disabled:opacity-30 bg-blue-500 hover:bg-blue-600 ${isInvalid() ? "cursor-not-allowed" : "cursor-pointer"}`}
        onClick={handleAdd}
      >
        Confirmar presupuesto
      </button>
    </form>
  );
};

export default Form;
