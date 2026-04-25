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
      className="relative overflow-hidden py-12 md:py-16"
      style={{
        background:
          "linear-gradient(135deg, #2d1b3d 0%, #1a1a2e 40%, #0d2020 100%)",
      }}
    >
      {/* Glow Effects */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full"
        style={{
          background: "rgba(248,61,142,0.07)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-60 w-60 rounded-full"
        style={{
          background: "rgba(29,158,117,0.06)",
          filter: "blur(80px)",
        }}
      />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <div className="w-fit rounded-2xl border border-white/10 bg-white/5 p-4">
              <img src={logo} alt="IceDelights Logo" className="h-auto w-28" />
            </div>

            <p className="max-w-[180px] text-xs leading-relaxed text-white/40">
              Crafting happiness one scoop at a time since 2010.
            </p>

            {/* Social Icons */}
            <div className="mt-1 flex gap-2">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/8 text-xs text-white/60 transition-all duration-200 hover:border-[#F83D8E] hover:bg-[#F83D8E] hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 border-b border-[#F83D8E]/25 pb-2 text-xs font-semibold tracking-widest text-[#F83D8E] uppercase">
              Navigation
            </h3>

            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-[13px] text-[#CFB6E2]/85 transition-all duration-200 hover:translate-x-1 hover:text-[#F83D8E]"
                  >
                    <span className="text-sm text-[#F83D8E]">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 border-b border-[#F83D8E]/25 pb-2 text-xs font-semibold tracking-widest text-[#F83D8E] uppercase">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#F83D8E]/30 bg-[#F83D8E]/15">
                    {icon}
                  </div>

                  <div>
                    <p className="mb-0.5 text-[10px] uppercase tracking-wider text-white/40">
                      {label}
                    </p>

                    <p className="text-[12px] leading-relaxed text-[#CFB6E2]/90">
                      {value}
                    </p>

                    {sub && (
                      <p className="mt-0.5 text-[10px] text-white/35">{sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 border-b border-[#F83D8E]/25 pb-2 text-xs font-semibold tracking-widest text-[#F83D8E] uppercase">
              Newsletter
            </h3>

            <p className="mb-4 text-xs leading-relaxed text-white/45">
              Get the latest flavors, offers & sweet deals delivered to your
              inbox.
            </p>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-lg border border-white/15 bg-white/7 px-3 py-2.5 text-xs text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#F83D8E]/50"
              />

              <button
                className="rounded-lg py-2.5 text-xs font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #F83D8E, #c0392b)",
                }}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-10 px-4 md:px-6">
          <hr
            className="mb-4 border-none border-t border-white/10"
            style={{
              borderTopWidth: "0.5px",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          />

          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-[11px] text-white/30">
              © 2025 <span className="text-[#F83D8E]">IceDelights</span>. All
              rights reserved.
            </p>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/30">
              Privacy Policy · Terms of Use
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;