import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Payment Application",
    description:
      "payment application built using Java 21 and Spring Boot 4.0.0, following microservices architecture principles. The system supports secure payments, wallet management, rewards processing, and real-time notifications, all orchestrated through an API Gateway and implemented with event-driven communication using Kafka.",
    image: `${import.meta.env.BASE_URL}projects/payment-app.png`,
    tags: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Microservices",
      "Kafka",
      "Docker",
      "MySQL",
      "Redis",
      "JWT",
      "API Gateway",
      "Event-Driven Architecture",
      "Kubernetes",
      "Swagger",
      "OpenAPI",
    ],
    githubUrl: "https://github.com/venkatapadma/Payment-Application",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "e‑commerce backend service built using Java 25, Spring Boot 4.0, MongoDB, and Elasticsearch. The application uses MongoDB as the system of record for all product data and Elasticsearch as a dedicated search index to provide fast, scalable, and flexible search capabilities.",
    image: `${import.meta.env.BASE_URL}projects/ecommerce-app.png`,
    tags: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "Elasticsearch",
      "Docker",
      "Kubernetes",
      "Gradle",
      "REST API",
      "Swagger",
      "OpenAPI",
    ],
    githubUrl: "https://github.com/venkatapadma/Ecommerce",
  },
  {
    id: 3,
    title: "Banking Application",
    description:
      "This application exposes RESTful APIs to manage bank accounts and transactions such as create account, deposit,withdraw, view accounts, delete account, with global exception handling using @ControllerAdvice, following SOLID principles and clean architecture best practices.",
    image: `${import.meta.env.BASE_URL}projects/banking-app.png`,
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "Spring Security",
      "JWT",
      "Oauth2",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Maven",
      "CI/CD",
      "Swagger",
      "OpenAPI",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
      "JUnit",
      "Mockito",
    ],
    githubUrl: "https://github.com/venkatapadma/BankingApplication",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills and
          experience in software development. Each project highlights my ability
          to design, implement, and deliver high-quality solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    Github Repo
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colrs duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/venkatapadma"
          >
            Check My GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
