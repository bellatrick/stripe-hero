import React from "react";
import SolutionItem from "../../SolutionMenu/SolutionItem";
import "./doc.css";
import doc from "../../../assets/doc.svg";
import full_api from "../../../assets/full_api.svg";
import api_status from "../../../assets/api_status.svg";
import api_change from "../../../assets/api_change.svg";
import ecommerce from "../../../assets/ecommerce.svg";
const DocMenu = () => {
  return (
    <div className="documentation">
      <SolutionItem icon={doc} title={"Documentation"} />
      <p className="subtitle">Start integrating Stripe’s products and tools</p>
      <div className="doc_grid">
        <div className="row">
          <h4>GET STARTED</h4>
          <p>Pre-built checkout </p>
          <p>Libraries and SDKs </p>
          <p>Plugins </p> <p>Code sample </p>
        </div>
        <div className="row">
          <h4>GUIDES</h4>
          <p>Accept online payments </p>
          <p>Manage subcriptions </p>
          <p>Send Payments </p> <p>Set up in-person payments </p>
        </div>
        <div className="row">
        <SolutionItem icon={full_api} title={"Full API reference"} />
        <SolutionItem icon={api_status} title={"API status"} />
        </div>
        <div className="row">
        <SolutionItem icon={api_change} title={"API change log"} />
        <SolutionItem icon={ecommerce} title={"Build a Stripe App "} />
        </div>
      </div>
    </div>
  );
};

export default DocMenu;
