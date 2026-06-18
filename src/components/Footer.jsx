import logoImg from "../assets/logos.PNG";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        bg-white
        dark:bg-[#070707]

        border-t
        border-gray-200
        dark:border-white/10

        py-16
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <img
              src={logoImg}
              alt="CleanEasyService Logo"
              className="h-20 w-auto object-contain"
            />

            <p
              className="
                text-gray-600
                dark:text-gray-400

                mt-4
                leading-relaxed
              "
            >
              Premium cleaning and installation services for homes,
              offices, and commercial spaces across London and
              Hertfordshire. Delivering spotless results with precision
              and care.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3
              className="
                font-semibold
                mb-4

                text-black
                dark:text-white
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a className="text-gray-600 dark:text-gray-400 hover:text-[#D4AF37]" href="/">
                  Home
                </a>
              </li>

              <li>
                <a className="text-gray-600 dark:text-gray-400 hover:text-[#D4AF37]" href="/about">
                  About Us
                </a>
              </li>

              <li>
                <a className="text-gray-600 dark:text-gray-400 hover:text-[#D4AF37]" href="/price">
                  Service
                </a>
              </li>
            </ul>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6 text-xl text-gray-600 dark:text-gray-400">
              <a
                href="https://www.facebook.com/share/1BW7q5KqVo/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37]"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37]"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>07867815449</li>
              <li>Cleaneasyservicess@gmail.com</li>
              <li>Hatfield, Hertfordshire</li>
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Business Hours
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>Monday - Saturday</li>
              <li>8:00 AM - 6:00 PM</li>
              <li>Sunday - Closed</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-gray-200
            dark:border-white/10

            mt-12
            pt-6

            text-center

            text-gray-500
            dark:text-gray-500
          "
        >
          © 2026 CleanEasyService. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;