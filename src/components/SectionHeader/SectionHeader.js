import React from 'react'
import './SectionHeader.scss'
export default function SectionHeader({title}) {
    return (
        <h6 className="section-header">
            {title}
        </h6>
    )
}
