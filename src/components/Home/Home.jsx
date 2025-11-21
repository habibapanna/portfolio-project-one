import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import About from "../Components/About";
import Pricing from "../Components/Pricing";
import Process from "../Components/Process";

const Home = () => {


const faqs = [
{ q: 'How can I hire you?', a: 'Use the contact form or email to discuss scope, timeline and budget.' },
{ q: 'Do you work with teams?', a: 'Yes — I integrate into product teams and handover clean specs.' },
{ q: 'What tools do you use?', a: 'Figma, FigJam, Framer, and basic React for prototypes.' },
];

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

<section id="faq" className="py-16">
<div className="max-w-4xl mx-auto px-6">
<h4 className="text-2xl font-semibold text-center">Questions? Answers!</h4>
<div className="mt-6 space-y-4">
{faqs.map((f) => (
<details key={f.q} className="bg-white p-4 rounded-md shadow">
<summary className="font-medium cursor-pointer">{f.q}</summary>
<p className="mt-2 text-gray-600">{f.a}</p>
</details>
))}
</div>
</div>
</section>

<section id="testimonials" className="py-16 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h4 className="text-2xl font-semibold text-center">Hear from Satisfied Clients</h4>
<div className="mt-8 grid sm:grid-cols-2 gap-6">
{t.map((item) => (
<div key={item.name} className="bg-slate-50 p-6 rounded-xl shadow">
<div className="font-semibold">{item.name}</div>
<div className="text-sm text-gray-600 mt-2">{item.quote}</div>
</div>
))}
</div>
</div>
</section>
<section id="contact" className="py-16 bg-slate-100">
<div className="max-w-4xl mx-auto px-6">
<h4 className="text-2xl font-semibold text-center">Get In Touch</h4>
<p className="text-center text-gray-600 mt-2">Let's discuss your project and how I can help.</p>


<form className="mt-6 grid gap-4">
<input className="p-3 rounded-md border" placeholder="Your name" />
<input className="p-3 rounded-md border" placeholder="Email" />
<textarea className="p-3 rounded-md border" rows={4} placeholder="Message" />
<div className="flex gap-3">
<button type="submit" className="px-4 py-2 rounded-md bg-slate-800 text-white">Send Message</button>
<button type="button" className="px-4 py-2 rounded-md border">Download Proposal</button>
</div>
</form>
</div>
</section>

    </section>
  );
};

export default Home;
