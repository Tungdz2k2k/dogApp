import {createContext, useState} from "react";

const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [data, setData] = useState();


    const value = {
        data,

    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}