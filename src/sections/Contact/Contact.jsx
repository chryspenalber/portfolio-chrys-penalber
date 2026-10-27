import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import styles from './Contact.module.css';

//Formulário vazio: usado no inicio e para limpar depois do envio
const estadoInicial = { nome: '', email: '', mensagem: '' };

function Contact() {
  const [dados, setDados] = useState(estadoInicial);

  function handleChange(event) {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  }

  return (
    <section id="contato">
      <SectionTitle numero="04" rotulo="contato" titulo="Fale comigo" />
      <p className={styles.intro}>
        Tem uma vaga em que eu me encaixe ou quer conversar sobre algum projeto?
        Me envie uma mensagem.
      </p>

      <form className={styles.formulario}>
        <div className={styles.campo}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            value={dados.nome}
            onChange={handleChange}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={dados.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.campo}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            id="mensagem"
            rows="5"
            required
            value={dados.mensagem}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.botao}>
          Enviar mensagem
        </button>
      </form>
    </section>
  );
}

export default Contact;
