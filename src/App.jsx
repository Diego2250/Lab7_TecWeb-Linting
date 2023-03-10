import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import './CheckItem.css'
import { Textdesc } from './Textdesc.jsx'
import { CheckItem } from './CheckItem'
import {InfoCards} from "./InfoCards.jsx";
import { Button } from './Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="logo">
            <img src={duckLogo} alt="DuckDuckGo logo" className="main_logo"/>
        </div>
        <Textdesc />
        <CheckItem />
        <Button className="blue" > Añadir DuckDuckGo a Chrome</Button>

        <InfoCards/>
    </div>
  )
}

export default App
