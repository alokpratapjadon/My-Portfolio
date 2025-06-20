import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const PreviewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="h-4 w-4 text-white"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  previewLink,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Determine neon color based on first tag color or default cyan
  const neonColor = tags.length > 0 ? tags[0].color.includes("blue") ? "rgba(139, 92, 246, 0.7)" : tags[0].color.includes("green") ? "rgba(34, 197, 94, 0.7)" : tags[0].color.includes("pink") ? "rgba(236, 72, 153, 0.7)" : "rgba(0, 255, 255, 0.7)" : "rgba(0, 255, 255, 0.7)";

  const glowStyle = isHover
    ? {
        position: "relative" as const,
        borderRadius: "1rem",
        padding: "1.25rem",
        width: "300px",
        backgroundColor: "#1f2937", // bg-tertiary equivalent
        boxShadow: `0 0 10px 3px ${neonColor}, 0 0 20px 6px ${neonColor}`,
        transition: "box-shadow 0.3s ease",
        // Neon glow follows mouse position with CSS variables
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as React.CSSProperties
    : {
        position: "relative" as const,
        borderRadius: "1rem",
        padding: "1.25rem",
        width: "300px",
        backgroundColor: "#1f2937", // bg-tertiary equivalent
        transition: "box-shadow 0.3s ease",
      };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        ref={cardRef}
        style={glowStyle}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative rounded-2xl sm:w-[300px]"
      >
        <div className="relative h-[230px] w-full rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-2xl"
          />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
            <div
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className="black-gradient flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="h-4 w-4 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(previewLink, "_blank")}
              className="black-gradient flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
              title="Preview"
            >
              <PreviewIcon />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
