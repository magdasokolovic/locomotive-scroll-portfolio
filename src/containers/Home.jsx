import React, {useRef, useState, useEffect} from 'react'
import About from '../components/About/About'
import Featured from '../components/Featured/Featured'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'
// import SecondGallery from '../components/SecondGallery/SecondGallery'
import useLocoScroll from '../hooks/useLocoScroll'

const Home = () => {
    const [preloader, setPreloader] = useState(true);

    useLocoScroll(!preloader);

    const [timer, setTimer] = useState(1)

    const id = useRef(null)

    const clear = () => {
        window.clearInterval(id.current);
        setPreloader(false)
    }

    useEffect(() => {
        id.current = window.setInterval(()=>{
            setTimer((timer)=>timer - 1)
        }, 1000)
    }, [])

    //when the timer changes: 
    useEffect(() => {
        if (timer === 0) {
            clear()
        }
    }, [timer])

    return (
        <>
        {preloader ? (
            <div className="loader-wrapper absolute">
                  <h1>pozdrawiam was, kochani</h1>  
                  <h2>Soleczniki &#9829; </h2>
            </div>
            )
        :
            ( <div className="main-container" id="main-container"
            data-scroll-container
           >
                <Navbar/>
                <Header/>
                <Featured/>
                <About/>
                <Gallery/>
                <Footer/>
                {/* <SecondGallery/> */}
            </div> )
        }
            
        </>
    )
}

export default Home
