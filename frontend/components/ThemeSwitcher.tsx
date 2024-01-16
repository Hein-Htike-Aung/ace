"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"



type Theme = "light" | "dark" | "system"
 function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const [mode, setMode] = React.useState<Theme>("light");
  React.useEffect(() => {
    const defaultTheme = localStorage.getItem("theme");
    setTheme(defaultTheme ? defaultTheme : "light");
  }, []);

  const clickHandler = () => {
    if(mode == "light") {
        setMode("dark");
        setTheme("dark");
        localStorage.setItem("theme", "dark")
    } else {
        setMode("light");
        setTheme("light");
        localStorage.setItem("theme", "light")
    }
  }

  return (
    
        <button  onClick={clickHandler} className="p-2 rounded-full">
            {(mode == "light") ? 
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
        :

          <Moon className="h-[1.2rem] w-[1.2rem] dark:text-white  transition-all dark:rotate-0 " />
        }
          
          <span className="sr-only">Toggle theme</span>
        </button>
     
  )
}

export default React.memo(ThemeSwitcher)