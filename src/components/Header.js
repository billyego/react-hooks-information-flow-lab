
import React from "react";

export default function Header({isDarkMode,onDarkModeClick}){
    
  
    return(
        <div>
        <header>Shopster</header>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </div>
    )
}
