import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
    {
    title: "Deep Cleaning",
    price: "₦25,000",
    description:"Our Deep Cleaning service is designed to provide an intensive, thorough clean for your space. We go beyond regular cleaning, tackling dirt and grime in hidden areas, leaving your environment spotless and fresh. Perfect for homes needing extra attention.",
    features: [
      " Deep Clean",
      "Hidden Areas",
      "Spotless Finish",
      "Fresh Environment",
    ],
  },
  {
    title: "Regular Cleaning",
    description:"Our regular cleaning services keep your home consistently spotless. Ideal for weekly or bi-weekly schedules, we handle dusting, vacuuming, sanitizing, and more to maintain a fresh, clean environment.",
    featured: true,
    features: [
      " Regular Maintenance",
       "Dust Removal",
       "Surface Sanitizing",
       "Fresh Environment",
    ],
  },
    {
    title: "Move In/Out Cleaning",
    price: "₦25,000",
    description:"Moving is exciting, but it comes with a long to-do list. Let us handle the cleaning so you can focus on settling into your new home or handing over the keys with confidence. Our Move-In/Move-Out Cleaning includes everything from our Deep Cleaning service — plus extra attention to detail and all add-ons included.",
    features: [
    "Move Ready",
    "Deep Cleaning",
    "Detail Focused",
    "All Add-ons",
    ],
  },
  {
    title: "One Time Cleaning",
    price: "₦45,000",
    description:"A thorough cleaning service designed for special occasions, seasonal refreshes, or when your home needs extra attention . Perfect for holidays, or after events.",
    featured: true,
    features: [
      "Special Occasions",
      "Seasonal Refresh",
      "Extra Attention",
      "Post-Event Clean",
    ],
  },
  {
    title: "TV Mounting",
    price: "₦25,000",
  description:"TV Mounting service ensures your television is installed safely and professionally for the best viewing experience. We provide secure wall mounting, organize and conceal cables where possible, and deliver a clean, polished finish that enhances the look of your space.",
    features: [
      "Professional Installation",
      "Secure Wall Mounting",
      "Cable Management",
      "Clean Finish",
    ],
  },

];

function Pricing() {
  return (
    <section className="py-28 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white"
          >
            Our <span className="text-[#D4AF37]">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 mt-6 text-lg"
          >
          Our simple process ensures top-quality cleaning every time. Just book, relax, and let us handle the rest with attention to every detail!
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`
                group
                rounded-3xl
                p-8
                border
                transition-all
                duration-500

                bg-white
                dark:bg-white/[0.03]

                ${
                  plan.featured
                    ? "border-[#D4AF37]"
                    : "border-gray-200 dark:border-white/10"
                }

                hover:border-[#D4AF37]
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)]
              `}
            >
              {plan.featured && (
                <div className="mb-4 inline-block bg-[#D4AF37] text-black text-xs px-3 py-1 rounded-full font-semibold">
                  MOST POPULAR
                </div>
              )}
              

              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {plan.title}
              </h3>

              {/* <div className="mt-4 text-4xl font-bold text-[#D4AF37]">
                {plan.price}
              </div> */}
               <h3 className=" text-black dark:text-white pt-6">
                {plan.description}
              </h3>


              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                  >
                    <FaCheck className="text-[#D4AF37]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="
                  mt-8
                  w-full
                  py-4
                  rounded-xl

                  border
                  border-gray-200
                  dark:border-white/10

                  text-black
                  dark:text-white

                  transition-all
                  duration-300

                  group-hover:bg-[#D4AF37]
                  group-hover:text-black
                  group-hover:border-[#D4AF37]
                "
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;