import React, { useState } from 'react'
import './Gallery.scss'
// import image1 from './images/gallery-1.webp'
// import image2 from './images/gallery-2.webp'
// import image3 from './images/gallery-3.webp'
// import image4 from './images/gallery-4.webp'
// import image5 from './images/gallery-5.webp'

const images = [
    {
    // src: image1,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "wedding day",
    subtitle: "Karina and Tom's wedding",
    category: "professional Ana Rosso images"},
    {
    // src: image2,
     src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "wedding day",
    subtitle: "Karina and Tom's wedding",
    category: "professional Ana Rosso images"},
    {
    // src: image3,
        src:  "https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "wedding day",
    subtitle: "Karina and Tom's wedding",
    category: "professional Ana Rosso images"},
    {
     // src: image4,
    src:  "https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "wedding day",
    subtitle: "Karina and Tom's wedding",
    category: "professional Ana Rosso images"},
    {
    // src: image5,
    src:  "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "wedding day",
    subtitle: "Karina and Tom's wedding",
    category: "professional Ana Rosso images"},

]
function GalleryItem({src, category, subtitle, title, updateActiveImage, index}) {
    return (
        <div className="gallery-item-wrapper">
            <div></div>
                <div className="gallery-item">
                    <div className="gallery-item-info">
                        <h1 className="gallery-info-title">{title}</h1>
                        <h6 className="gallery-info-subtitle">{subtitle}</h6>
                        <p className="gallery-info-category">{category}</p>
                    </div>
                    <div className="gallery-item-image"
                        style={{backgroundImage: `url(${src})`}}>
                    </div>
                </div>
            <div></div>
        </div>
    )
}

export default function Gallery({src, index}) {
    const [activeImage, setActiveImage] = useState(1)


    return (
        <section className="section-wrapper gallery-wrap">
            <div className="gallery">
                <div className="gallery-counter">
                    <span>{activeImage}</span>
                    <span className="divider"></span>
                    <span>{images.length}</span>

                </div>

                {images.map((image, index)=>(
                    <GalleryItem
                        key={src}
                        index={index}
                        {...image}
                        updateActiveImage={(index)=>setActiveImage(index+1)}
                    />
                    ))}
            </div>
        </section>
    )
}