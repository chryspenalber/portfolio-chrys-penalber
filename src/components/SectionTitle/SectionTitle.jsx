import styles from './SectionTitle.module.css';

function SectionTitle({ numero, rotulo, titulo }) {
  return (
    <div className={styles.container}>
      <p className={styles.rotulo}>
        // {numero} {rotulo}
      </p>
      <h2 className={styles.titulo}>{titulo}</h2>
    </div>
  );
}

export default SectionTitle;
