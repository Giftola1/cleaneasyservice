import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logoImg from "../assets/logos.PNG";




function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/price" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  return (
    <>
     <nav
  className="
    fixed
    top-0
    left-0
    w-full
    z-50
    backdrop-blur-md
    border-b
    border-gray-200
    bg-white/70
    dark:bg-black/20
  ">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
           <a href="/">
                   <img
  src={logoImg}
  alt="MountPro Logo"
  className="h-20 w-auto object-contain"
  
/>
           </a>
  
        

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider hover:text-[#D4AF37] transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <button className="hidden md:block bg-[#D4AF37] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">

<a href="/contact">Book Now</a>            
          </button>
          {/* <button
  onClick={() => setDarkMode(!darkMode)}
  className="
    border
    border-[#D4AF37]
    px-4
    py-2
    rounded-full
    text-sm
    hover:bg-[#D4AF37]
    hover:text-black
    transition
  "
>
  {darkMode ? "☀️" : "🌙"}
</button> */}


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl"
          >
            <HiOutlineMenuAlt4 />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 bg-[#fff] z-[100] flex flex-col"
          >
            {/* Top */}
            <div className="flex justify-between items-center p-6">
             <img
  src={logoImg}
  alt="MountPro Logo"
  className="h-12 w-auto object-contain"
/>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-4xl"
              >
                <IoClose />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="text-5xl font-semibold py-5 hover:text-[#D4AF37] transition"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 border border-[#D4AF37] text-[#D4AF37] px-6 py-4 rounded-full text-lg w-fit"
              >
                <a href="/contact">Book Appointment</a>
                
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;