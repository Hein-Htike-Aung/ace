// ThemeContext.js
"use client";
import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }: {
    children: React.ReactNode
}) => {
  const [theme, setTheme] = useState("light" );
  useEffect(() => {
    const defaultTheme = localStorage.getItem("theme");
    setTheme(defaultTheme ? defaultTheme : "light")
  }, [])
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
