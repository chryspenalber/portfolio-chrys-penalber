import styles from './SkillCard.module.css';
import TagList from '../TagList/TagList';

function SkillCard({ numero, titulo, descricao, itens }) {
  return (
    <article className={styles.card}>
      <span className={styles.numero}>{numero}</span>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>
      <TagList itens={itens} />
    </article>
  );
}

export default SkillCard;
