import React from 'react'

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
                    categories
                </div>
                <div className="some_categories">
                    <li><a href="#">Photography</a></li>
                    <li><a href="#">Illustration</a></li>
                    <li><a href="#">Graphic Design</a></li>
                    <li><a href="#">Web design</a></li>
                    <li><a href="#">Videography</a></li>
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