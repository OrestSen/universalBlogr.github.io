import React from 'react'

import Logo from './Logo/Logo'
import '../Header/header.css'
import Social from '../Header/Social/Social'
import Menu from '../Header/Menu/Menu'
import Slider from '../Header/Slider/Slider'
import Search from '../Header/Search/Search'
import Main from '../Main/Main'



const Header = () => {
    return (
        <div className="header" >
            <div className="header__top">
                <div className="container ">
                    <Social />
                </div>
            </div>
            <div className="header__content">
                <div className="container">
                    <div className="header__content-inner">
                        <Logo />
                        <Menu />
                        <Search />
                    </div>
                </div>
                <div className="container">
                    <div className="slider-block">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header