"use client";

import React from "react";
import { ThemeProvider } from "next-themes";


const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="dark:text-white dark:bg-gray-700 min-h-screen select-none transition-colors duration-900 bg-gray-200 text-gray-800">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
