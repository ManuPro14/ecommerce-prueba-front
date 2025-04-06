'use client'

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const images = [
  '/img/heroimg1.png',
  '/img/heroimg3.png',
  '/img/heroimg2.png',
];

export default function Hero() {
  return (
    <section className="w-full h-auto max-w-screen-md relative rounded-4xl overflow-hidden border-2 border-gray-500 shadow-lg">
      <Carousel opts={{ align: "center", loop: true }} className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((img, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src={img}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover"
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