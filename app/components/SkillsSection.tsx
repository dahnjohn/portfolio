"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  const [selectedStack, setSelectedStack] = useState<
    | "languages"
    | "libraries"
    | "frameworks"
    | "stateManagement"
    | "styling"
    | "api"
    | "versionControl"
    | "developerTools"
    | null
  >(null);
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#161B22] ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">
          Technical Expertise
        </h2>

        <div className="space-y-8 sm:space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Programming Languages Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "languages"
                    ? "bg-blue-500/20 border-blue-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("languages")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
                  Programming Languages
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    JavaScript (ES6+)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    TypeScript
                  </li>
                </ul>
              </div>

              {/*  Technologies & Libraries Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "libraries"
                    ? "bg-purple-500/20 border-purple-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("libraries")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">
                  Technologies & Libraries
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    React Native
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    React.js
                  </li>
                </ul>
              </div>

              {/* Frameworks Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "frameworks"
                    ? "bg-teal-500/20 border-teal-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("frameworks")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">
                  Frameworks
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Expo (React Native)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Next.js (React)
                  </li>
                </ul>
              </div>

              {/* State Management Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "stateManagement"
                    ? "bg-yellow-500/20 border-yellow-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("stateManagement")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">
                  State Management
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    Zustand
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                    Redux
                  </li>
                </ul>
              </div>

              {/* Styling Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "styling"
                    ? "bg-red-500/20 border-red-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("styling")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-red-400">
                  Styling Tools & UI Libraries
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    React Native Paper
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    Shadcn UI
                  </li>
                </ul>
              </div>

              {/* API & Data Handling Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "api"
                    ? "bg-green-500/20 border-green-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("api")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-400">
                  API & Data Handling
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    TanStack Query (React Query)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Axios
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Fetch API
                  </li>
                </ul>
              </div>

              {/* Version Control Systems */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "versionControl"
                    ? "bg-teal-500/20 border-teal-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("versionControl")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">
                  Version Control Systems
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Git
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    GitHub
                  </li>

                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    GitLab
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Bitbucket
                  </li>
                </ul>
              </div>

              {/* Developer Tools */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "developerTools"
                    ? "bg-purple-500/20 border-purple-500/50"
                    : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("developerTools")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">
                  Developer Tools
                </h3>

                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Cursor (AI-powered code editor)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Visual Studio Code (VS Code)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Postman
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                    Figma (UI/UX design, prototyping)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
