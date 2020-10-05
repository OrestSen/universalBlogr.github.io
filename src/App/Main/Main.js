import React from 'react'

import ListA from './News__type-a/ListA'
import ListB from './News__type-b/ListB'
import NewsTypeC from './News__type-c/NewsTypeC'
import '../Main/media.css'
import MainServices from './Main__services/MainServices'


const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="main__content-inner">
                        <div>
                            <ListA />    
                        </div>
                        <div>
                            <ListB />
                        </div>
                        <div>
                            <NewsTypeC />
                        </div>
                    </div>
                    <div>
                        <MainServices />
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main 