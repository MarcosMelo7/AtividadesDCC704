"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

const imgs = [
  {
    src: "/images/banners/7f7f5d98ef6a1a130759ca9df9d26465.webp",
    alt: "img1",
  },
  {
    src: "/images/banners/916daf1d85a1ed4636ae61bd9fd97e5f.webp",
    alt: "img2",
  },
  {
    src: "/images/banners/e447c65801443986740ca9a149aeb1bb.webp",
    alt: "img3",
  },
  {
    src: "/images/banners/eef48066af194498473b515a6a7bc5d1.png",
    alt: "img4",
  },
];

export default function DefaultCarousel() {
  return (
    <Carousel>
      {imgs.map((img, idx) => (
        <Image
          src={img.src}
          alt={img.alt}
          width={0}
          height={0}
          sizes="100vw"
          //   className="w-full h-full"
          key={idx}
        />
      ))}
    </Carousel>
  );
}
