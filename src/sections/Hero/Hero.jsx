import styles from './Hero.module.css';

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <p className={styles.rotulo}>// desenvolvedora front-end</p>
      <h1 className={styles.nome}>Chrystiana Penalber</h1>
      <p className={styles.resumo}>
        Construo interfaces com React pensando primeiro em quem vai usar, um
        hábito que trago da experiência do cliente.
      </p>

      <div className={styles.acoes}>
        <a href="#projetos" className={styles.botaoPrincipal}>
          Ver projetos
        </a>
        <a href="#contato" className={styles.botaoSecundario}>
          Fale comigo
        </a>
      </div>
    </section>
  );
}

export default Hero;
