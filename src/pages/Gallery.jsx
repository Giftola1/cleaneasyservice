import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Import images properly (IMPORTANT for Vite)
import img1 from "../assets/IMG_1255.jpg";
import img2 from "../assets/IMG_1256.jpeg";
import img3 from "../assets/IMG_1257.jpeg";
import img4 from "../assets/IMG_1258.jpeg";
import img5 from "../assets/IMG_1259.jpeg";
import img6 from "../assets/IMG_1260.jpeg";
import img7 from "../assets/IMG_1261.jpeg";
import img8 from "../assets/IMG_1262.jpeg";
import img9 from "../assets/IMG_1263.jpeg";
import img10 from "../assets/IMG_1264.jpg";
import img11 from "../assets/IMG_1265.jpeg";
import img12 from "../assets/IMG_1266.jpeg";
import img13 from "../assets/IMG_1269.jpeg";
import img14 from "../assets/IMG_1276.jpeg";
import img15 from "../assets/IMG_1277.jpeg";
import img16 from "../assets/IMG_1278.jpeg";

function Gallery() {
  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
    img13, img14, img15, img16,
  ];

  return (
    <>
      <Navbar />

      <section className="py-28 bg-white dark:bg-[#0A0A0A] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm">
              Gallery
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-4 text-black dark:text-white">
              Our Recent Work
            </h1>

            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Explore some of our recent cleaning and installation projects.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-2xl
                  cursor-pointer
                  group
                "
              >
                <img
                  src={image}
                  alt="Project"
                  className="
                    w-full
                    h-[360px]
                    object-cover

                    transition-all
                    duration-500

                    group-hover:scale-110
                  "
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;