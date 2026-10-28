import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import foto from '../../assets/foto-chrystiana.jpg';
import styles from './About.module.css';

function About() {
  return (
    <section id="sobre">
      <SectionTitle numero="01" rotulo="sobre" titulo="Quem sou eu" />

      <div className={styles.conteudo}>
        <img
          className={styles.foto}
          src={foto}
          alt="Chrystiana sorrindo numa rua de Paris ao entardecer."
        />
        <div className={styles.texto}>
          <p>
            Trabalho com atendimento e experiência do cliente há mais de dez
            anos, passando por hotelaria, banco e previdência, no Brasil e nos
            Estados Unidos. Hoje sou Head de Customer Experience em uma empresa
            em Lisboa.
          </p>
          <p>
            Foi lidando com quem está do outro lado do processo, mapeando pontos
            de fricção e transformando procedimentos complexos em passos
            simples, que percebi que queria construir as soluções, e não só
            operá-las. Por isso estou concluindo a formação em Engenharia
            Front-End na EBAC, onde desenvolvi projetos com HTML, CSS,
            JavaScript, React e Next.js.
          </p>
          <p>
            Busco minha primeira oportunidade como desenvolvedora Front-End
            júnior, presencial, híbrida ou remota.
          </p>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}

export default About;
