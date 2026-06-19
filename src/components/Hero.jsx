import { motion } from "framer-motion";
import heroImg from "../assets/IMG_1258.jpeg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center py-34">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm mb-4"
          >
            London & Hertfordshire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-3xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Professional Cleaning.
            <br />

            <span className="text-[#D4AF37]">
              Precision Installation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-6
              text-lg
              text-gray-600
             
              leading-relaxed
              max-w-xl
            "
          >
        Where Clean Meets Precision
with a bright, spotless image.

          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="
                bg-[#D4AF37]
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                text-center
                hover:scale-105
                transition
              "
            >
              Book Appointment
            </a>

            <a
              href="/price"
              className="
                border
                border-[#D4AF37]
                text-[#D4AF37]
                px-8
                py-4
                rounded-full
                text-center
                hover:bg-[#D4AF37]
                hover:text-black
                transition
              "
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={heroImg}
            alt="Cleaning Service"
            className="
              w-full
              h-[500px]
              md:h-[650px]
              object-cover
              rounded-3xl
              shadow-2xl
            "
          />

          {/* Floating Card */}
          <div
            className="
              absolute
              bottom-6
              left-6
              bg-white/90
              dark:bg-black/80
              backdrop-blur-md
              px-6
              py-4
              rounded-2xl
              shadow-lg
            "
          >
            <h3 className="text-[#D4AF37] text-2xl font-bold">
              99+
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Successful Projects
            </p>
          </div>
        </motion.div>

          {/* Trust Badge */}
          {/* <div
            className="
              mt-8
              flex
              items-center
              gap-3
              text-sm
              text-gray-600
              dark:text-gray-400
            "
          >
            <span className="text-[#D4AF37] text-lg">
              ⭐⭐⭐⭐⭐
            </span>

            <span>
              Trusted by homeowners and businesses across
              London & Hertfordshire
            </span>
          </div> */}

      </div>
    </section>
  );
}

export default Hero;