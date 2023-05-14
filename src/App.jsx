import React from 'react'
import Logo from './Logo'
import './App.css'
import './CheckItem.css'
import { Textdesc, Textdescparagraph } from './Textdesc'
import CheckItem from './CheckItem'
import InfoCards from './InfoCards'
import Button from './Button'
import Input from './Input'
import './fondo.css'

function App() {
    return (
        <div className="App">
            <div className="fondoup">
                <div className="header-container">
                    <div className="header-icons">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="header-icon"
                        >
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
                        </svg>
                    </div>
                </div>
                <Logo />
                <Input />
                <Textdesc className="textdesc">
                    ¿Cansado de que te rastreen? Podemos ayudarte.
                </Textdesc>
                <Textdescparagraph className="textdesc-paragraph">
                    Consigue protección continua y gratuita para tu privacidad
                    en el navegador con una descarga:
                </Textdescparagraph>
                <CheckItem />
                <Button className="blue">Añadir DuckDuckGo a Chrome</Button>
                <Textdescparagraph className="textdescpar">
                    ¡Con la confianza de decenas de millones de personas en todo
                    el mundo!
                </Textdescparagraph>
                <Textdescparagraph className="textdescpar-bold">
                    Protección de la Privacidad para Cualquier Dispositivo
                </Textdescparagraph>
                <div className="container-items">
                    <InfoCards />
                    <svg
                        className="curva"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1438 134"
                    >
                        <path
                            d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
            <div className="fondodown">
                <div className="down-container">
                    <Textdesc className="textdesc">
                        No guardamos tu información <br /> personal. Y nunca lo
                        haremos.
                    </Textdesc>
                    <Textdescparagraph className="textdesc">
                        Nuestra política de privacidad es simple: No colectamos{' '}
                        <br /> o compartimos ninguna información personal tuya.
                    </Textdescparagraph>
                    <Button className="green">Instalar DuckDuckGo</Button>
                </div>
                <div className="monster-container">
                    <img
                        src="https://duckduckgo.com/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg"
                        alt="monster"
                        className="monster"
                    />
                </div>
            </div>
        </div>
    )
}

export default App
