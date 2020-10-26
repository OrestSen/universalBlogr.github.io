import React from 'react'

const Menu = () => {
    return (
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
    )
}

export default Menu