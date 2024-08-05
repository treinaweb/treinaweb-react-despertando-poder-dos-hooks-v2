import { createContext, useState } from "react"

export const themes = {
  light: 'light',
  dark: 'black'
}

export const ThemeContext = createContext(themes.light);

export default function ThemeProvider(props) {
  const [val, setVal] = useState(themes.light);

  function toggle(){
    setVal(val === themes.light ? themes.dark : themes.light);
  }

  return (
    <ThemeContext.Provider value={{value: val, toggle}}>
      {props.children}
    </ThemeContext.Provider>
  )
}