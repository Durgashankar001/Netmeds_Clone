import React from 'react'
import "./CardSlider.css"
const images = [
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667832124_cartbannercan.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362227_569x90xvgdsb.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667916916_569x90ggre.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362196_569x90cddhs.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1666362227_569x90xvgdsb.jpg",
    "https://www.netmeds.com/images/cms/aw_rbslider/slides/1667916916_569x90ggre.jpg"
   
];
const delay = 3000;

const CardSlider_Component = () => {

    const [index, setIndex] = React.useState(0);

    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
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
        <div className=" slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((backgroundColor, index) => (
                    <div className="slide" key={index} style={{ backgroundColor }}>
                        <img src={backgroundColor} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardSlider_Component