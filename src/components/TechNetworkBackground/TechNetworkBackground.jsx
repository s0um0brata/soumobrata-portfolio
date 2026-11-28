import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Background height compared with the screen. 1.8 = 180% of the screen.
const LAYER_SCALE = 1.8;
const MOBILE_BREAKPOINT = 700;

// x and y are positions on a 1440 x 1000 design grid
const networkNodes = [
  { id: "react", name: "React.js", x: 120, y: 110 },
  { id: "next", name: "Next.js", x: 340, y: 65 },
  { id: "redux", name: "Redux", x: 560, y: 150 },
  { id: "javascript", name: "JavaScript", x: 790, y: 80 },
  { id: "node", name: "Node.js", x: 1050, y: 155 },
  { id: "express", name: "Express.js", x: 1280, y: 75 },

  { id: "html", name: "HTML5", x: 180, y: 360 },
  { id: "css", name: "CSS3", x: 430, y: 310 },
  { id: "vite", name: "Vite", x: 690, y: 390 },
  { id: "mongodb", name: "MongoDB", x: 970, y: 340 },
  { id: "gemini", name: "Gemini API", x: 1240, y: 390 },

  { id: "web3", name: "Web3.js", x: 100, y: 620 },
  { id: "ethers", name: "Ethers.js", x: 370, y: 570 },
  { id: "wallet", name: "WalletConnect", x: 650, y: 650 },
  { id: "tailwind", name: "Tailwind CSS", x: 900, y: 590 },
  { id: "chatgpt", name: "ChatGPT", x: 1160, y: 650 },

  { id: "github", name: "GitHub", x: 260, y: 850 },
  { id: "postman", name: "Postman", x: 560, y: 900 },
  { id: "motion", name: "Motion", x: 870, y: 850 },
  { id: "api", name: "REST APIs", x: 1260, y: 900 },
];

const networkConnections = [
  ["react", "next"],
  ["react", "redux"],
  ["react", "javascript"],
  ["react", "html"],
  ["next", "redux"],
  ["next", "javascript"],
  ["redux", "javascript"],
  ["redux", "vite"],
  ["javascript", "node"],
  ["javascript", "css"],
  ["node", "express"],
  ["node", "mongodb"],
  ["node", "gemini"],
  ["express", "gemini"],
  ["html", "css"],
  ["html", "web3"],
  ["css", "vite"],
  ["css", "ethers"],
  ["vite", "mongodb"],
  ["vite", "wallet"],
  ["mongodb", "gemini"],
  ["mongodb", "tailwind"],
  ["web3", "ethers"],
  ["ethers", "wallet"],
  ["ethers", "github"],
  ["wallet", "tailwind"],
  ["wallet", "postman"],
  ["tailwind", "chatgpt"],
  ["chatgpt", "api"],
  ["github", "postman"],
  ["postman", "motion"],
  ["motion", "api"],
  ["node", "api"],
];

// Space between the node centre and the label: 12px max glow + 3px gap
const LABEL_GAP = 15;
// Space between the word and the border, on each side
const LABEL_PADDING = 6;

function NodeLabel({ node, screenWidth }) {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  // Measure the real width of the word (font size differs on mobile)
  useLayoutEffect(() => {
    setTextWidth(textRef.current.getComputedTextLength());
  }, [node.name, screenWidth]);

  const labelWidth = textWidth + LABEL_PADDING * 2;
  // Put the label on the left if it would go off screen
  const flip = node.px + LABEL_GAP + labelWidth > screenWidth - 8;
  const labelX = flip ? node.px - LABEL_GAP - labelWidth : node.px + LABEL_GAP;

  return (
    <g className="network-label">
      <rect x={labelX} y={node.py - 11} width={labelWidth} height="22" rx="6" />
      <text
        ref={textRef}
        x={labelX + LABEL_PADDING}
        y={node.py}
        dominantBaseline="central"
      >
        {node.name}
      </text>
    </g>
  );
}

function TechNetworkBackground() {
  const containerRef = useRef(null);
  const layerRef = useRef(null);
  const [size, setSize] = useState({ width: 1440, height: 900 });

  // Measure the visible area
  useEffect(() => {
    const container = containerRef.current;
    const observer = new ResizeObserver(() => {
      setSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const { width, height } = size;
  const layerHeight = reduceMotion ? height : height * LAYER_SCALE;
  const isMobile = width < MOBILE_BREAKPOINT;

  // Move the background according to how far the page is scrolled
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0
          ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
          : 0;
      const offset = progress * (layerHeight - height);

      layerRef.current.style.transform = `translate3d(0, ${-offset}px, 0)`;
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Also update when the page height changes (images, data loading)
    const observer = new ResizeObserver(requestUpdate);
    observer.observe(document.body);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    requestUpdate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
    };
  }, [height, layerHeight]);

  // Desktop uses your grid. Mobile uses a two-column zigzag.
  const positionedNodes = networkNodes.map((node, index) => ({
    ...node,
    px: isMobile
      ? width * (index % 2 === 0 ? 0.07 : 0.58)
      : (node.x / 1440) * width,
    py: isMobile
      ? ((index + 1) / (networkNodes.length + 1)) * layerHeight
      : (node.y / 1000) * layerHeight,
  }));

  const nodeMap = Object.fromEntries(
    positionedNodes.map((node) => [node.id, node]),
  );

  return (
    <div
      ref={containerRef}
      className="tech-network-background"
      aria-hidden="true"
    >
      <div ref={layerRef} className="network-layer">
        <svg
          width={width}
          height={layerHeight}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="networkGlow">
              <stop offset="0%" stopColor="var(--network-glow)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          <ellipse
            cx="50%"
            cy="50%"
            rx="45%"
            ry="50%"
            fill="url(#networkGlow)"
          />

          <g className="network-lines">
            {networkConnections.map(([from, to], index) => (
              <line
                key={`${from}-${to}`}
                x1={nodeMap[from].px}
                y1={nodeMap[from].py}
                x2={nodeMap[to].px}
                y2={nodeMap[to].py}
                style={{ animationDelay: `${index * 0.12}s` }}
              />
            ))}
          </g>

          <g className="network-nodes">
            {positionedNodes.map((node, index) => (
              <g
                key={node.id}
                className="network-node"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <circle
                  cx={node.px}
                  cy={node.py}
                  r="3"
                  className="network-node-dot"
                />
                <circle
                  cx={node.px}
                  cy={node.py}
                  r="10"
                  className="network-node-halo"
                />
                <NodeLabel node={node} screenWidth={width} />
              </g>
            ))}
          </g>

          <g className="network-particles">
            {Array.from({ length: 110 }, (_, index) => (
              <circle
                key={index}
                cx={(((index * 173 + 47) % 1440) / 1440) * width}
                cy={(((index * 613 + 29) % 1000) / 1000) * layerHeight}
                r={index % 5 === 0 ? 2 : 1.2}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default TechNetworkBackground;
