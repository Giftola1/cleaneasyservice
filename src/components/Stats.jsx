import { motion } from "framer-motion";
import statsImg from "../assets/IMG_1257.jpeg";

const badges = [
  "5-Star Rated",
  "Same-Day Service",
  "Professional Team",
  "Clean Spaces",
  "Premium Finish",
  "Trusted Service",
];

function Stats() {
  return (
    <section
      className="
        py-28
        bg-white
        dark:bg-[#0A0A0A]
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
            About Us
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              text-black
              dark:text-white
            "
          >
            Clean Spaces.
            <br />
            Perfect Finishes.
          </h2>

          <p
            className="
              text-gray-600
              dark:text-gray-400
              mt-6
              leading-relaxed
            "
          >
            We are a professional cleaning and installation company
            dedicated to delivering reliable, high-quality services
            for homes, offices, and commercial properties across
            London and Hertfordshire. Our team takes pride in
            providing exceptional workmanship, attention to detail,
            and outstanding customer service.
          </p>

          {/* BADGES */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="
                  bg-gray-50
                  dark:bg-white/[0.03]

                  border
                  border-gray-200
                  dark:border-white/10

                  rounded-xl

                  py-4
                  px-3

                  text-center

                  text-gray-600
                  dark:text-gray-400

                  transition-all
                  duration-300

                  hover:border-[#D4AF37]
                  hover:text-[#D4AF37]
                  hover:-translate-y-2
                  hover:shadow-lg
                "
              >
                {badge}
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/contact"
              className="
                border
                border-[#D4AF37]
                text-[#D4AF37]

                px-6
                py-3

                rounded-full

                hover:bg-[#D4AF37]
                hover:text-black

                transition
              "
            >
              Book Appointment
            </a>

            <a
              href="#reviews"
              className="
                border
                border-[#D4AF37]
                text-[#D4AF37]

                px-6
                py-3

                rounded-full

                hover:bg-[#D4AF37]
                hover:text-black

                transition
              "
            >
              Google Reviews
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={statsImg}
              alt="Cleaning Service"
              className="
                w-full
                h-[500px]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* FLOATING STATS */}
          <div
            className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              w-[90%]
            "
          >
            <div
              className="
                bg-white/90
                dark:bg-black/70

                backdrop-blur-md

                border
                border-gray-200
                dark:border-white/10

                rounded-2xl

                grid
                grid-cols-3

                text-center

                py-5
              "
            >
              <div>
                <h3 className="text-[#D4AF37] text-xl font-bold">
                  7+
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Houses Cleaned
                </p>
              </div>

              <div>
                <h3 className="text-[#D4AF37] text-xl font-bold">
                  7+
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  TVs Installed
                </p>
              </div>

              <div>
                <h3 className="text-[#D4AF37] text-xl font-bold">
                  98%
                </h3>

                <p
                  className="
                    text-xs
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  Satisfaction
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Stats;