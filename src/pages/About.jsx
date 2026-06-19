
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import firstImg from "../assets/IMG_1258.jpeg";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Experienced Professionals",
    description:
      "We take pride in being dependable, respectful, and committed to delivering exceptional service on every project. We provide solutions tailored to every environment.",
  },
  {
    title: "Reliable & Punctual Service",
    description:
      "We show up on time, communicate clearly, and complete every project with professionalism and care.",
  },
  {
    title: "Customer-Centered Service",
    description:
      "Through hard work, attention to detail, and a commitment to excellence, we have built a reputation for reliability and customer satisfaction.",
  },
];

function About() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="mt-24 max-w-7xl mx-auto px-6 py-18 grid md:grid-cols-2 gap-16 items-center">
        <div className="lg:w-full">
          <h2 className="text-5xl font-bold text-black">
            Elevating Spaces Through Quality Service
          </h2>

          <p className="text-gray-900 py-8">
            We are a professional cleaning and installation company dedicated to
            delivering reliable, high-quality services for homes, offices, and
            commercial properties across London and Hertfordshire.

            Our team takes pride in providing exceptional workmanship, attention
            to detail, and outstanding customer service. Whether it's
            maintaining spotless spaces or carrying out precise installations,
            we approach every project with professionalism and care.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={firstImg}
            alt="Installation"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>

      {/* INTRO TEXT */}
      <div className="text-center text-xl font-bold py-24 px-10 text-black">
        <p>
          At Clean Easy Service, we believe that every space deserves the
          highest standard of care. From professional cleaning services to
          expert installations, our mission is to deliver results that exceed
          expectations.

          We combine experience, reliability, and attention to detail to ensure
          every project is completed to the highest standard. Our commitment to
          customer satisfaction has helped us build lasting relationships with
          homeowners, businesses, and property managers throughout London and
          Hertfordshire.
        </p>
      </div>

      {/* WHO WE ARE + MISSION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-13 py-20">
        <div
          className="
            rounded-3xl
            p-8
            bg-aliceblue
            border
            border-gray-200
           
          "
        >
          <h2 className="text-4xl font-bold text-black">
            Who We Are
          </h2>

          <p className="text-gray-900  mt-6">
            We are a professional cleaning and installation company serving
            homes, offices, and commercial properties across London and
            Hertfordshire.

            Our team is committed to delivering reliable, high-quality services
            with attention to detail and customer satisfaction at the heart of
            everything we do. Whether it's maintaining clean spaces or carrying
            out precise installations, we take pride in providing results our
            clients can trust.
          </p>
        </div>

        <div
          className="
            rounded-3xl
            p-8
            bg-[#F8F8F8]
            border
            border-gray-200
            dark:border-white/10
          "
        >
          <h2 className="text-4xl font-bold text-black">
            Our Mission
          </h2>

          <p className="text-gray-700  mt-6">
            Our mission is to provide dependable cleaning and installation
            services that improve the comfort, appearance, and functionality of
            every space we work in.

            We strive to deliver exceptional results through professionalism,
            quality workmanship, and a commitment to exceeding our clients'
            expectations on every project.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-13 py-13">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="
              group
              rounded-3xl
              p-8
              border

              bg-white
              
              border-gray-200
             

              transition-all
              duration-500

              hover:scale-105
              hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
              hover:border-[#D4AF37]
              // hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]
            "
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white">
              {plan.title}
            </h3>

            <div className="mt-8">
              <p className="text-gray-900flex items-start gap-3">
                <FaCheck className="text-[#D4AF37] mt-1 flex-shrink-0" />
                {plan.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default About;
