"use client";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";


// @ts-ignore
const Slider = ({images, delay = 2000} : {images: string[]}) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if(!timeoutRef.current){
            // @ts-ignore
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect( ()=>  {
        resetTimeout();
        // @ts-ignore
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);


    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((image, index) => (
                    <div
                        className="slide"
                        key={index}
                    >
                        <Image src={`/img/${image}`} alt="finance-tracker screen" width="700" height="600"/>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
export default Slider;