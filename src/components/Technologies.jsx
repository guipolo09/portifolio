import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologies.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    icon: <DiHtml5 />,
    description: "Criação e edição de paginas em HTML5",
  },
  {
    id: "css",
    name: "CSS3",
    icon: <DiCss3 />,
    description: "Estilização de paginas usando CSS#",
  },
  {
    id: "js",
    name: "Javascript",
    icon: <DiJsBadge />,
    description: "Adicionar funcionalidades e integração com backend",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <DiNodejsSmall />,
    description:
      "Configuração e gerenciamento de pacotes pra funcionalidades e integrações",
  },
  {
    id: "react",
    name: "React",
    icon: <DiReact />,
    description: "Componentização e estruturação de projetos usando hooks",
  },
];

const Tecnologies = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id} target="_blank">
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologies;
