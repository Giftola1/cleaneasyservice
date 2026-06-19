import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Michael A.",
    review:
      "Excellent service from start to finish. Professional, punctual, and the results exceeded expectations.",
  },
  {
    name: "Sarah T.",
    review:
      "It was very nice working with clean easy services. My house is very clean now thanks to Clean easy service",
  },
  {
    name: "James R.",
    review:
      "Outstanding attention to detail and fantastic customer service. Highly recommended.",
  },
];

function Reviews() {
  return (
    <section
      id="reviews"
      className="
        py-28
        bg-white
        
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
            Testimonials
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
            What Our Clients Say
          </h2>

          <p
            className="
              text-gray-900
              
              mt-4
            "
          >
            Trusted by homeowners and businesses across
            London and Hertfordshire.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="
                group

                bg-gray-50
             

                border
                border-gray-200
                

                rounded-3xl
                p-8

                transition-all
                duration-500

                hover:border-[#D4AF37]
                hover:-translate-y-3

                hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]
              "
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p
                className="
                  mt-6
                  leading-relaxed

                  text-gray-600
                
                "
              >
                "{review.review}"
              </p>

              {/* Customer */}
              <div className="mt-8">
                <h4
                  className="
                    font-semibold
                    text-black
                   
                  "
                >
                  {review.name}
                </h4>

                <p className="text-sm text-[#D4AF37]">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Box */}
        <div
          className="
            mt-16

            bg-gray-50
           

            border
            border-gray-200
            

            rounded-3xl

            p-8

            text-center
          "
        >
          <div className="flex justify-center gap-1 text-[#D4AF37] text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <h3
            className="
              mt-4
              text-3xl
              font-bold

              text-black
             
            "
          >
            5.0 Average Rating
          </h3>

          <p
            className="
              mt-3

              text-gray-600
             
            "
          >
            Based on customer satisfaction and quality service.
          </p>

          <button
            className="
              mt-8

              bg-[#D4AF37]
              text-black

              px-8
              py-4

              rounded-full

              font-semibold

              transition-all
              duration-300

              hover:scale-105
            "
          >
            <a
  href="https://g.page/r/CTx0C3sHVkntEAI/review"
  target="_blank"
  rel="noopener noreferrer"
  className="
    border border-[#D4AF37]
    text-[#000]
    px-8 py-4
    rounded-full
    hover:bg-[#D4AF37]
    hover:text-black
    transition
  "
>
  View Google Reviews
</a>
            
          </button>
        </div>

      </div>
    </section>
  );
}

export default Reviews;