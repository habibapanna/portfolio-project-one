import React from "react";
import Hero from "../Components/Hero";

const Home = () => {
const features = [
{ title: 'Interactive Web Experiences', desc: 'Designs that feel alive, fast and accessible.' },
{ title: 'Design & Creativity', desc: 'Brand-first designs, systems and UI libraries.' },
{ title: 'Product Strategy', desc: 'Research-backed decisions and measurable outcomes.' },
];


const steps = [
{ title: 'Discovery', desc: 'Research, stakeholders, and success metrics.' },
{ title: 'Design', desc: 'Wireframes, UI, and interactive prototypes.' },
{ title: 'Deliver', desc: 'Handover, assets, and post-launch support.' },
];


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
    <section>
   <Hero></Hero>

      <section id="features" className="py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center">
<h2 className="text-3xl font-semibold">Crafting Digital Excellence</h2>
<p className="mt-3 text-gray-600 max-w-2xl mx-auto">Building meaningful engaging digital interfaces for brands and products.</p>
</div>


<div className="mt-8 grid md:grid-cols-3 gap-6">
{features.map((f) => (
<div key={f.title} className="bg-white p-6 rounded-xl shadow">
<div className="text-lg font-semibold">{f.title}</div>
<p className="mt-2 text-gray-500">{f.desc}</p>
</div>
))}
</div>
</div>
</section>

<section id="about" className="py-16">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 items-center">
<div className="col-span-1">
<img src="https://i.pravatar.cc/320?img=47" alt="Sophie" className="rounded-2xl shadow-lg" />
</div>
<div className="md:col-span-2">
<h4 className="text-2xl font-semibold">About Sophie Carter</h4>
<p className="mt-3 text-gray-600 max-w-2xl">I’m a product designer focused on creating useful and delightful user interfaces. I enjoy designing responsive apps, design systems, and product workflows that put users first.</p>


<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg shadow">
<div className="text-sm text-gray-500">Experience</div>
<div className="font-semibold">6+ years</div>
</div>
<div className="bg-white p-4 rounded-lg shadow">
<div className="text-sm text-gray-500">Location</div>
<div className="font-semibold">Remote (Europe / GMT+6)</div>
</div>
</div>


<div className="mt-6 flex gap-3">
<a href="#contact" className="px-4 py-2 rounded-md bg-slate-800 text-white">Contact</a>
<a className="px-4 py-2 rounded-md border">Download CV</a>
</div>
</div>
</div>
</section>

<section id="pricing" className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<h3 className="text-2xl font-semibold">Precision vs Basic</h3>
<p className="mt-2 text-gray-500">Choose the right engagement model for your project.</p>


<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl border">
<div className="font-semibold">Basic</div>
<div className="mt-4 text-gray-600">Starter package for small MVPs and landing pages.</div>
<ul className="mt-4 text-sm text-gray-600 space-y-2">
<li>- 3 screens design</li>
<li>- Basic prototyping</li>
<li>- 1 revision round</li>
</ul>
<div className="mt-6">
<a className="px-4 py-2 rounded-md border">Choose Basic</a>
</div>
</div>


<div className="p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white">
<div className="font-semibold">Precision</div>
<div className="mt-4 text-gray-200">Full product design, systems, and long-term collaboration.</div>
<ul className="mt-4 text-sm text-gray-200 space-y-2">
<li>- End-to-end product design</li>
<li>- Design system & components</li>
<li>- Unlimited revisions (time-boxed)
</li>
</ul>
<div className="mt-6">
<a className="px-4 py-2 rounded-md bg-white text-slate-900">Choose Precision</a>
</div>
</div>
</div>
</div>
</section>

<section id="process" className="py-16 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<h3 className="text-2xl font-semibold text-center">From Vision to Execution</h3>
<div className="mt-8 grid md:grid-cols-3 gap-6">
{steps.map((s) => (
<div key={s.title} className="bg-white p-6 rounded-xl shadow">
<div className="font-semibold">{s.title}</div>
<div className="mt-2 text-sm text-gray-500">{s.desc}</div>
</div>
))}
</div>
</div>
</section>

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
