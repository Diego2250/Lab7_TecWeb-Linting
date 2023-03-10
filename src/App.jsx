import { useState } from 'react'
import duckLogo from './Logo.jsx'
import './Textdesc.jsx'
import './App.css'
import './CheckItem.css'
import { Textdesc } from './Textdesc.jsx'
import { CheckItem } from './CheckItem'
import {InfoCards} from "./InfoCards.jsx";
import { Button } from './Button.jsx'
import { Input } from './Input.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className="logo">
            <img src={duckLogo} alt="DuckDuckGo logo" className="main_logo"/>
        </div>
        <Input />
        <Textdesc />
        <CheckItem />
        <Button className="blue" > Añadir DuckDuckGo a Chrome</Button>
        <Button className="green">Instalar DuckDuckGo </Button>

        <InfoCards/>
    </div>
  )
}

export default App
