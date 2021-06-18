import React, {useRef} from 'react'
import { points } from './SecondGalleryData';
import cn from 'classnames'
import useOnScreen from '../../hooks/useOnScreen'

export default function SecondGalleryItem({src, index, columnOffset}) {
    const ref = useRef(null)
    const onScreen = useOnScreen(ref)

    const values = points[index];
    if (!values) return null;
    //DESTRUCTURING grid area coordinates:
    const [row, column, spanRow, spanColumn] = values;

    const getScrollIndex = () => {
        if (index === 1 || index === 4) return -1;
        if (index === 0 || index === 3) return 0;
        return 1;
    }

    return (
        <div className="gallery-item"
        data-scroll
        data-scroll-speed={getScrollIndex()}
            style={{
                gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`
            }}
        ref={ref}
        >
            <div className={cn("gallery-item-image", {reveal: onScreen})}>
                <div className="gallery-item-imgInner"
                    style={{backgroundImage: `url(${src})`}}>
                </div>
            </div>
        </div>
    )
}