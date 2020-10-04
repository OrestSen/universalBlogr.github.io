import React from 'react'
import ListItemA from './ListItemA'

const NewsListA = () => {
    return (
        <div className="news__type-a">
        
                <ListItemA
                    theme="INSPIRATION"
                    title="4 Natural Ways To Have Young Skin"
                    description=" Lorem ipsum dolor sit amet, to consectetur adipi scing elit. Nulla vehicula
                            lorem
                            and
                            lacus. Vestibulum vitae mauris lorem ipsum doar."
                    name="James Leman"
                    date="April 28, 2016"
                />
                <ListItemA
                    theme="LIFESTYLE"
                    title="4 Natural Ways To Have Young Skin"
                    description=" Lorem ipsum dolor sit amet, to consectetur adipi scing elit. Nulla vehicula
                            lorem
                            and
                            lacus. Vestibulum vitae mauris lorem ipsum doar."
                    name="Benjamin Miller"
                    date="December 28, 2017"
                />
                <ListItemA
                    theme="LIFESTYLE"
                    title="4 Natural Ways To Have Young Skin"
                    description=" Lorem ipsum dolor sit amet, to consectetur adipi scing elit. Nulla vehicula
                            lorem
                            and
                            lacus. Vestibulum vitae mauris lorem ipsum doar."
                    name="Benjamin Miller"
                    date="October 6, 2016"
                />
            <div className="main__content-item">
                <div className="lifestyle">
                    <div className="image">
                        <img src="images/Layer 47.png" alt="" />
                        <div>LIFESTYLE</div>
                    </div>
                    <div className="lifestyle__inner">
                        <div className="title">
                            4 Natural Ways To Have Young Skin
                        </div>
                        <div className="border">
                            <div className="description">
                                Lorem ipsum dolor sit amet, to consectetur adipi scing elit. Nulla
                                vehicula
                                lorem
                                and
                                lacus. Vestibulum vitae mauris lorem ipsum doar.
                            </div>
                        </div>
                        <div className="autor">
                            <img src="images/author1.png" alt="" />
                            <span className="info">
                                <div className="name">
                                    James Leman
                                </div>
                                <div className="date">
                                    April 28, 2016
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__content-item">
                <div className="lifestyle">
                    <div className="image">
                        <img src="images/Layer 48.png" alt="" />
                        <div>LIFESTYLE</div>
                    </div>
                    <div className="lifestyle__inner">
                        <div className="title">
                            4 Natural Ways To Have Young Skin
                        </div>
                        <div className="border">
                            <div className="description">
                                Lorem ipsum dolor sit amet, to consectetur adipi scing elit. Nulla
                                vehicula
                                lorem
                                and
                                lacus. Vestibulum vitae mauris lorem ipsum doar.
                            </div>
                        </div>
                        <div className="autor">
                            <img src="images/author1.png" alt="" />
                            <span className="info">
                                <div className="name">
                                    James Leman
                                </div>
                                <div className="date">
                                    April 28, 2016
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsListA