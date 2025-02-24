import { createContext } from "react";
import navbarItems from "../assets/navbarItems.json";

export const NavbarContext = createContext();

const NavbarContextProvider = (props) => {
  const value = {
    navbarItems,
  };

  return (
    <NavbarContext.Provider value={value}>
      {props.children}
    </NavbarContext.Provider>
  );
};
export default NavbarContextProvider;
