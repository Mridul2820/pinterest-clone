import React, { useEffect, useState } from 'react'
import GlobalStyle from './GlobalStyles'
import Header from './components/Header'
import MainBoard from './components/MainBoard'
import axios from 'axios'

const clientID = `?client_id=${process.env.REACT_APP_API_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

const App = () => {
    const [photos, setPhotos] = useState()
    let url;

    const getImages = async (search) => {
        if(search) {
            url = `${searchUrl}${clientID}&query=${search}&per_page=40`
        }
        else {
            url = `${mainUrl}${clientID}&per_page=40`
        }

        const results = await axios.get(url)
        if(search){
            setPhotos(results.data.results)
        }
        else {
            setPhotos(results.data)
        }
        console.log(results.data);
    }

    useEffect(() => {
        getImages()
        // eslint-disable-next-line
    }, [url])

    return (
        <div>
            <GlobalStyle />
            <Header onSubmit={getImages} />
            <MainBoard photos={photos} />
        </div>
    )
}

export default App
