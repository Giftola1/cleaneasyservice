import {
  FaStar,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

const cards = [
    {
    title: "Cleaning Services",
    description:
      "Residential and commercial cleaning solutions delivered with attention to detail and professional care.",
    icon: FaShieldAlt,
  },
  {
    title: "TV Mounting",
    description:
      "Professional TV wall mounting services for all screen sizes with secure installation and clean cable management.",
    icon: FaStar,
  },
  {
    title: "Same-Day Service",
    description:
      "Fast and reliable same-day appointments designed to get your installation completed without delays.",
    icon: FaClock,
  },
  {
    title: "Pre-Project Advice",
    description:
      "Expert guidance on placement, mounting options, and setup recommendations before any work begins.",
    icon: FaTools,
  },
  {
    title: "Additional Services",
    description:
      "Painting, flooring, electrical assistance, handyman services, and more from one trusted team.",
    icon: FaAward,
  },
  {
    title: "Complete Solutions",
    description:
      "From installation and setup to cleanup and finishing touches, we go beyond the basics.",
    icon: FaCheckCircle,
  },
];

function FeatureCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              group

              bg-white
              

              border
              border-gray-200
              

              rounded-2xl

              p-8

              min-h-[280px]

              flex
              flex-col
              items-center
              justify-center

              transition-all
              duration-500

              hover:-translate-y-4
              hover:scale-105

              hover:border-[#D4AF37]

              hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)]
            "
          >
            <div
              className="
                w-16
                h-16

                rounded-full

                bg-[#D4AF37]/10

                flex
                items-center
                justify-center

                mb-6

                transition-all
                duration-300

                group-hover:bg-[#D4AF37]
              "
            >
              <Icon
                className="
                  text-[#D4AF37]
                  text-2xl

                  group-hover:text-black
                  transition
                "
              />
            </div>

            <h3
              className="
                text-xl
                font-semibold

                text-center

                text-black
                

                mb-4
              "
            >
              {card.title}
            </h3>

            <p
              className="
                text-center

                text-gray-600
               

                leading-relaxed
              "
            >
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureCard;