import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Thank you Codesino ! You deliver web apps swiftly",
    name: "Chineco",
    designation: "Client",
  },
  {
    quote:
      "Wasn't sure how to trade my crypto but Codesino cleared my doubts",
    name: "Johnbosco",
    designation: "Client",
  },
  {
    quote:
      "Omo your designing bam o. Na you go dey work for me from now onwards",
    name: "Panda",
    designation: "Client",
  },
  {
    quote:
      "Daalu my bro. Your website skills mad I swear",
    name: "Nwanafio Lotanna",
    designation: "Tad Tech Founder",
  },
];

const logos = [
  "lootcrate.png",
  "lootcrate.png",
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const truckImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          truckImageRef.current.classList.add("animate-slide-in-left");
        } else {
          truckImageRef.current.classList.remove("animate-slide-in-left");
        }
      },
      { threshold: 0.5 }
    );

    if (truckImageRef.current) {
      observer.observe(truckImageRef.current);
    }

    return () => {
      if (truckImageRef.current) {
        observer.unobserve(truckImageRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-custom-bg2 text-white py-16 px-8">
      <div className="text-center mb-6">
        <h2 className="text-1xl font-mono font-bold text-gray-600">Our works speak for us</h2>
        <h2 className="text-blue-500 pt-10 font-bold">TESTIMONIALS</h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 rounded-md mx-4 space-x-4 shadow-md text-center text-gray-600 h-52 flex flex-col justify-between mb-2"
          >
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <h4 className="text-1xl font-bold">{testimonial.name}</h4>
            <p className="text-sm mt-1 mb-4">{testimonial.designation}</p>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-16">
        <h2 className="text-1xl font-curly font-bold pt-10 text-gray-600">
          Some Companies we Built Their Webapps
        </h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <div
          className="flex gap-6 mt-6 px-2 animate-slide whitespace-nowrap"
          style={{
            animation: "slide 35s linear infinite",
          }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes slide-in-left {
            0% {
              opacity: 0;
              transform: translateX(-100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
