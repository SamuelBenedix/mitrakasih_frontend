import Slider from "react-slick";
import React, { createRef } from "react";
import Image from "next/image";

interface Props {
  libraries: {
    caption: string;
    image: string;
  }[];
}

export default function Library(props: Props) {
  const { libraries } = props;

  const slider = createRef<Slider>();

  const settings = {
    speed: 700,
    slidesToShow: 1,
    dots: true,
    fade: true,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider ref={slider} {...settings}>
      {libraries.map((library) => (
        <div key={library.caption}>
          <div className="flex flex-col items-center">
            <div className="h-[20rem] md:h-[32rem] w-full">
              <Image
                src={library.image}
                alt={library.caption}
                width="1200"
                height="1200"
                className="object-cover h-full w-full group-hover:scale-125 transition-all duration-1000"
              />
            </div>
            <p className="text-primary-800 text-lg font-semibold mt-4 mb-6">
              {library.caption}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
