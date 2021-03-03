import '../App.css';
import React, {useState} from 'react';
import NameInputBox from '../components/NameInputBox.js'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/dog-face-tongue-human-friend-33944.png',
        altText: 'dog'
        // caption: 'Dog'
    },
    {
        src: 'https://www.shareicon.net/data/256x256/2015/08/30/93110_cat_512x512.png',
        altText: 'cat'
        // caption: 'Cat'
    }
];


const PetCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText}/>
                <CarouselCaption captionText={item.caption} captionHeader={item.caption}/>
            </CarouselItem>
        );
    });

    return ([
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className={"carousel"}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
,
    <NameInputBox/>

]);
}

export default PetCarousel;