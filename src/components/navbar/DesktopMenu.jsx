import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavbarContext } from "../../context/NavbarContext";
import NavItem from "./NavItem";

const DesktopMenu = ({ activeSection }) => {
  const { navbarItems } = useContext(NavbarContext);

  return (
    <div className="hidden md:flex space-x-8 ">
      {navbarItems.map((navbarItem, index) => (
        <NavItem
          key={index}
          navbarItem={navbarItem}
          activeSection={activeSection}
        />
      ))}
    </div>
  );
};

export default DesktopMenu;
