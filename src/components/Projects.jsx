import "../styles/components/projects.sass";

const projects = [
  {
    id: "buscadordecep",
    name: "Buscador de CEP",
    description:
      "Busca um CEP de uma cidade ou bairro específico. Exibe a cidade, estado, ddd, e endereço, caso haja.",
    link: "https://buscador-de-cep-nu.vercel.app/",
  },
  {
    id: "todolist",
    name: "To Do List",
    description:
      "Lista de tarefas simples criada com html, css e javascript. Armazena na local storage as tarefas e mostra na tela. As tarefas podem ser marcadas como concluidas e tambem excluídas pelo botão de lixeira.",
    link: "https://to-do-list-five-rho.vercel.app/",
  },
  {
    id: "geradordesenha",
    name: "Password Generator",
    description:
      "Um gerador de senha criado com html, css e javascript. Cria uma senha aleatória usando letras maiusculas, minusculas e caracteres especiais. É possível alterar o tamanho da senha a ser criada arrastando o slide.",
    link: "https://password-generator-one-chi.vercel.app/",
  },
  {
    id: "movieswiki",
    name: "Movies Wiki",
    description:
      "Um projeto que traz na pagina inicial os 20 filmes mais bem avaliados. Clicando no card do filme é possível ver o orçamento, tempo de duração e ano do filme. No campo de busca é possível pesquisar sobre um filme específico ou uma serie de filmes. Todos os dados vem de uma api do TMDB.",
    link: "https://moviewiki-guipolo09.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      {projects.map((project) => (
        <div className="project-card" id={project.id} key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="btn" target="_blank">
            Ver Projeto
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
