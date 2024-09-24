"use client";

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { FaMoon, FaRegSun } from 'react-icons/fa';

const DarkmodeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted && (
        currentTheme === "dark" ? (
          <FaRegSun
            className="text-xl cursor-pointer hover:text-red-300"
            onClick={() => setTheme("light")}
          />
        ) : (
          <FaMoon
            className="text-xl cursor-pointer hover:text-red-300"
            onClick={() => setTheme("dark")}
          />
        )
      )}
    </div>
  );
};

export default DarkmodeSwitch;
