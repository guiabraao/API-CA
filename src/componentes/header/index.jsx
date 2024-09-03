import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from '../header/Header.module.css'
import image from '../header/images/logocopaamerica.png'
import iconMenu from '../header/images/icon-menu.svg'
import iconClose from '../header/images/icon-close.svg'

function Header() {

    const navRef = useRef()

    const changeMenu = () => {
        navRef.current.classList.toggle(styles.menuAberto)
    }

    return (
        <>            
            <header>
                <img src={image}></img>
                <button onClick={changeMenu}><img src={iconMenu}></img></button>
                <nav ref={navRef}>
                    <button onClick={changeMenu}><img src={iconClose}></img></button>
                    <Link to="/" onClick={changeMenu}>Fase de Grupos</Link>
                    <Link to="/quartas" onClick={changeMenu}>Quartas-Final</Link>
                    <Link to="/semi" onClick={changeMenu}>Semi-Final</Link>
                    <Link to="/final" onClick={changeMenu}>Final</Link>
                </nav>
            </header>
        </>
    )
}

export default Header