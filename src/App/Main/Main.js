import React from 'react'

import ListA from './News__type-a/ListA'
import ListB from './News__type-b/ListB'
import ListC from './News__type-c/ListC'
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
                            <ListC />
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