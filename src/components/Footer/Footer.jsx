import styles from './Footer.module.css';

function Footer() {
  // Calculado a cada visita, para o ano não ficar desatualizado
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.creditos}>
        © {ano} Chrystiana Penalber. Desenvolvido com React e Vite.
      </p>
      <a href="#inicio" className={styles.topo}>
        Voltar ao topo
      </a>
    </footer>
  );
}

export default Footer;
