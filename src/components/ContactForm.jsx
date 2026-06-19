import emailjs from "@emailjs/browser";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_euyfur9",
        "template_6ykcj3c",
        formData,
        "RAlBojpfvXmbVNy-p"
      );

      setSuccess("success");

      setTimeout(() => {
        setSuccess(null);
      }, 3000);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSuccess("error");

      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="
        py-28
        px-6
        bg-aliceblue
        
      "
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Contact Us
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              text-black
              
            "
          >
            Let's Discuss Your Project
          </h2>

          <p
            className="
              text-gray-600
             
              mt-4
            "
          >
            Get in touch and we'll help bring your
            project to life.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            bg-gray-50
            

            border
            border-gray-200
           

            backdrop-blur-md
            rounded-3xl
            p-8
            md:p-10
          "
        >
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="
                bg-white
                text-black
              

                border
                border-gray-300
             

                rounded-xl
                p-4

                outline-none
                focus:border-[#D4AF37]

                transition
              "
            />

            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="
                bg-white
              

                border
                border-gray-300
               

                rounded-xl
                p-4

                outline-none
                focus:border-[#D4AF37]

                transition
              "
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="
                bg-white
               
                border
                border-gray-300
              

                rounded-xl
                p-4

                outline-none
                focus:border-[#D4AF37]

                transition
              "
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="
                bg-white
               

                border
                border-gray-300
               

                rounded-xl
                p-4

                outline-none
                focus:border-[#D4AF37]

                transition
              "
            />
          </div>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
            className="
              w-full
              mt-6

              bg-white
            
              border
              border-gray-300
             

              rounded-xl
              p-4

              outline-none
              resize-none

              focus:border-[#D4AF37]

              transition
            "
          />

          <button
            type="submit"
            className="
              mt-6

              bg-[#D4AF37]
              text-black

              px-8
              py-4

              rounded-xl
              font-semibold

              transition-all
              duration-300

              hover:scale-105
            "
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Success/Error Toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            className={`
              fixed
              top-6
              right-6
              z-[9999]

              px-6
              py-4

              rounded-xl

              font-medium
              shadow-xl

              ${
                success === "success"
                  ? "bg-[#D4AF37] text-black"
                  : "bg-red-500 text-white"
              }
            `}
          >
            {success === "success" ? (
              <div className="flex items-center gap-2">
                <span>✅</span>
                <span>Message sent successfully!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>❌</span>
                <span>Failed to send message.</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ContactForm;