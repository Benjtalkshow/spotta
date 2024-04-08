
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    const localStoragSetTheme = localStorage.getItem('theme')
    return localStoragSetTheme ? localStoragSetTheme:'light'
  });


  useEffect(()=>{
      localStorage.setItem('theme', theme);
  }, [theme])
  


  const toggleTheme = (theme) => {
    setTheme(theme);
  };



  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
