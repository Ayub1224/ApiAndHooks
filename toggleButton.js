import React, { useContext } from 'react'
import { ThemeContext, ThemetoggleUpdate } from './App'
import './Style.css'

export default function FUnctConstCompt({ children }) {
    const Theme = useContext(ThemeContext)
    const UpdateTheme = useContext(ThemetoggleUpdate)

    const ThemeStyle = {
        backgroundColor: Theme ? '#333' : '#ccc',
        color: Theme ? '#ccc' : "#333",
        width: "100%",
        height: "100%",
        margin: "Audio",
        padding: "2rem",
        margin: "2rem"
    }
    return (<>
        <button className="btn1" onClick={UpdateTheme}>Theme</button>
        <div style={ThemeStyle}> {children}</div>

    </>)
}
