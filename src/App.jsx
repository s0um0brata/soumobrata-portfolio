import { useEffect } from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TechNetworkBackground from "./components/TechNetworkBackground/TechNetworkBackground";

import "./App.css";

// const networkNodes = [
//   // Frontend Development
//   { id: "react", name: "React.js", x: 180, y: 150 },
//   { id: "next", name: "Next.js", x: 430, y: 80 },
//   { id: "javascript", name: "JavaScript", x: 700, y: 150 },
//   { id: "html", name: "HTML5", x: 180, y: 400 },
//   { id: "css", name: "CSS3", x: 450, y: 430 },

//   // Backend Development
//   { id: "node", name: "Node.js", x: 950, y: 150 },
//   { id: "express", name: "Express.js", x: 1220, y: 280 },
//   { id: "api", name: "REST APIs", x: 950, y: 480 },
//   { id: "axios", name: "Axios", x: 1220, y: 650 },

//   // Database
//   { id: "mongodb", name: "MongoDB", x: 700, y: 720 },
//   { id: "mongoose", name: "Mongoose", x: 430, y: 850 },
// ];

// const networkConnections = [
//   // Frontend connections
//   ["react", "next"],
//   ["react", "javascript"],
//   ["react", "html"],
//   ["react", "css"],
//   ["next", "javascript"],
//   ["javascript", "css"],
//   ["html", "css"],

//   // Frontend to Backend
//   ["javascript", "node"],
//   ["react", "node"],

//   // Backend connections
//   ["node", "express"],
//   ["node", "api"],
//   ["express", "api"],
//   ["api", "axios"],
//   ["express", "axios"],

//   // Backend to Database
//   ["node", "mongodb"],
//   ["express", "mongodb"],
//   ["mongodb", "mongoose"],
//   ["mongoose", "node"],
// ];

// function TechNetworkBackground() {
//   const nodeMap = Object.fromEntries(
//     networkNodes.map((node) => [node.id, node]),
//   );

//   return (
//     <div className="tech-network-background" aria-hidden="true">
//       <svg
//         viewBox="0 0 1440 1000"
//         preserveAspectRatio="xMidYMid slice"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <radialGradient id="networkGlow">
//             <stop offset="0%" stopColor="var(--network-glow)" />
//             <stop offset="100%" stopColor="transparent" />
//           </radialGradient>
//         </defs>

//         <ellipse cx="720" cy="500" rx="650" ry="500" fill="url(#networkGlow)" />

//         {/* CONNECTION LINES */}
//         <g className="network-lines">
//           {networkConnections.map(([from, to], index) => {
//             const start = nodeMap[from];
//             const end = nodeMap[to];

//             return (
//               <line
//                 key={`${from}-${to}`}
//                 x1={start.x}
//                 y1={start.y}
//                 x2={end.x}
//                 y2={end.y}
//                 style={{ animationDelay: `${index * 0.12}s` }}
//               />
//             );
//           })}
//         </g>

//         {/* TECHNOLOGY NODES */}
//         <g className="network-nodes">
//           {networkNodes.map((node, index) => (
//             <g
//               key={node.id}
//               className="network-node"
//               style={{ animationDelay: `${index * 0.15}s` }}
//             >
//               <circle
//                 cx={node.x}
//                 cy={node.y}
//                 r="3"
//                 className="network-node-dot"
//               />

//               <circle
//                 cx={node.x}
//                 cy={node.y}
//                 r="10"
//                 className="network-node-halo"
//               />

//               <g className="network-label">
//                 <rect
//                   x={node.x + 12}
//                   y={node.y - 13}
//                   width={node.name.length * 7 + 16}
//                   height="26"
//                   rx="6"
//                 />

//                 <text x={node.x + 20} y={node.y + 4}>
//                   {node.name}
//                 </text>
//               </g>
//             </g>
//           ))}
//         </g>

//         {/* SMALL DECORATIVE PARTICLES */}
//         <g className="network-particles">
//           {Array.from({ length: 65 }, (_, index) => {
//             const x = (index * 173 + 47) % 1440;
//             const y = (index * 113 + 29) % 1000;

//             return (
//               <circle key={index} cx={x} cy={y} r={index % 5 === 0 ? 2 : 1.2} />
//             );
//           })}
//         </g>
//       </svg>
//     </div>
//   );
// }

function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`app theme-${theme}`}>
      <TechNetworkBackground />

      <div className="app-content">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
