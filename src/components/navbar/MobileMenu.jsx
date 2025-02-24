import React, { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavbarContext } from "../../context/NavbarContext";

const MobileMenu = () => {
  const { navbarItems } = useContext(NavbarContext);
  return (
    <div className="md:hidden py-4 space-y-4">
      {navbarItems.map((item, index) => (
        <ScrollLink
          key={index}
          to={item}
          smooth={true}
          duration={500}
          className="block hover:bg-gray-800 px-4 py-2 rounded-md 
                        cursor-pointer"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </ScrollLink>
      ))}
    </div>
  );
};

export default MobileMenu;
