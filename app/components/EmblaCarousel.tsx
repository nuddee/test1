"use client";
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

type EmblaCarouselProps = {
  slides: string[];  // Accepts an array of image URLs (string array)
  options?: EmblaOptionsType;  // Optional carousel options
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__content">
                {/* Render the image here */}
                <img src={src} alt={`Slide ${index + 1}`} className="embla__slide__img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <PrevButton 
          onClick={onPrevButtonClick} 
          disabled={prevBtnDisabled} 
        />
        <NextButton 
          onClick={onNextButtonClick} 
          disabled={nextBtnDisabled} 
        />
      </div>
    </section>
  );
};

export default EmblaCarousel;
