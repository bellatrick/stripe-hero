import React from "react";
import "./solution.css";
const SolutionItem = ({ icon, title }) => {
  return (
    <div className="solution_item">
      <img alt="icon" src={icon} />
      <p>{title}</p>
    </div>
  );
};

export default SolutionItem;
