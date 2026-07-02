import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Java FullStack Developer</h3>
            <p className="text-muted-foreground">
              With ~4 years of experience using Core Java, Spring Boot,
              microservices, Kafka, AWS, and relational databases to build
              secure, scalable, cloud native applications.
            </p>
            <p className="text-muted-foreground">
              Improved API response times by 25–35% through query optimization,
              caching strategies, and efficient object mapping, while reducing
              production defects through cleaner abstractions and refactoring.
              Strong foundation in OOP, SOLID principles, design patterns,
              TDD/BDD, and performance optimization, with hands on experience in
              React/Vue.js, CI/CD pipelines, and Agile/Scrum delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="src/assets/Venkata Padma Ganapathi CV.docx"
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">FullStack Developer</h4>
                  <p className="text-muted-foreground">
                    Build and develop full stack applications with modern
                    technologies
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Building Rest APIs</h4>
                  <p className="text-muted-foreground">
                    Designing APIs by applying SOLID principles, design
                    patterns, and clean code best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projects</h4>
                  <p className="text-muted-foreground">
                    Login Service, Bussiness Energy Manager, Solar Together,
                    Payment App, Banking App etc..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
