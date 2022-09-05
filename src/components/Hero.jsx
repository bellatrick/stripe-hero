import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
import heroImage from "../assets/hero.svg";
import { ArrowForward, ChevronRight } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="hero">
      <Navbar />
      <section />
      <div className="hero_section container">
        {" "}
        <div>
          <h1>Payments infrascructure for the internet</h1>
          <p>
            Millions of businesses of all sizes – from startups to Fortune 500s
            – use Stripe's software and APIs to accept payments, send payouts,
            and manage their businesses online.
          </p>
          <div className="hero_buttons">
            {" "}
            <div className="button_container ">
              <button className="primary">Start now</button>
              <ChevronRight className="chevron_right" />
              <ArrowForward className="arrow_forward" />
            </div>
            <div className="button_container secondary">
              <button className="secondary">Contact sales</button>
              <ChevronRight className="chevron_right" />
              <ArrowForward className="arrow_forward" />
            </div>
          </div>
        </div>
        <div className="hero_image">
          <img src={heroImage} alt="hero_image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
