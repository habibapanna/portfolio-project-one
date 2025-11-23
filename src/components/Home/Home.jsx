import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Faq from "../Components/Faq";

const Home = () => {

  return (
    <section className="bg-violet-100">
   <section id="home"><Hero /></section>
<section id="services"><Services /></section>
<section id="about"><About /></section>
<section id="pricing"><Pricing /></section>
<section id="process"><Process /></section>
<section id="faq"><Faq /></section>


    </section>
  );
};

export default Home;
