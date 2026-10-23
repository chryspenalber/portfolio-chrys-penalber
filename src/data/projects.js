import imagemHercules from '../assets/projeto-hercules.jpg';
import imagemViaCep from '../assets/projeto-viacep.jpg';
import imagemListaDeTarefas from '../assets/projeto-lista-de-tarefas.jpg';
import imagemPortalDeViagens from '../assets/projeto-portal-de-viagens.jpg';

const projects = [
  {
    id: 1,
    titulo: 'Hércules',
    descricao:
      'Página tributo à animação da Disney, com trailer, personagens, galeria e trilha sonora. Foi onde pratiquei layout responsivo e organização de estilos com variáveis e mixins.',
    tecnologias: ['HTML', 'SCSS'],
    imagem: imagemHercules,
    repositorio: 'https://github.com/chryspenalber/hercules',
    demo: 'https://chryspenalber.github.io/hercules',
  },
  {
    id: 2,
    titulo: 'Busca de endereço com ViaCEP',
    descricao:
      'Formulário que preenche logradouro, bairro, cidade e estado automaticamente a partir do CEP digitado. Foi meu primeiro contato com o consumo de uma API externa e com a atualização da página via JavaScript.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'API REST'],
    imagem: imagemViaCep,
    repositorio: 'https://github.com/chryspenalber/tarefa-7-web-api',
    demo: 'https://chryspenalber.github.io/tarefa-7-web-api',
  },
  {
    id: 3,
    titulo: 'Lista de tarefas',
    descricao:
      'Aplicação para adicionar, concluir, filtrar e remover tarefas, com contadores atualizados em tempo real. As tarefas ficam salvas no navegador, e o estado é compartilhado entre os componentes com Context API.',
    tecnologias: ['React', 'Vite', 'Context API', 'localStorage'],
    imagem: imagemListaDeTarefas,
    repositorio: 'https://github.com/chryspenalber/tarefa-16-react-avancado',
    demo: 'https://tarefa-16-react-avancado.vercel.app/',
  },
  {
    id: 4,
    titulo: 'Portal de viagens',
    descricao:
      'Guia de destinos com página inicial e uma página para cada lugar, geradas a partir dos mesmos dados. Foi onde trabalhei com rotas dinâmicas, geração estática e tipagem com TypeScript.',
    tecnologias: ['Next.js', 'TypeScript'],
    imagem: imagemPortalDeViagens,
    repositorio: 'https://github.com/chryspenalber/tarefa-21-nextjs',
    demo: 'https://tarefa-21.vercel.app/',
  },
];

export default projects;
