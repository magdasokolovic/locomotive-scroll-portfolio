import React from 'react'
import './Footer.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function Footer() {
    return (
        <section className="footer">
            <SectionHeader title="Made in"/>
            <h1 className="location" id="location-text">Berlin, Germany</h1>
        </section>
    )
}