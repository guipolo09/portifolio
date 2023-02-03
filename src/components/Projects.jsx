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
  },
  {
    id: "calculadora-imc",
    name: "Calculadora IMC",
    description: 
      "Uma calculadora simples de IMC (Indice de Massa Corporal). Calculado através do peso e da altura. Imprime o resultado dizendo em que categoria o IMC da pessoa se encaixa.",
    link: "https://calculadora-imc-gray.vercel.app/",
  },
  {
    id: "explorer-lab-01",
    name: "Explorer Lab",
    description: 
      "Projeto realizado no Explorer Lab da Rocketseat, usando IMask para configurar as mascaras dos inputs e preencher o cartão com nome, tipo do cartão, data de expiração e código de verificação. ",
    link: "https://explorer-lab-01-sfoz.vercel.app/"
  },
  {
    id:"simple-pokedex",
    name: "Simple Pokedex",
    description: "Projeto realizado no bootcamp da DIO construindo uma pokedex simples com o consumo de API da pokeAPI.",
    link: "https://simple-pokedex-eight.vercel.app/"
  },
  {
    id:"github-finder",
    name: "Github Finder",
    description: "Projeto do Matheus Battisti, consumindo a api do github e exibindo usuário com link para seus repositórios.",
    link: "https://github-finder-m6m8d2uta-guipolo09.vercel.app/"
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
