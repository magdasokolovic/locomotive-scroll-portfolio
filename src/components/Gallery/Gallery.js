import React, { useEffect, useRef, useState } from 'react'
import './Gallery.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import cn from 'classnames'
import useOnScreen from '../../hooks/useOnScreen'
import './Gallery.scss'

import image1 from './images/gallery-1.webp'
import image2 from './images/gallery-2.webp'
import image3 from './images/gallery-3.webp'
import image4 from './images/gallery-4.webp'
import image5 from './images/gallery-5.webp'

const images = [
    {
    src: image1,
    title: "Nie przestawajcie",
    subtitle: " bawić się i mieć FUN",
    category: "(photo by Ana Rosso)"},
    {
    src: image2,
    title: "...tymbardziej, gdy",
    subtitle: "jesteście we dwójkę",
    category: "(photo by Ana Rosso)"},
    {
    src: image3,
    title: "Życzę też powiększenia rodziny,",
    subtitle: "nieważne, w jakim znaczeniu :)",
    category: "(photo by Ana Rosso)"},
    {
     src: image4,
    title: "Aby najbliźsi przyjaciele",
    subtitle: "was zawsze rozśmieszali",
    category: "(photo by Ana Rosso)"},
    {
    src: image5,
    title: "...i zawsze byli obok was.",
    subtitle: "Jestem zawsze myślami w wami. Kocham. Magda",
    category: "(photo by Ana Rosso)"},

]

function GalleryItem({src, category, subtitle, title, updateActiveImage, index}) {

    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);
    useEffect(()=>{
        if (onScreen) {
            updateActiveImage(index)
        }
    }, [onScreen, index])

    return (
        <div className={cn("gallery-item-wrapper", {'is-reveal': onScreen})} ref={ref}>
            <div></div>

                <div className="gallery-item">
                    <div className="gallery-item-info">
                        <h1 className="gallery-info-title">{title}</h1>
                        <h6 className="gallery-info-subtitle">{subtitle}</h6>
                        <p className="gallery-info-category">{category}</p>
                    </div>

                    <div className="gallery-item-image"
                        style={{ backgroundImage: `url(${src})` }}>
                    </div>
                </div>
                
            <div></div>
        </div>
    )
}

export default function Gallery({src, index}) {
    const [activeImage, setActiveImage] = useState(1)
    const ref = useRef(null)

    useEffect(()=>{
        setTimeout(()=>{
            let sections = gsap.utils.toArray('.gallery-item-wrapper');

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1), 
                ease: 'none',
                scrollTrigger: {
                    start: 'top top',
                    trigger: ref.current,
                    scroller: "#main-container",
                    pin: true,
                    scrub: 0.5,
                    span: 1/(sections.length - 1),
                    end: ()=>`+=${ref.current.offsetWidth}`,
                }
            })
    
            ScrollTrigger.refresh()
        })
       
    }, [])

    const handleUpdateActiveImage = (index) => {
        setActiveImage(index+1)
    }
    return (
        <section data-scroll-section className="section-wrapper gallery-wrap">
            <div className="gallery" ref={ref}>

                <div className="gallery-counter">
                    <span>{activeImage}</span>
                    <span className="divider"/>
                    <span>{images.length}</span>
                </div>

                {images.map((image, index)=>(
                    <GalleryItem
                        key={src}
                        index={index}
                        {...image}
                        updateActiveImage={handleUpdateActiveImage}
                    />
                    ))}
            </div>
        </section>
    )
}