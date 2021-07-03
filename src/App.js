import React from 'react'
import GlobalStyle from './GlobalStyles'
import Header from './components/Header'
import MainBoard from './components/MainBoard'

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <MainBoard />
        </div>
    )
}

export default App
