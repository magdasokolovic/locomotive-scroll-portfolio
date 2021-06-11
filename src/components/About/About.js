import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './About.scss'

export default function About() {
    return (
        <section className="about-section"
        data-scroll-section>
            <SectionHeader title='about'/>
            <p>kocham wasza para i tak cie Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque illo incidunt a hic molestiae repellat maiores minus nesciunt est sequi voluptatum labore, possimus rem excepturi numquam, praesentium ducimus! Sunt, voluptates!</p>
        </section>
    )
}
