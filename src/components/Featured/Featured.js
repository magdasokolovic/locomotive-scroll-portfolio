import React from "react"
import "./Featured.scss"

import image1 from "./featured-images/image-1.webp"
import image2 from "./featured-images/image-2.webp"

export default function Featured() {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>
          love is <em>wciąż</em>..
        </h6>
        <img alt="wedding couple" src={image1} data-scroll />
      </div>

      <div className="featured-column-layout">
        <h6>..in the air</h6>
        <img alt="wedding couple" src={image2} data-scroll />
      </div>
    </section>
  )
}
