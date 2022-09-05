import React from "react";
import { integrations, integrations2, useCasesMenu, useCasesMenu2 } from "../../data";
import "./solution.css";
import SolutionItem from "./SolutionItem";
const Solution = () => {
  return (
    <div className="solution_grid">
      <div className="row">
        <h3>Use cases</h3>
        {useCasesMenu.map(({ icon, title }) => (
          <SolutionItem icon={icon} title={title}  />
        ))}
      </div>
      
      <div className="row">
  
        {useCasesMenu2.map(({ icon, title }) => (
          <SolutionItem icon={icon} title={title}  />
        ))}
      </div>
      <div className="row">
        <h3>INTEGRATIONS & CUSTOM SOLUTIONS</h3>
        {integrations.map(({ icon, title }) => (
          <SolutionItem icon={icon} title={title}  />
        ))}
      </div>
      <div className="row">
        {integrations2.map(({ icon, title }) => (
          <SolutionItem icon={icon} title={title}  />
        ))}
      </div>
    </div>
  );
};

export default Solution;
