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
      { name: "mailgun", logo: "mailgun.png" },
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
      { name: "mailgun", logo: "mailgun.png" },
    ],
  },
  {
    category: "Mobile App Development",
    tools: [
      { name: "React", logo: "react.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      {name: "Github", logo: "github.png"},
      {name: "git", logo: "git.png"},
      { name: "React", logo: "react.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      {name: "Github", logo: "github.png"},
      {name: "git", logo: "git.png"},
      { name: "React", logo: "react.png" },
      { name: "Flutter", logo: "flutter.png" },
      { name: "Swift", logo: "swift.png" },
      { name: "Kotlin", logo: "kotlin.png" },
      {name: "Github", logo: "github.png"},
      {name: "git", logo: "git.png"},
      { name: "mailgun", logo: "mailgun.png" },
    ],
  },
  {
    category: "Cloud Services",
    tools: [
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
      { name: "AWS", logo: "aws.png" },
      { name: "Google Cloud", logo: "gcloud.png" },
      { name: "Azure", logo: "azure.png" },
      { name: "Docker", logo: "docker.png" },
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
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
      { name: "Adobe Photoshop", logo: "photoshop.png" },
      { name: "Figma", logo: "figma.png" },
      { name: "Sketch", logo: "sketch.png" },
    ],
  },
  {
    category: "Motion Graphics | 3D Animation",
    tools: [
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
      { name: "Blender", logo: "blender.png" },
      { name: "After Effects", logo: "aftereffects.jpg" },
      { name: "Cinema 4D", logo: "cinema4d.png" },
    ],
  },
  {
    category: "Software Development Training",
    tools: [
      { name: "zoom", logo: "zoom.png" },
      { name: "meet", logo: "meet.avif" },
      { name: "whatsapp", logo: "whatsapp.webp" },
      { name: "doc", logo: "doc.png" },
      { name: "zoom", logo: "zoom.png" },
      { name: "meet", logo: "meet.avif" },
      { name: "whatsapp", logo: "whatsapp.webp" },
      { name: "doc", logo: "doc.png" },
      { name: "zoom", logo: "zoom.png" },
      { name: "meet", logo: "meet.avif" },
      { name: "whatsapp", logo: "whatsapp.webp" },
      { name: "doc", logo: "doc.png" },
      { name: "zoom", logo: "zoom.png" },
      { name: "meet", logo: "meet.avif" },
      { name: "whatsapp", logo: "whatsapp.webp" },
      { name: "doc", logo: "doc.png" },
    ],
  },
  {
    category: "Crypto | Paypal | Fiat Exchange",
    tools: [
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "bitget", logo: "bitget.png" },
      { name: "bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "bitget", logo: "bitget.png" },
      { name: "bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "bitget", logo: "bitget.png" },
      { name: "bybit", logo: "bybit.png" },
      { name: "Binance", logo: "binance.png" },
      { name: "PayPal", logo: "paypal.png" },
      { name: "bitget", logo: "bitget.png" },
      { name: "bybit", logo: "bybit.png" },
    ],
  },
  {
    category: "Software Management",
    tools: [
      { name: "clickup", logo: "clickup.png" },
      { name: "note", logo: "note.jpg" },
      { name: "mailgun", logo: "mailgun.png" },
      { name: "clickup", logo: "clickup.png" },
      { name: "note", logo: "note.jpg" },
      { name: "mailgun", logo: "mailgun.png" },
      { name: "clickup", logo: "clickup.png" },
      { name: "note", logo: "note.jpg" },
      { name: "mailgun", logo: "mailgun.png" },
      { name: "clickup", logo: "clickup.png" },
      { name: "note", logo: "note.jpg" },
      { name: "mailgun", logo: "mailgun.png" },
    ],
  },
];

const Testimonial = () => {
  return (
    <div className="bg-custom-bg2 text-white py-16 px-8">
      <div className="text-center">
        <h2 className="text-1xl font-bold text-gray-600">
          The Technologies We Use
        </h2>
      </div>

      {technologies.map((tech, index) => (
        <div key={index} className="mt-8 overflow-hidden">
          <h2 className="text-center text-sm font-bold mt-12 text-gray-600">
            {tech.category}
          </h2>
          <div
            className="tech-slider mt-4"
            style={{
              animation: `slide ${20 + index * 2}s linear infinite`,
            }}
          >
            {tech.tools.map((tool, idx) => (
              <img
                key={idx}
                src={tool.logo}
                alt={tool.name}
                className="h-16 object-contain mx-4"
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

          .tech-slider {
            display: flex;
            gap: 20px;
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
