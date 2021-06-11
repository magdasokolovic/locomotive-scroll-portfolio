import { useEffect } from "react";
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll(start) {
    useEffect(() => {
        if (!start) return;
        const scrollEl = document.querySelector('#main-container')
        
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            //when the element gets into the viewport:
            class: 'is-reveal'
        })
    }, [start])
}