import React, {useEffect, useRef, useState} from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './About.scss'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'

export default function About() {

    const ref = useRef()
    const[reveal, setReveal] = useState(false)
    const onScreen = useOnScreen(ref)

    useEffect(() => {
        if (onScreen) {
            setReveal(onScreen)
        }
    }, [onScreen])

    useEffect(()=>{
        if (reveal) {
            const split = new SplitText("#headline", {
                type: 'lines',
            })
    
            gsap.to(split.lines, {
                duration: 1,
                y: -20,
                opacity: 1,
                stagger: 0.1,
                ease: "power2",
            })
        }
        
    }, [reveal])


    return (
        <section className={cn("about-section")}
        data-scroll-section>
            <SectionHeader title='about'/>
            <p ref={ref} id="headline" className={cn({'is-reveal': reveal})}>
                kocham wasza para i tak cie Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque illo incidunt a hic molestiae repellat maiores minus nesciunt est sequi voluptatum labore, possimus rem excepturi numquam, praesentium ducimus! Sunt, voluptates!</p>
        </section>
    )
}
