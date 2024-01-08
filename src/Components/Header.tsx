import React from "react";
import { useData } from "../Context/DataContext";

const Header = () => {
  const { data, loading, error } = useData();

  return <div>Header</div>;
};

export default Header;
