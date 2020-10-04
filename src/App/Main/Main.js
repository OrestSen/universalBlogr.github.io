import React from 'react'

import NewsTypeA from './News__type-a/NewsTypeA'
import NewsTypeB from './News__type-b/NewsTypeB'
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
                            <NewsTypeA />
                        </div>
                        <div>
                            <NewsTypeB />
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