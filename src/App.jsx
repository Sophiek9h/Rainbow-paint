import { ContactUs } from "./components/ContactUs/ContactUs";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Ourpartners } from "./components/OurPartners/Ourpartners";
import { Services } from "./components/Services/Services";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Ourpartners />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
