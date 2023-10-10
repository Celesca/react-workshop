import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Content = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <main className={theme}>
            <div>
                <h1>Sawit Koseeyaumporn</h1>
                <p>Port Folio</p>
            </div>
            <img src={theme==="dark" ? dark : light} alt="Logo"/>
        </main>
    )
}

export default Content;