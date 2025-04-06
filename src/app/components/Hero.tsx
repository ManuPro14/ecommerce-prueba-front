'use client'

import React, { useState, useEffect } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

const images = [
  '/img/heroimg1.png', 
  '/img/heroimg3.png',
  '/img/heroimg2.png',
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="w-full h-auto max-w-screen-md max-h-screen-md relative rounded-4xl overflow-hidden border-2 border-gray-500 shadow-lg">
      <Carousel opts={{ align: "center" }} className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((img, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
}

export default Hero;