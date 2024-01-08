import React from "react";
import { useData } from "../Context/DataContext";

const Resumo = () => {
  const { data, loading, error } = useData();

  console.log(data);

  return <div>Resumo</div>;
};

export default Resumo;
