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
