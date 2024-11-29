'use client'

import React, { useContext, useEffect, useState } from 'react';
import { BsMoon, BsSun } from "react-icons/bs";
import { Theme, ThemeContext, ThemeContextType } from '../context/theme-context';


function TheamSwitch() {
    const {theme, handleTheme}:any = useContext(ThemeContext);
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-50 shadow-2xl rounded-full 
    flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950' onClick={handleTheme }>
         {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default TheamSwitch