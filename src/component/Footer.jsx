import Container from "./Container";
import logo from "../assets/img/Group 2.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const navLinks = ["Home", "About", "Shop", "Product", "Blog", "Contact"];

const contactInfo = [
  {
    icon: <IoLocationSharp className="text-base text-[#F83D8E]" />,
    label: "Address",
    value: "121 King Street Melbourne, 3000, Australia",
  },
  {
    icon: <MdEmail className="text-base text-[#F83D8E]" />,
    label: "Email",
    value: "info@icedelights.com",
  },
  {
    icon: <FaPhone className="text-sm text-[#F83D8E]" />,
    label: "Phone",
    value: "+5689 2589 6325",
    sub: "Available 24/7",
  },
];

const socials = [
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaTwitter />, label: "Twitter", href: "#" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer
      className="
        relative overflow-hidden py-12 md:py-16 transition-all duration-300
        bg-gradient-to-br from-pink-50 via-white to-emerald-50
        dark:from-[#2d1b3d] dark:via-[#1a1a2e] dark:to-[#0d2020]
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[80px] dark:bg-pink-500/10" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-60 w-60 rounded-full bg-emerald-400/10 blur-[80px] dark:bg-emerald-400/10" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <div className="w-fit rounded-2xl border border-gray-200 bg-white/80 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <img src={logo} alt="IceDelights Logo" className="w-28 h-auto" />
            </div>

            <p className="max-w-[180px] text-xs leading-relaxed text-gray-600 dark:text-white/40">
              Crafting happiness one scoop at a time since 2010.
            </p>

            <div className="mt-1 flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    flex h-8 w-8 items-center justify-center rounded-full
                    border border-gray-200 bg-white text-gray-600
                    hover:border-[#F83D8E] hover:bg-[#F83D8E] hover:text-white
                    transition-all duration-200
                    dark:border-white/15 dark:bg-white/10 dark:text-white/70
                  "
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 border-b border-[#F83D8E]/25 pb-2 text-xs font-semibold uppercase tracking-widest text-[#F83D8E]">
              Navigation
            </h3>

            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      flex items-center gap-2 text-[13px]
                      text-gray-700 hover:text-[#F83D8E] hover:translate-x-1
                      transition-all duration-200
                      dark:text-[#CFB6E2]/85
                    "
                  >
                    <span className="text-[#F83D8E]">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 border-b border-[#F83D8E]/25 pb-2 text-xs font-semibold uppercase tracking-widest text-[#F83D8E]">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#F83D8E]/30 bg-[#F83D8E]/15">
                    {icon}
                  </div>

                  <div>
                    <p className="mb-0.5 text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40">
                      {label}
                    </p>

                    <p className="text-[12px] leading-relaxed text-gray-700 dark:text-[#CFB6E2]/90">
                      {value}
                    </p>

                    {sub && (
                      <p className="mt-0.5 text-[10px] text-gray-500 dark:text-white/35">
                        {sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 border-b border-[#F83D8E]/25 pb-2 text-xs font-semibold uppercase tracking-widest text-[#F83D8E]">
              Newsletter
            </h3>

            <p className="mb-4 text-xs leading-relaxed text-gray-600 dark:text-white/45">
              Get the latest flavors, offers & sweet deals delivered to your
              inbox.
            </p>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="
                  rounded-lg border px-3 py-2.5 text-xs outline-none
                  border-gray-200 bg-white text-gray-800 placeholder:text-gray-400
                  focus:border-[#F83D8E]/50
                  dark:border-white/15 dark:bg-white/10 dark:text-white
                  dark:placeholder:text-white/30
                "
              />

              <button
                className="rounded-lg py-2.5 text-xs font-semibold text-white hover:opacity-90 transition"
                style={{
                  background: "linear-gradient(135deg, #F83D8E, #c0392b)",
                }}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-10 px-4 md:px-6">
          <hr className="mb-4 border-t border-gray-200 dark:border-white/10" />

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-[11px] text-gray-500 dark:text-white/30">
              © 2025 <span className="text-[#F83D8E]">IceDelights</span>. All rights reserved.
            </p>

            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-white/30">
              Privacy Policy · Terms of Use
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;