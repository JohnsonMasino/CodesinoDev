import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const technologies = [
  {
    category: "Website | Web App Development",
    tools: [
      { name: "React", logo: "react.png" },
      { name: "Next.js", logo: "next.png" },
      { name: "Vue.js", logo: "vue.png" },
      { name: "Angular", logo: "angular.png" },
      { name: "Laravel", logo: "laravel.svg" },
      { name: "Django", logo: "django.png" },
      {name: "Github", logo: "github.png"},
      {name: "Svelte", logo: "svelte.png"},
      {name: "tailwind", logo: "tailwind.png"},
      {name: "redux", logo: "redux.png"},
      {name: "axios", logo: "axios.png"},
      {name: "npm", logo: "npm.png"},
      {name: "git", logo: "git.png"},
      { name: "React", logo: "react.png" },
      { name: "Next.js", logo: "next.png" },
      { name: "Vue.js", logo: "vue.png" },
      { name: "Angular", logo: "angular.png" },
      { name: "Laravel", logo: "laravel.svg" },
      { name: "Django", logo: "django.png" },
      {name: "Github", logo: "github.png"},
      {name: "Svelte", logo: "svelte.png"},
      {name: "tailwind", logo: "tailwind.png"},
      {name: "redux", logo: "redux.png"},
      {name: "axios", logo: "axios.png"},
      {name: "npm", logo: "npm.png"},
      {name: "git", logo: "git.png"},
    ],
  },
  {
    category: "Mobile App Development",
    tools: [
      { name: "React Native", logo: "react-native.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
    ],
  },
  {
    category: "Cloud Services",
    tools: [
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
    ],
  },
  {
    category: "Product | Graphics Design",
    tools: [
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
    ],
  },
  {
    category: "Motion Graphics | 3D Animation",
    tools: [
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.png" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
    ],
  },
  {
    category: "Software Development Training",
    tools: [
      { name: "Python", logo: "python.png" },
      { name: "JavaScript", logo: "javascript.png" },
      { name: "Java", logo: "java.png" },
      { name: "C++", logo: "cpp.png" },
    ],
  },
  {
    category: "Crypto | Paypal | Fiat Exchange",
    tools: [
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "Stripe", logo: "stripe.png" },
    ],
  },
  {
    category: "Software Management",
    tools: [
      { name: "Jira", logo: "jira.png" },
      { name: "Trello", logo: "trello.png" },
      { name: "Asana", logo: "asana.png" },
    ],
  },
];

const Testimonial = () => {
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
    <div className="bg-custom-bg2 mt-6 text-white py-16 px-8">
      <div className="text-center mt-16">
        <h2 className="text-1xl font-bold mt-12 text-gray-600">
          The Technologies We Use
        </h2>
      </div>

      {technologies.map((tech, index) => (
        <div key={index} className="mt-10 overflow-hidden">
          <h2 className="text-center text-sm font-bold mt-12 text-gray-600">
            {tech.category}
          </h2>
          <div
            className="flex gap-8 mt-6 px-2 animate-slide whitespace-nowrap"
            style={{
              animation: "slide 35s linear infinite",
            }}
          >
            {tech.tools.map((tool, idx) => (
              <img
                key={idx}
                src={tool.logo}
                alt={tool.name}
                className="h-16 object-contain"
              />
            ))}
          </div>
        </div>
      ))}

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(100%);
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
