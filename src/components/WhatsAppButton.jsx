import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "07867815449"; // replace with your brother's number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50

        bg-green-500
        w-16
        h-16

        rounded-full

        flex
        items-center
        justify-center

        text-white
        text-3xl

        shadow-lg

        transition-all
        duration-300

        hover:scale-110
      "
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;



