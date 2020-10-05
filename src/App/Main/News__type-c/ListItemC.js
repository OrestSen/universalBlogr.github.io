import React from 'react'
import PropTypes from 'prop-types'


const ListItemC = ({
    theme,
    title,
    description,
    name,
    date,
    image,
    author,
}) => {
    return (
        <div className="main__content-item">
            <div className="lifestyle__type-3">
                <div className="image">
                    <img src={image} alt="" />
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
                    <div className="autorv">
                        <img src={author} alt="" />
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

ListItemC.propTypes = {
    theme:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    name:PropTypes.string.isRequired,
    date:PropTypes.string
}
export default ListItemC