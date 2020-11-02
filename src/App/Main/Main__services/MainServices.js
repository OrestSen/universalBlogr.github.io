import React from 'react'
import { Link } from 'react-router-dom'


const MainServices = () => {
    return (
        <div className="main__services">
            <div className="search_services">
                <form action="">
                    <input type="text" placeholder="Search" />
                    <input type="submit" value="" />
                </form>
            </div>
            <div className="categories">
                <div className="title_categories">
                    <Link to="/">categories</Link>
                </div>
                <div className="some_categories">
                    <li>
                        <Link to="/photography">Photography</Link>
                    </li>
                    <li>
                        <Link to="/lifestyle">Lifestyle</Link>
                    </li>
                    <li>
                        <Link to="/inspiration">Inspiration</Link>
                    </li>
                    <li>
                        <Link href="/web">Web design</Link>
                    </li>
                    <li>
                        <Link href="/trip">Trip</Link>
                    </li>
                </div>
            </div>
            <div className="subcribe">
                <div className="title_subcribe">
                    subcribe
                </div>
                <div className="subcribe_input">
                    Name
                    <input type="text" placeholder="Name" name="asdasd" />
                                                    Email
                    <input type="text" placeholder="email@adress.com" />
                    <input type="submit" placeholder="subcribe" className="btn_subcribe" />
                </div>
            </div>
        </div>
    )
}
export default MainServices