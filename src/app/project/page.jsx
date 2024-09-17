"use client";

import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    img: "https://eu-cap-network.ec.europa.eu/sites/default/files/styles/full_width_mobile_1080/public/2023-12/european-countries-map.jpg.webp?itok=w6W8hFy_",
    name: "Countries Data",
    description: "This is here all countries data",
    url: "https://github.com/your-repo/project-one",
    liveUrl: "https://5-month-exam-countrys-data.vercel.app",
    language: "HTML5, CSS3, JavaScript",
    forks: 10,
    stars: 50,
  },
  {
    id: 1,
    img: "https://imageio.forbes.com/specials-images/imageserve/645a6199d5763cb1782796dd/Spotify-Will-Cut-About-6--Of-Jobs-In-Latest-Tech-Layoffs/0x0.jpg?crop=4000,2251,x0,y0,safe&height=400&width=711&fit=bounds",
    name: "Spotify Clone",
    description: "Description for Project One",
    url: "https://github.com/your-repo/project-one",
    liveUrl: "https://project-one.vercel.app",
    language: "React JS, Tailwind CSS",
    forks: 10,
    stars: 50,
  },
  {
    id: 1,
    img: "https://imageio.forbes.com/specials-images/imageserve/645a6199d5763cb1782796dd/Spotify-Will-Cut-About-6--Of-Jobs-In-Latest-Tech-Layoffs/0x0.jpg?crop=4000,2251,x0,y0,safe&height=400&width=711&fit=bounds",
    name: "Spotify Clone",
    description: "Description for Project One",
    url: "https://github.com/your-repo/project-one",
    liveUrl: "https://project-one.vercel.app",
    language: "React JS, Tailwind CSS",
    forks: 10,
    stars: 50,
  },
  {
    id: 1,
    img: "https://imageio.forbes.com/specials-images/imageserve/645a6199d5763cb1782796dd/Spotify-Will-Cut-About-6--Of-Jobs-In-Latest-Tech-Layoffs/0x0.jpg?crop=4000,2251,x0,y0,safe&height=400&width=711&fit=bounds",
    name: "Spotify Clone",
    description: "Description for Project One",
    url: "https://github.com/your-repo/project-one",
    liveUrl: "https://project-one.vercel.app",
    language: "React JS, Tailwind CSS",
    forks: 10,
    stars: 50,
  },
  {
    id: 1,
    img: "https://imageio.forbes.com/specials-images/imageserve/645a6199d5763cb1782796dd/Spotify-Will-Cut-About-6--Of-Jobs-In-Latest-Tech-Layoffs/0x0.jpg?crop=4000,2251,x0,y0,safe&height=400&width=711&fit=bounds",
    name: "Spotify Clone",
    description: "Description for Project One",
    url: "https://github.com/your-repo/project-one",
    liveUrl: "https://project-one.vercel.app",
    language: "React JS, Tailwind CSS",
    forks: 10,
    stars: 50,
  },
  {
    id: 2,
    img: "https://kslux.uz/upload/iblock/d4a/apdn7g0g8md1gnt77r7v1johqjpiqr9d/photo_2022-01-16_22-40-20.jpg",
    name: "Project Two",
    description: "Description for Project Two",
    url: "https://github.com/your-repo/project-two",
    liveUrl: "https://project-two.vercel.app",
    language: "TypeScript",
    forks: 20,
    stars: 100,
  },
];

const Project = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a data fetch with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 max-w-6xl">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              {project.img && (
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
              )}
              <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Vercel Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold py-2 px-4 rounded-full hover:from-indigo-500 hover:to-purple-600 transition-colors duration-300 mb-4"
              >
                View Live on Vercel
              </a>

              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 mr-1 text-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v7l5-5-5-5z"
                    />
                  </svg>
                  {project.language}
                </span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                    {project.forks}
                  </span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 mr-1 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8.5l3.5 3.5m-7-3.5L12 12l3.5-3.5L12 5l-3.5 3.5z"
                      />
                    </svg>
                    {project.stars}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Project;
