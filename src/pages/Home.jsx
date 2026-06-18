import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Service from "../components/Service";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Pricing from "../components/Pricing";
import WhatsAppButton from "../components/WhatsAppButton";
import Reviews from "../components/Reviews";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service/>
      <Stats />
         <Reviews/>
      <ContactForm />
     <Footer />
     <WhatsAppButton/>
    </>
  );
}

export default Home;