import React, { useContext, useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { NavbarContext } from "../../context/NavbarContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { navbarItems } = useContext(NavbarContext);

  // Function to track the active section based on scroll position
  const handleScroll = () => {
    let currentSection = "";

    navbarItems.forEach((section, index) => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();

      // We want to check if the section is in view or near the viewport's top
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-gray-50">
      {/* Navbar */}
      <nav className="bg-[#02474d] text-white fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-sm">
                RS
              </div>

              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-xl font-bold cursor-pointer"
              >
                RAJASHEKHAR SURAKANTI
              </ScrollLink>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-800 rounded-md"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <IoMdMenu className="h-6 w-6" />
              )}
            </button>

            <DesktopMenu activeSection={activeSection} />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && <MobileMenu />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
