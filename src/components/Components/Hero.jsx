import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Hero = () => {
    const items = new Array(6).fill(0).map((_, i) => ({
title: `Project ${i + 1}`,
subtitle: 'Product design, UI/UX',
img: `https://picsum.photos/seed/portfolio-${i}/800/600`,
}));
  return (
    <div>
        <section
      id="home"
      className="bg-violet-100 pt-20"
    >
      <div className="mx-auto px-6 text-center">
        {/* HEADING WITH IMAGES */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 flex flex-col items-center gap-2"
        >
          {/* LINE 1 */}
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded object-cover"
              src="https://framerusercontent.com/images/F8rOBHbbIkzGRluKefWlxCX9WI.png?scale-down-to=512&width=1200&height=1200"
              alt=""
            />
            <span className="text-3xl md:text-7xl">I'm Sanwar Hosen Limon</span>
          </div>

          {/* LINE 2 */}
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-7xl">Remote Designer</span>

            {/* IMAGE 1 */}
            <img
              className="h-12 w-12 rounded object-cover"
              src="https://framerusercontent.com/images/F8rOBHbbIkzGRluKefWlxCX9WI.png?scale-down-to=512&width=1200&height=1200"
              alt=""
            />

            {/* IMAGE 2 */}
            <img
              className="h-12 w-12 rounded object-cover"
              src="https://framerusercontent.com/images/XJP6N21SKyA8OD0sTiV9H2m0.jpg?scale-down-to=1024&width=900&height=1200"
              alt=""
            />
          </div>
        </motion.h1>

        {/* PARAGRAPH */}
        <p className="mt-6 text-gray-600 max-w-xl mx-auto">
          I specialize in clean beautiful product and web interfaces — designing
          delightful experiences across brands. I craft high-fidelity designs,
          prototypes, and accessible systems.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md bg-slate-800 text-white text-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md border bg-slate-300 text-sm shadow-2xl"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>

{/* Projects */}
<section id="projects" className="bg-violet-100 py-12 overflow-hidden">
  <div className="mx-auto px-6">
    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {items.concat(items).map((p, i) => (
        <article
          key={i}
          className="border rounded-xl overflow-hidden shadow min-w-[300px] p-5 bg-violet-100"
        >
          <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded-xl" />
        </article>
      ))}
    </motion.div>
  </div>
</section>
    </div>

  );
};

export default Hero;
