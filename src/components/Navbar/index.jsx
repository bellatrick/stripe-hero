import {
  ChevronRight,
  ArrowForward,
  Menu,
  CloseOutlined,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import "./navbar.css";
import { tooltipClasses } from "@mui/material/Tooltip";
import ProductMenu from "../ProductMenu";
import Solution from "../SolutionMenu";
import DocMenu from "./Doc";
import Resources from "../SolutionMenu/Resources";
import {
  businessMenuList,
  financialServiceMenuList,
  integrations,
  integrations2,
  paymentMenuList,
  useCasesMenu,
  useCasesMenu2,
} from "../../data";
import ProductItem from "../ProductMenu/ProductItem";
import SolutionItem from "../SolutionMenu/SolutionItem";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip arrow {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: 11,
      maxWidth: "none",
      boxShadow: theme.shadows[1],
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: "#fff",
    },
  }));
  return (
    <div className="container navbar">
      <div className="logo">stripe</div>
      <div className="nav">
        <LightTooltip
          title={<ProductMenu />}
          className="nav_item"
          placement="bottom"
        >
          <p>Products</p>
        </LightTooltip>
        <LightTooltip title={<Solution />} className="nav_item">
          <p>Solutions</p>
        </LightTooltip>
        <LightTooltip title={<DocMenu />} className="nav_item">
          <p>Developers</p>
        </LightTooltip>
        <LightTooltip title={<Resources />} className="nav_item">
          <p>Resources</p>
        </LightTooltip>
        <div className="nav_item">
          <p>Pricing</p>
        </div>
      </div>
      <div className="nav_button">
        <button>Dashboard</button>
        <ChevronRight className="chevron_right" />
        <ArrowForward className="arrow_forward" />
      </div>
      <div className="menu_container">
        <button onClick={() => setOpenMenu(true)}>
          <Menu />
        </button>
      </div>
      <div className={`${openMenu ?'open':'close'} mobile_menu`}>
        <div className="product_mobile">
          <div className="product_header">
            <h4>PRODUCTS</h4>
            <div onClick={() => setOpenMenu(false)}>
              <CloseOutlined />
            </div>
          </div>

          <div className="product_grid">
            {[
              ...businessMenuList,
              ...financialServiceMenuList,
              ...paymentMenuList,
            ].map(({ icon, title }) => (
              <ProductItem icon={icon} title={title} />
            ))}
          </div>
          <div className="product_header">
            <h4>SOLUTIONS</h4>
          </div>
          <div className="product_grid">
            {[
              ...useCasesMenu2,
              ...useCasesMenu,
              ...integrations,
              ...integrations2,
            ].map(({ icon, title }) => (
              <SolutionItem icon={icon} title={title} />
            ))}
          </div>
          <div className="product_header">
            <h4>RESOURCES</h4>
          </div>
          <div className="product_grid">
            {[
              ...integrations,
              ...useCasesMenu2,
              ...useCasesMenu,
              ...integrations2,
            ].map(({ icon, title }) => (
              <SolutionItem icon={icon} title={title} />
            ))}
          </div>
          <div className="bottom_button">
            <div className="button_container">
              <button>Dashboard</button>
              <ChevronRight className="chevron_right" />
              <ArrowForward className="arrow_forward" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
