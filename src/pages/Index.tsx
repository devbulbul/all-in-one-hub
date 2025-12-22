import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Digital Seva CSC Centre | Xerox, Printing, Travel Booking & Online Services</title>
        <meta 
          name="description" 
          content="Your one-stop digital service hub for Xerox, photo printing, PVC cards, flight, train & bus booking, hotel reservations, job applications, and certificate services." 
        />
        <meta name="keywords" content="CSC centre, Xerox, printing, photo printing, PVC card, flight booking, train booking, bus booking, hotel booking, job apply, certificate apply, online services" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
