import React from 'react'

import '../Header/header.css'

import Logo from './Logo/Logo'
const Header = () => {
    return (
        <div className="header" >
            <div className="header__top">
                <div className="container ">
                    <div className="header__social">
                        <a href="#" className="fb" />
                        <img src="" alt="" />
                        <a>
                            <a href="#" className="tw" />
                            <img src="" alt="" />
                            <a>
                                <a href="#" className="pin" />
                                <img src="" alt="" />
                            </a>
                            <a href="#" className="vk" />
                            <img src="" alt="" />
                        </a>
                        <a href="#" className="goog">
                            <img src="" alt="" />
                        </a>
                        <a href="#" className="be">
                            <img src="" alt="" />
                        </a>
                        <a href="#" className="pl">
                            <img src="" alt="" />
                        </a>
                        <a href="#" className="ins">
                            <img src="" alt="" />
                        </a>
                        <div className="right">
                            <button className="header__signin">
                                sign in
                        </button> |
                        <a className="language">
                                eng
                        </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header__content">
                <div className="container">
                    <div className="header__content-inner">
                        <Logo />

                        <nav className="navigation">
                            <ul className="snip">
                                <li><a href="/" data-hover="home">home</a></li>
                                <li><a href="/" data-hover="portfolio">portfolio</a></li>
                                <li><a href="/" data-hover="blog">blog</a></li>
                                <li><a href="/" data-hover="pages">pages</a></li>
                                <li><a href="/" data-hover="shop">shop</a></li>
                                <li><a href="/" data-hover="components">components</a></li>
                                <li><a href="/" data-hover="features">features</a></li>
                            </ul>
                        </nav>
                        <div className="other">
                            <div className="search__header">
                                <div className="wrap">
                                    <form>
                                        <input type="text" className="input" placeholder="" />
                                    </form>
                                    <i className="fa fa-search" aria-hidden="true" ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="slider-block">
                        <div className="slider__content">
                            <div className="slider__text1">
                                inspiration
                        </div>
                            <div className="slider__text2">
                                5 Ways milllennials can start
                                building their future today
                        </div>
                            <div className="slider__text3">
                                <button>read more</button>
                            </div>
                        </div>
                        <div><img src="" alt="" /></div>
                        <div><img src="" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Header