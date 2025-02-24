import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavItem = ({ navbarItem, activeSection }) => {
  return (
    <ScrollLink
      to={navbarItem}
      smooth={true}
      duration={500}
      className={`${
        activeSection === navbarItem ? "bg-gray-800" : ""
      } hover:text-gray-300 transition-colors cursor-pointer px-4 py-2 rounded-md`}
    >
      {navbarItem.charAt(0).toUpperCase() + navbarItem.slice(1)}
    </ScrollLink>
  );
};

export default NavItem;
