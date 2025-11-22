import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";
import Faq from "../Components/Faq";

const Home = () => {

const t = [
{ name: 'NeuroScope', role: 'Client', quote: 'Outstanding product design, improved our metrics.' },
{ name: 'NovaWorks', role: 'Client', quote: 'Creative and efficient — highly recommended.' },
];

  return (
    <section className="bg-violet-100">
   <Hero></Hero>

<Services></Services>

<About></About>

<Pricing></Pricing>

<Process></Process>

<Faq></Faq>


    </section>
  );
};

export default Home;
