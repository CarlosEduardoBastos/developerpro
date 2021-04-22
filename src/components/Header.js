import React from 'react'
import { HeaderConteiner } from './styles/Header.styles'

const Header = () => {
    return (
        <HeaderConteiner>
            <section>
                <a href="/" className="logo">Logo</a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </section>
        </HeaderConteiner>
    )
}

export default Header
