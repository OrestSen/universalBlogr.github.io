import React from 'react'

import ListA from './News__type-a/ListA'
import ListB from './News__type-b/ListB'
import ListC from './News__type-c/ListC'
import '../Main/media.css'
import MainServices from './Main__services/MainServices'
import { Route } from 'react-router-dom'
import CategoryInspirationA from './News__type-a/CategoryA/CategoryInspirationA'
import CategoryInspirationB from './News__type-b/CategoryB/CategoryInspirationB'
import CategoryInspirationC from './News__type-c/CategoryC/CategoryInspirationC'
import CategoryLifestyleA from './News__type-a/CategoryA/CategoryLifestyleA'
import CategoryLifestyleB from './News__type-b/CategoryB/CategoryLifestyleB'
import CategoryLifestyleC from './News__type-c/CategoryC/CategoryLifestyleC'
import CategoryPhotorgraphyA from './News__type-a/CategoryA/CategoryPhotographyA'
import CategoryPhotographyB from './News__type-b/CategoryB/CategoryPhotographyB'
import CategoryPhotographyC from './News__type-c/CategoryC/CategoryPhotographyC'

const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <div className="main__content-inner">
                        <div>
                            <Route path="/" exact render={() => (
                                <ListA />
                            )} />
                            <Route path="/photography" component={CategoryPhotorgraphyA}></Route>
                            <Route path="/inspiration" component={CategoryInspirationA}></Route>
                            <Route path="/lifestyle" component={CategoryLifestyleA} ></Route>
                        </div>
                        <div>
                            <Route path="/" exact render={() => (
                                <ListB />
                            )} />
                            <Route path="/photography" component={CategoryPhotographyB}></Route>
                            <Route path="/inspiration" component={CategoryInspirationB} ></Route>
                            <Route path="/lifestyle" component={CategoryLifestyleB} ></Route>
                        </div>
                        <div>
                            <Route path="/" exact render={() => (
                                <ListC />
                            )} />
                            <Route path="/photography" component={CategoryPhotographyC}></Route>
                            <Route path="/inspiration" component={CategoryInspirationC} ></Route>
                            <Route path="/lifestyle" component={CategoryLifestyleC} ></Route>
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