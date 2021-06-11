import React from 'react'
import './Featured.scss'

import image1 from './featured-images/gallery-4.webp'
import image2 from './featured-images/gallery-5.webp'

export default function Featured() {


    return (
        <section className="featured-section"
         data-scroll-section
        >

            <div className="featured-row-layout">
                <h6>love is..</h6>
                <img alt="wedding couple" src={image1}/>
            </div>

            <div className="featured-column-layout">
                <h6>..in the air</h6>
                <img alt="wedding couple" src={image2}/>
            </div>

        </section>
    )
}
