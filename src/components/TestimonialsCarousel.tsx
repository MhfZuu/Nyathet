'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import CardReview from './CardReview';

type TestimonialData = {
  description: string;
  name: string;
  jobs: string;
  inisial: string;
};

type TestimonialsCarouselProps = {
  testimonials: TestimonialData[];
};

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [curr, setCurr] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurr(carouselApi.selectedScrollSnap());

    carouselApi.on('select', () => {
      setCurr(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <>
      <Carousel
        className="block lg:hidden w-full "
        opts={{ loop: true, align: 'center', containScroll: 'trimSnaps' }}
        plugins={[Autoplay({ delay: 2000 })]}
        setApi={setCarouselApi}
      >
        <CarouselContent className="overflow-visible -mx-2">
          {testimonials.map((card, index) => (
            <CarouselItem key={index} className="basis-3/4 sm:basis-1/2">
              <div
                className={`
            transition-all duration-300
            ${index === curr ? 'scale-100 opacity-100' : 'scale-85 opacity-60'}
          `}
              >
                <CardReview
                  description={card.description}
                  name={card.name}
                  jobs={card.jobs}
                  inisial={card.inisial}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
