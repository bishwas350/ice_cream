import React, { useState, useEffect, useCallback } from "react";
import Container from "./Container";

// ─── Review Data ───────────────────────────────────────────────
// photo field-এ আপনার real image import করুন
import photo1 from "../assets/img/bolda 1.png";
import photo2 from "../assets/img/bolda 3.png";
import photo3 from "../assets/img/bolda 3.png";
import photo4 from "../assets/img/bolda 4.png";
import photo5 from "../assets/img/bolda 5.png";
import photo6 from "../assets/img/bolda 6.png";
import photo7 from "../assets/img/bolda 7.png";
import photo8 from "../assets/img/bolda 8.png";

const reviews = [
  { id:1, name:"Kevin Andrew",   role:"Happy Customer",       rating:5, photo: photo1,
    text:"Absolutely divine! The flavors burst with every bite. The strawberry swirl is a masterpiece — creamy, fresh, and perfectly sweet. I'll never buy another brand again!" },
  { id:2, name:"Sarah Mitchell", role:"Ice Cream Enthusiast", rating:5, photo: photo2,
    text:"I've tried ice cream all over the world, but nothing compares to this. The mango sorbet is like biting into a fresh tropical fruit on a sunny day. Pure perfection!" },
  { id:3, name:"Daniel Park",    role:"Food Blogger",         rating:5, photo: photo3,
    text:"As someone who reviews food professionally, I'm very picky. But this ice cream genuinely surprised me. The chocolate fudge ripple has incredible depth of flavor." },
  { id:4, name:"Amara Osei",     role:"Regular Customer",     rating:5, photo: photo4,
    text:"My kids absolutely love it! We visit every weekend and try a new flavor. The pistachio and cookies & cream are our family favourites. Wonderful experience every time." },
  { id:5, name:"Lena Hoffmann",  role:"Dessert Lover",        rating:5, photo: photo5,
    text:"The vegan options here are just as good as the classic ones — I was blown away. The coconut caramel swirl is heavenly. Finally a brand that caters to everyone!" },
  { id:6, name:"Marco Rossi",    role:"Gelato Connoisseur",   rating:5, photo: photo6,
    text:"Comparing this to Italian gelato is saying a lot — and it holds up! Rich, dense flavour with perfect sweetness. The pistachio is genuinely world-class." },
  { id:7, name:"Priya Nair",     role:"Foodie & Blogger",     rating:5, photo: photo7,
    text:"Every single scoop feels handcrafted with love. The rose & cardamom is unexpectedly brilliant. A truly special dessert experience I recommend to everyone!" },
  { id:8, name:"James Okafor",   role:"First-Time Visitor",   rating:5, photo: photo8,
    text:"I was sceptical at first. One taste of the salted caramel and I was completely converted. Absolutely worth every penny!" },
];

const LEFT_IDXS  = [0, 2, 4, 6];
const RIGHT_IDXS = [1, 3, 5, 7];
const SIZES = ["h-20 w-20", "h-14 w-14", "h-14 w-14", "h-12 w-12"];

// ─── Face Component ────────────────────────────────────────────
const ReviewerFace = ({ review, size, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`${size} rounded-full overflow-hidden border-2 transition-all duration-300 flex-shrink-0
      ${isActive
        ? "border-[#F83D8E] scale-110 shadow-[0_0_0_3px_rgba(248,61,142,0.25)]"
        : "border-white/20 hover:border-white/50 hover:scale-105"
      }`}
  >
    <img src={review.photo} alt={review.name} className="w-full h-full object-cover" />
  </button>
);

// ─── Main Component ────────────────────────────────────────────
const ReviewPart = () => {
  const [current, setCurrent]   = useState(0);
  const [visible, setVisible]   = useState(true);

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
    <main>
      <div
        className="py-12 md:py-20 overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #2d1b3d 0%, #1a2a2a 50%, #0d2020 100%)" }}
      >
        {/* Glow effects */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "rgba(248,61,142,0.08)", filter: "blur(80px)" }} />
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(29,158,117,0.07)", filter: "blur(80px)" }} />

        <Container>
          {/* Title */}
          <h1 className="font-brad text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 relative z-10">
            Hear from Our{" "}
            <span className="text-[#c0392b]">Happy Ice Cream</span>{" "}
            Lovers
          </h1>

          {/* Stage */}
          <div className="flex items-center justify-center gap-4 relative z-10 min-h-[300px]">

            {/* Left Faces */}
            <div className="hidden sm:flex flex-col gap-5 items-center">
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

            {/* Center Review */}
            <div className="flex-1 max-w-lg text-center px-2">
              <div
                className={`transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <p className="font-apa text-white/80 text-sm sm:text-base leading-relaxed mb-5">
                  {r.text}
                </p>
                <p className="font-apa font-bold text-[#F83D8E] text-lg">{r.name}</p>
                <p className="font-apa text-white/50 text-sm mt-1 mb-3">{r.role}</p>
                <div className="flex justify-center gap-1 text-[#F83D8E]">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3 mt-8">
                <button
                  onClick={() => goTo(current - 1)}
                  className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors text-lg"
                >‹</button>

                <div className="flex gap-2 items-center">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`rounded-full border-none transition-all duration-300 ${
                        i === current
                          ? "w-5 h-2.5 bg-[#F83D8E]"
                          : "w-2.5 h-2.5 bg-white/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => goTo(current + 1)}
                  className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors text-lg"
                >›</button>
              </div>
            </div>

            {/* Right Faces */}
            <div className="hidden sm:flex flex-col gap-5 items-center">
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
      </div>
    </main>
  );
};

export default ReviewPart;