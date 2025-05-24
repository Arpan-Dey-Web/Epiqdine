import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    const html = document.querySelector("html");
    html.dataset.theme = mode;
  }, [mode]);
  const  changeTheme =()=> {

    setMode((prevTheme) => {
      if (prevTheme == "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  
  }

  const themecontext = {
    changeTheme,
  };
  return <ThemeContext value={themecontext}>{children}</ThemeContext>;
};

export default ThemeProvider;
