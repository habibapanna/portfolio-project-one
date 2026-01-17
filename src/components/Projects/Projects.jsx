import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import { RiArrowRightUpFill } from "react-icons/ri";

// Projects Data With Categories
const projects = [
  {
    title: "Alter",
    category: "Branding",
    image: "https://framerusercontent.com/images/tWaZY7WBmJ3rT5y8Tc6cmJefJk.jpeg",
  },
  {
    title: "Portfey",
    category: "Web Design",
    image: "https://framerusercontent.com/images/luuFCS3wrDtTqDV4Kd1Adkkk.jpg",
  },
  {
    title: "CourseSite",
    category: "UI/UX",
    image: "https://framerusercontent.com/images/jQO0HIIQMx84s1lMLD7tOLhn9pc.png",
  },
  {
    title: "CourseSite",
    category: "UI/UX",
    image: "https://framerusercontent.com/images/jQO0HIIQMx84s1lMLD7tOLhn9pc.png",
  },
  {
    title: "CourseSite",
    category: "UI/UX",
    image: "https://framerusercontent.com/images/qaXP9CBTkpCNVvyTQ6Uxc8kN5ts.png",
  },
  {
    title: "LanderOS",
    category: "UI/UX",
    image: "https://framerusercontent.com/images/tWaZY7WBmJ3rT5y8Tc6cmJefJk.jpeg",
  },
];

// All categories
const categories = ["All", "UI/UX", "Branding", "Web Design", "Business", "E-commerce", "Real State", "Car", "Cleaning"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Counter state
  const [trustedCount, setTrustedCount] = useState(0);
  const targetCount = 5000;

  // Animate the trusted counter
  useEffect(() => {
    setTrustedCount(0); // reset on mount
    let start = 0;
    const duration = 4000; // 2 seconds
    const increment = targetCount / (duration / 30); // update every 30ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        start = targetCount;
        clearInterval(counter);
      }
      setTrustedCount(Math.floor(start));
    }, 30);

    return () => clearInterval(counter);
  }, []);

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch = project.title.toLowerCase().includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Fade>
        <section className="h-screen bg-violet-100 overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">

    {/* LEFT SIDEBAR (SCROLLS ALONE) */}
    <div className="lg:col-span-1 h-full overflow-y-auto space-y-2 px-2">

      <input
        type="text"
        placeholder="Search projects..."
        className="w-full px-4 py-2 rounded-lg bg-white border shadow-sm mb-5"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="space-y-5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`w-full text-left px-4 py-2 rounded-lg transition ${
              selectedCategory === cat
                ? "bg-violet-400 text-white"
                : "bg-violet-50 hover:bg-violet-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* RIGHT CONTENT (SCROLLS ALONE) */}
    <div className="lg:col-span-2 h-full overflow-y-auto px-2">

      <h2 className="text-2xl mb-6 text-slate-800 font-semibold">
        {selectedCategory === "All" ? "All Projects" : selectedCategory}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="rounded-xl overflow-hidden shadow-sm pt-5 pb-16 px-5 bg-violet-100 border border-gray-300 cursor-pointer"
          >
            <img
              src={project.image}
              className="w-full h-64 object-cover rounded-xl"
            />

            <div className="flex justify-between items-center px-4 py-3">
              <h3 className="font-medium text-slate-700">
                {project.title}
              </h3>
              <FiArrowUpRight className="text-gray-500 text-lg" />
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No projects found.
        </p>
      )}
    </div>

  </div>
</section>

      </Fade>
    </div>
  );
};

export default Projects;
