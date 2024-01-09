import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
      <br />
      {inicio}
    </form>
  );
};

export default DateRange;
