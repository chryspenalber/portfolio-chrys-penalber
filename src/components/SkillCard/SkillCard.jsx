import styles from './SkillCard.module.css';

function SkillCard({ numero, titulo, descricao, itens }) {
  return (
    <article className={styles.card}>
      <span className={styles.numero}>{numero}</span>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descricao}>{descricao}</p>
      <ul className={styles.itens}>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
