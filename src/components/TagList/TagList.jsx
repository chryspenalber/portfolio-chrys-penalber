import styles from './TagList.module.css';

function TagList({ itens }) {
  return (
    <ul className={styles.lista}>
      {itens.map((item) => (
        <li key={item} className={styles.etiqueta}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
