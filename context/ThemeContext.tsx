"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}  

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const getInitialTheme = () => {
        return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches? "dark" : "light");
    }
    
    const [theme, setTheme] = useState<string>(getInitialTheme);

    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};