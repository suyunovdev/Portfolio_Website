"use client";

import React, { useEffect, useState } from "react";

const Project = () => {
  const [repos, setRepos] = useState([]);
  const GITHUB_USERNAME = "suyunovdev"; // Your GitHub username

  // Fetch GitHub Repos
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchRepos();
  }, []);

  const getVercelLink = (repoName) => {
    return `https://${repoName}.vercel.app`;
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gradient-to-b from-gray-100 via-white to-gray-100">
      <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 max-w-6xl">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h2>
              <p className="text-gray-600 mb-4">
                {repo.description
                  ? repo.description
                  : "No description available"}
              </p>

              {/* Vercel Link */}
              <a
                href={getVercelLink(repo.name)}
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
                  {repo.language ? repo.language : "N/A"}
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
                    {repo.forks_count}
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
                    {repo.stargazers_count}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Loading repositories...</p>
        )}
      </div>
    </div>
  );
};

export default Project;
