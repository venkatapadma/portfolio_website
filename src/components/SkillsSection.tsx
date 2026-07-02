import { useState } from "react";
import { cn } from "../lib/util";

const skills = [
  //backend
  { name: "Java", level: 90, category: "backend" },
  { name: "SpringBoot", level: 80, category: "backend" },
  { name: "kafka", level: 70, category: "backend" },
  { name: "Microservices", level: 80, category: "backend" },
  { name: "Sql", level: 90, category: "backend" },
  { name: "PostgresSql", level: 80, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },
  { name: "elasticSearch", level: 60, category: "backend" },

  //tools
  { name: "Docker", level: 60, category: "tools" },
  { name: "Kubernetes", level: 60, category: "tools" },
  { name: "Github", level: 90, category: "tools" },

  //cloud
  { name: "AWS", level: 60, category: "cloud" },

  //frontend
  { name: "React.js", level: 60, category: "frontend" },
  { name: "Vue.js", level: 60, category: "frontend" },
];

const categories = ["all", "frontend", "backend", "cloud", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section
      id="skills"
      className="relative py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semiboldtext-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
