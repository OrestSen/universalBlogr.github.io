import React from 'react'

import '../common/normalize.css'
import '../common/reset.css'
import '../common/fonts.css'
import '../common/style.css'
import '../common/media.css'

import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  )
}

export default App;
