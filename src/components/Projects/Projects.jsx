import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
// Projects Data With Categories
const projects = [
  {
    title: "LanderOS",
    category: "UI/UX",
    image: "https://framerusercontent.com/images/NYy4Z1Kiy9toMu38joQpmtpKtnA.png",
    logo: "https://framerusercontent.com/images/bj7nJMmzS4jreQmzbqBfJyxr7I.png",
  },
  {
    title: "Alter",
    category: "Branding",
    image: "https://framerusercontent.com/images/VJ4ysQpbqM4KTn5IhfGXgXXqOLU.png",
    logo: "https://framerusercontent.com/images/tE2qHcjwXtGHBnVyRjpGBqxeXQ.png",
  },
  {
    title: "Portfey",
    category: "Web Design",
    image: "https://framerusercontent.com/images/0LU5KyYVJZZzKzbwQ6vurSlBLLI.png",
    logo: "https://framerusercontent.com/images/iyffiKfMVaMVpKaqfQCvkNulc.png",
  },
  {
    title: "CourseSite",
    category: "UI/UX",
    image: "https://framerusercontent.com/images/yxT3t1sxNLpNqrnXq7nQCpltP4.png",
    logo: "https://framerusercontent.com/images/O7uiCh12Mk61bZ2OHe9qXtfFW0.png",
  },
];

// All categories
const categories = ["All", "UI/UX", "Branding", "Web Design", "Business", "E-commerce", "Real State", "Car", "Cleaning"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  // Filtering Logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Fade>
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
      {/* WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mx-auto">

        {/* --------------------------------
                LEFT SIDEBAR
        -------------------------------- */}
        <div className="lg:col-span-1 space-y-">

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 rounded-lg bg-white border shadow-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          {/* FILTER BUTTONS */}
          <div className="">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 transition rounded-lg ${
                  selectedCategory === cat
                    ? "bg-slate-200"
                    : "bg-white hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --------------------------------
                RIGHT SIDE CONTENT
        -------------------------------- */}
        <div className="lg:col-span-3">
             <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-slate-800">
          The Design Of Success
        </h1>

        {/* Trusted Section */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="flex -space-x-3">
            <img
              src="https://i.pravatar.cc/50?img=12"
              className="w-10 h-10 rounded-full border"
            />
            <img
              src="https://i.pravatar.cc/50?img=32"
              className="w-10 h-10 rounded-full border"
            />
            <img
              src="https://i.pravatar.cc/50?img=49"
              className="w-10 h-10 rounded-full border"
            />
            <img
              src="https://i.pravatar.cc/50?img=22"
              className="w-10 h-10 rounded-full border"
            />
          </div>
          <p className="text-gray-600 text-sm">
            Trusted by 5,000+ • Audience worldwide
          </p>

          <button className="px-5 py-2 bg-slate-900 text-white rounded-lg shadow hover:bg-slate-800 transition">
            Contact Me
          </button>
        </div>
      </div>

          {/* Selected Category Header */}
          <h2 className="text-2xl font-serif mb-6 text-slate-800">
            {selectedCategory === "All" ? "All Projects" : selectedCategory}
          </h2>

          {/* PROJECTS GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative rounded bg-white shadow-sm hover:shadow-xl transition overflow-hidden border border-gray-100"
              >
                <img
                  src={project.image}
                  className="w-full h-52 object-cover hover:scale-105 transition duration-500 border-none"
                />

                <div className="flex justify-between items-center px-4 py-3">
                  <h3 className="font-medium text-slate-700">{project.title}</h3>
                  <FiArrowUpRight className="text-gray-500 text-lg" />
                </div>

                <div className="absolute bottom-3 right-3 bg-white px-2 py-1 rounded shadow">
                  <img src={project.logo} className="w-10" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* IF NOTHING FOUND */}
          {filteredProjects.length === 0 && (
            <p className="text-gray-500 text-center mt-10">No projects found.</p>
          )}
        </div>
      </div>
    </section>
      </Fade>
    </div>
  );
};

export default Projects;
