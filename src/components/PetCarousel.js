import '../App.css';
import React, {useEffect, useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import Cat from '../assets/headshots/cat-headshot.png';
import Parrot from '../assets/headshots/parrot-headshot.png';
import Penguin from '../assets/headshots/penguin-headshot.png';
import Otter from '../assets/headshots/otter-headshot.png';

const items = [
    {
        src: Parrot,
        altText: 'parrot'
    },
    {
        src: Cat,
        altText: 'cat'
    },
    {
        src: Penguin,
        altText: 'penguin'
    },
    {
        src: Otter,
        altText: 'otter'
    }
];


const PetCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // update parent selected pet state with value of altText for selected item
    const updateParentHandler = idx => {
        props.handler && props.handler(items[idx].altText);
    }

    // if user does not change state of carousel, sets default selected animal to idx 0
    const { selectedPet } = props.getState();
    useEffect(() => {
        if (selectedPet === null)
            updateParentHandler(0);
    });

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        updateParentHandler(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
        updateParentHandler(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
        updateParentHandler(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className={"pet_image"} src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className={"carousel"}
            interval={false}
            contentContainerCustomStyle={{ alignItems: 'center' }}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
        </Carousel>
    );
}

export default PetCarousel;