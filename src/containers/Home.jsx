import React from 'react'
import About from '../components/About/About'
import Featured from '../components/Featured/Featured'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <div className="main-container" id="main-container">
                <Navbar/>
                <Header/>
                <Featured/>
                <About/>
                <Gallery/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
