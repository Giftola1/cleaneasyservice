import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

function Service() {
  return (
    <section
      id="about"
      className="
        py-18
        bg-white
        
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4">
            OUR SERVICES
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              text-black
              
            "
          >
            Why Work With Us?
          </h2>

          <p
            className="
              text-gray-600
            
              mt-6
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            We are committed to delivering reliable,
            high-quality cleaning and installation services
            with professionalism, attention to detail,
            and customer satisfaction at the heart of
            everything we do.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="mt-16">
          <FeatureCard />
        </div>

      </div>
    </section>
  );
}

export default Service;