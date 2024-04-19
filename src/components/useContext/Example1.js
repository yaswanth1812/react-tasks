import React, { createContext } from 'react'
import { useContext } from 'react';

const ThemeContext = createContext();

const Example1 = () => {
  return (
    <ThemeContext.Provider value="dark">
        <Toolbar />
    </ThemeContext.Provider>
  );
};

const Toolbar = () =>{
    const theme = useContext(ThemeContext);
    return <div>
        Current Theme: {theme}
    </div>
}

export default Example1
