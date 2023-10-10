import Switch from "react-switch"
import { useContext } from "react"
import { ThemeContext } from "../App"


const Title =() => {
    const {theme,setTheme} = useContext(ThemeContext)
    const toggleSwitch = (checked) => {
        setTheme (
            theme === "light" ? "dark" : "light"
            // Tenary Operator ถ้าเป็น light ให้เปลี่ยนเป็น dark
        )
    }
    
    return (
        <header className={theme}>
            <span>Mode [{theme}]</span>
            <Switch
                onChange = {toggleSwitch}
                checked = {theme === "dark"}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor={'#ffa500'}
            />
        </header>
    )
}

export default Title;