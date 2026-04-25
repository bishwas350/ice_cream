import React, { useState, useEffect, useCallback } from "react";
import Container from "./Container";

import photo1 from "../assets/img/bolda 1.png";
import photo2 from "../assets/img/bolda 3.png";
import photo3 from "../assets/img/bolda 3.png";
import photo4 from "../assets/img/bolda 4.png";
import photo5 from "../assets/img/bolda 5.png";
import photo6 from "../assets/img/bolda 6.png";
import photo7 from "../assets/img/bolda 7.png";
import photo8 from "../assets/img/bolda 8.png";

const reviews = [
  {
    id: 1,
    name: "Kevin Andrew",
    role: "Happy Customer",
    rating: 5,
    photo: photo1,
    text: "Absolutely divine! The flavors burst with every bite. The strawberry swirl is a masterpiece — creamy, fresh, and perfectly sweet.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Ice Cream Enthusiast",
    rating: 5,
    photo: photo2,
    text: "I've tried ice cream all over the world, but nothing compares to this. The mango sorbet is pure perfection!",
  },
  {
    id: 3,
    name: "Daniel Park",
    role: "Food Blogger",
    rating: 5,
    photo: photo3,
    text: "The chocolate fudge ripple has incredible depth of flavor. Rich, smooth and unforgettable.",
  },
  {
    id: 4,
    name: "Amara Osei",
    role: "Regular Customer",
    rating: 5,
    photo: photo4,
    text: "My kids absolutely love it! We visit every weekend and try a new flavor.",
  },
  {
    id: 5,
    name: "Lena Hoffmann",
    role: "Dessert Lover",
    rating: 5,
    photo: photo5,
    text: "The vegan options are heavenly. Coconut caramel swirl is on another level.",
  },
  {
    id: 6,
    name: "Marco Rossi",
    role: "Gelato Connoisseur",
    rating: 5,
    photo: photo6,
    text: "Comparing this to Italian gelato is saying a lot — and it holds up beautifully.",
  },
  {
    id: 7,
    name: "Priya Nair",
    role: "Foodie & Blogger",
    rating: 5,
    photo: photo7,
    text: "Every scoop feels handcrafted with love. A truly special dessert experience.",
  },
  {
    id: 8,
    name: "James Okafor",
    role: "First-Time Visitor",
    rating: 5,
    photo: photo8,
    text: "One taste of the salted caramel and I was completely converted.",
  },
];

const LEFT_IDXS = [0, 2, 4, 6];
const RIGHT_IDXS = [1, 3, 5, 7];
const SIZES = ["h-20 w-20", "h-14 w-14", "h-14 w-14", "h-12 w-12"];

const ReviewerFace = ({ review, size, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`${size} overflow-hidden rounded-full border-2 flex-shrink-0 transition-all duration-300
      ${
        isActive
          ? "border-[#F83D8E] scale-110 shadow-[0_0_0_3px_rgba(248,61,142,0.25)]"
          : "border-gray-300 dark:border-gray-600 hover:border-[#F83D8E] hover:scale-105"
      }`}
  >
    <img
      src={review.photo}
      alt={review.name}
      className="h-full w-full object-cover"
    />
  </button>
);

const ReviewPart = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((idx + reviews.length) % reviews.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 4200);
    return () => clearInterval(t);
  }, [current, goTo]);

  const r = reviews[current];

  return (
    <section
      className="
        relative overflow-hidden py-12 md:py-20 transition-all duration-300
        bg-gradient-to-br from-pink-50 via-white to-emerald-50
        dark:from-[#2d1b3d] dark:via-[#1a2a2a] dark:to-[#0d2020]
      "
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-pink-500/10 blur-[80px]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-400/10 blur-[80px]" />

      <Container>
        <h1
          className="
            relative z-10 mb-10 text-center font-bold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            text-gray-900 dark:text-white
          "
        >
          Hear from Our{" "}
          <span className="text-[#F83D8E]">Happy Ice Cream</span> Lovers
        </h1>

        <div className="relative z-10 flex min-h-[300px] items-center justify-center gap-4">
          {/* Left */}
          <div className="hidden flex-col items-center gap-5 sm:flex">
            {LEFT_IDXS.map((ri, pos) => (
              <ReviewerFace
                key={ri}
                review={reviews[ri]}
                size={SIZES[pos]}
                isActive={ri === current}
                onClick={() => goTo(ri)}
              />
            ))}
          </div>

          {/* Center */}
          <div className="flex-1 max-w-lg px-2 text-center">
            <div
              className={`transition-all duration-300 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {r.text}
              </p>

              <p className="text-lg font-bold text-[#F83D8E]">{r.name}</p>

              <p className="mt-1 mb-3 text-sm text-gray-500 dark:text-gray-500">
                {r.role}
              </p>

              <div className="flex justify-center gap-1 text-[#F83D8E]">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => goTo(current - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg text-gray-700 transition hover:bg-black/5 dark:border-gray-600 dark:text-white dark:hover:bg-white/10"
              >
                ‹
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "h-2.5 w-5 bg-[#F83D8E]"
                        : "h-2.5 w-2.5 bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo(current + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg text-gray-700 transition hover:bg-black/5 dark:border-gray-600 dark:text-white dark:hover:bg-white/10"
              >
                ›
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="hidden flex-col items-center gap-5 sm:flex">
            {RIGHT_IDXS.map((ri, pos) => (
              <ReviewerFace
                key={ri}
                review={reviews[ri]}
                size={SIZES[pos]}
                isActive={ri === current}
                onClick={() => goTo(ri)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReviewPart;