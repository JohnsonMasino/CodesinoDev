import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const slides = [
        {
            image: '/1.jpg',
            floating: '/brand_name.png',
            title: 'CODESINO DEVELOPMENT',
            subtitle: 'Your All-in-One Technology Partner',
        },
    ];

    return (
        <div className='w-full h-[500px] mt-1 relative overflow-hidden'>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative">
                        <img
                            src={slide.image}
                            alt={`Slide ${index}`}
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                            <img
                                src="/brand_name.png"
                                alt="brand"
                                className="h-40 mt-60"
                            />
                            <p className="text-white font-bold font-curly p-2 mt-8 text-sm">
                                {slide.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;

