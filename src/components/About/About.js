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
            <SectionHeader title='pozdrowienia'/>
            <p ref={ref} id="headline" className={cn({'is-reveal': reveal})}>
                Najukochańsza moja paro Sokołowiczów. Przepraszam, że z opóźnieniem, ale lepiej później, niż nigdy. Serdecznie pozdrawiam was z pierwszą rocznicą ślubu. Życzę takich rocznic jak najwięcej, ponad 70 :) Kocham was bardzo, i niezmiernie się cieszę, że znaleźliście jeden drugiego. Życzę, abyście dawali jeden drugiemu jak najwięcej miłości, czułych słow, zrozumienia, i swobody dla swoich własnych przyjaciół i interesów!</p>
        </section>
    )
}
