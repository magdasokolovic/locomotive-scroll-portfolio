import { useEffect } from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger)

export default function useLocoScroll(start) {
    useEffect(() => {
        if (!start) return;
        let locoScroll = null;
        
        const scrollEl = document.querySelector('#main-container')
        
        locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            //when the element gets into the viewport:
            class: 'is-reveal',
        })

        locoScroll.on('scroll', ()=>{
            ScrollTrigger.update();
        })

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value){
                if (locoScroll) {
                    return arguments.length 
                    ? locoScroll.scrollTo(value, 0, 0) 
                    : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            scrollLeft(value) {
                if (locoScroll) {
                    return arguments.length 
                    ? locoScroll.scrollTo(value, 0, 0) 
                    : locoScroll.scroll.instance.scroll.x;
                }
                return null;
            }
        })

        const lsUpdate = ()=>{
            if (locoScroll) {
                locoScroll.update()
            }
        }
        
        ScrollTrigger.addEventListener('refresh', lsUpdate)
        ScrollTrigger.refresh()

        return ()=>{
            if (locoScroll) {
                ScrollTrigger.removeEventListener('refresh', lsUpdate)
                locoScroll.destroy()
                locoScroll = null;
            }
        }

    }, [start])
}