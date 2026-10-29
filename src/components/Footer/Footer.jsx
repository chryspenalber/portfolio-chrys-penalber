import ContactLinks from '../ContactLinks/ContactLinks';
import styles from './Footer.module.css';

function Footer() {
  // Calculado a cada visita, para o ano não ficar desatualizado
  const ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ContactLinks />
      <p className={styles.creditos}>
        © {ano} Chrystiana Penalber. Desenvolvido com React e Vite.
      </p>
    </footer>
  );
}

export default Footer;
