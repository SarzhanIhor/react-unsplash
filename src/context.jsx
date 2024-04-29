import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext()

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia("prefers-color-scheme: dark").matches
    const storedDarkMode = localStorage.getItem("darkTheme") === "true"
    if (storedDarkMode === null) {
        return prefersDarkMode
    }

    return storedDarkMode || prefersDarkMode
}

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme)

        // const body = document.querySelector("body")
        // body.classList.toggle("dark-theme", !isDarkTheme)
        // альтернатива
        // document.body.classList.toggle("dark-theme", !isDarkTheme)
        localStorage.setItem("darkTheme", !isDarkTheme)
    }

    useEffect(() =>{
        document.body.classList.toggle("dark-theme", isDarkTheme)
    }, [isDarkTheme])

    return <AppContext.Provider value={{isDarkTheme, toggleDarkTheme}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)