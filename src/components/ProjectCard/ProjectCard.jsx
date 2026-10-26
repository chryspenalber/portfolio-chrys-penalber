import styles from './ProjectCard.module.css';
import TagList from '../TagList/TagList';

function ProjectCard({
  titulo,
  descricao,
  tecnologias,
  imagem,
  repositorio,
  demo,
}) {
  return (
    <article className={styles.card}>
      <img
        className={styles.imagem}
        src={imagem}
        alt={`Captura da tela do projeto ${titulo}`}
      />

      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p>{descricao}</p>
        <TagList itens={tecnologias} />
        <div className={styles.links}>
          <a href={repositorio} target="_blank" rel="noopener noreferrer">
            Ver código
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Ver página
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
