import React from 'react'
import PropTypes from 'prop-types'


const ListItemA= ({
    theme,
    title,
    description ="No description ...",
    name,
    date
}) => {
    return (
        <div className="main__content-item">
            <div className="lifestyle">
                <div className="image">
                    <img src="images/lifestyle.png" alt="" />
                    <div>{theme}</div>
                </div>
                <div className="lifestyle__inner">
                    <div className="title">
                        {title}
                    </div>
                    <div className="border">
                        <div className="description">
                          {description}
                        </div>
                    </div>
                    <div className="autor">
                        <img src="images/author.png" alt="" />
                        <span className="info">
                            <div className="name">
                                {name}
                            </div>
                            <div className="date">
                                {date}
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

ListItemA.propTypes = {
    theme:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    name:PropTypes.string.isRequired,
    date:PropTypes.string
}


export default ListItemA