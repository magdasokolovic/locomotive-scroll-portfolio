import React, { useRef, useEffect} from 'react'
import './SecondGallery.scss';
import {imageData} from './SecondGalleryData'
import SecondGalleryItem from './SecondGalleryItem'
import LocomotiveScroll from 'locomotive-scroll'

const SecondGallery = () => {

    const ref = useRef(null)

    useEffect(() => {
        if (ref) {
            new LocomotiveScroll({
                el: ref.current,
                smooth: true,
                direction: 'horizontal'
            })
        }
    }, [])

    const images = imageData.map((tupples, index) => 
        tupples.map((url, elementIndex)=>
        <SecondGalleryItem src={url} key={url} index={elementIndex}
        columnOffset={index*14}/>)
    )

    return (
            <div className="main-container">
                <div className="scroll-container" data-scroll-section ref={ref}>
                    
                    <div className="content">
                        <div className="gallery">
                            {images}
                            {/* <div className="gallery-helper" data-scroll data-scroll-speed={-1}>
                                Keep scrolling
                            </div> */}
                            <div className="behind-text fill" data-scroll data-scroll-speed={-1}>
                                nežinau ką čią parašyti...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SecondGallery