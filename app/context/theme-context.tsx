'use client'

import { createContext, useEffect, useState } from "react";

export type Theme = 'light' | 'dark';


export type ThemeContextType = {
    theme: Theme;
    handleTheme: () => void;
  };

  export const  ThemeContext = createContext<ThemeContextType | null>(null);


export default function ThemeContextProvider({
    children,
  }: any){
        const [theme, setTheam] = useState<Theme>('light');
    
        const handleTheme = () =>{
            if(theme === 'light'){
                setTheam('dark');
                localStorage.setItem('theme', 'dark');
                document.documentElement.classList.add('dark');
            }else{
                setTheam('light');
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark');
    
            }
        }
    
        useEffect (
            () => {
                  const localTheme = localStorage.getItem('theme') as Theme | null;
                  if(localTheme){
                    setTheam(localTheme);
                  }
                  if(localTheme === 'dark'){
                    document.documentElement.classList.add('dark');
    
                  }
            }, []
        )

        return (
            <ThemeContext.Provider
              value={{
                theme,
                handleTheme,
              }}
            >
              {children}
            </ThemeContext.Provider>
          );
}