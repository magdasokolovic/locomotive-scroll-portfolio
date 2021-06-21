import React, { useEffect } from 'react'
import './Header.scss'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'


export default function Header() {
    useEffect(()=>{
        const split = new SplitText("#header-text", {
            type: 'lines',
            linesClass: "lineChildren",
        })

        const splitParent = new SplitText("#header-text", {
            type: 'lines',
            linesClass: "lineParent",
        })

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        })
    }, [])

    return (
        <section className="header-container"
        data-scroll-section>
            <h1 id="header-text">Rok po ślubie...</h1>
        </section>
    )
}