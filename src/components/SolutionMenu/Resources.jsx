import React from "react";
import { integrations, integrations2, useCasesMenu, useCasesMenu2 } from "../../data";
import "./solution.css";
import SolutionItem from "./SolutionItem";
const Resources = () => {
  return (
    <div className="solution_grid">
      <div className="row">
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

export default Resources;
