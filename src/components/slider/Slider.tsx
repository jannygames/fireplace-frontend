import { useState, useEffect } from "react";
import SliderContent from "./slider-content/SliderContent";
import sliderImage from "./sliderImage";
import Dots from "./dots/Dots";
import Arrows from "./arrows/Arrows";

const len = sliderImage.length - 1;

function Slider({className}: {className: string}) {
    const [activeindex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeindex === len ? 0 : activeindex + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeindex]);

    return (
        <div className={`relative w-full h-1/2 ${className}`}>
            <SliderContent activeindex={activeindex} sliderImage={sliderImage} />
            <Arrows prevSlide={
                () => {
                    setActiveIndex(activeindex === 0 ? len : activeindex - 1);
                }
            } nextSlide={
                () => {
                    setActiveIndex(activeindex === len ? 0 : activeindex + 1);
                }
            } />
            <Dots activeindex={activeindex} onClick={(activeindex) => setActiveIndex(activeindex)} sliderImage={sliderImage} />
        </div>
    );
}

export default Slider;