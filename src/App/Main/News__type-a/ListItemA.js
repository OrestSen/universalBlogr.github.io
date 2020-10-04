import React from 'react'

const ListItemA= (props) => {
    return (
        <div className="main__content-item">
            <div className="lifestyle">
                <div className="image">
                    <img src="images/lifestyle.png" alt="" />
                    <div>{props.theme}</div>
                </div>
                <div className="lifestyle__inner">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="border">
                        <div className="description">
                          {props.description}
                        </div>
                    </div>
                    <div className="autor">
                        <img src="images/author.png" alt="" />
                        <span className="info">
                            <div className="name">
                                {props.name}
                            </div>
                            <div className="date">
                                {props.date}
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListItemA