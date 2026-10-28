import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import styles from './Contact.module.css';

const urlFormspree = 'https://formspree.io/f/xnpppglj';

// Formulário vazio: usado no início e para limpar depois do envio
const estadoInicial = { nome: '', email: '', mensagem: '' };

function Contact() {
  const [dados, setDados] = useState(estadoInicial);
  const [status, setStatus] = useState('inicial');

  function handleChange(event) {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
    setStatus('inicial');
  }

  async function handleSubmit(event) {
    // Sem isso, o navegador recarrega a página e o envio se perde
    event.preventDefault();
    setStatus('enviando');

    try {
      const resposta = await fetch(urlFormspree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(dados),
      });

      if (resposta.ok) {
        setStatus('sucesso');
        setDados(estadoInicial);
      } else {
        setStatus('erro');
      }
    } catch {
      // Cai aqui quando não tem resposta (sem internet, por exemplo).
      setStatus('erro');
    }
  }

  return (
    <section id="contato">
      <SectionTitle numero="04" rotulo="contato" titulo="Fale comigo" />
      <p className={styles.intro}>
        Tem uma vaga em que eu me encaixe ou quer conversar sobre algum projeto?
        Me envie uma mensagem.
      </p>

      <form className={styles.formulario} onSubmit={handleSubmit}>
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

        <button
          type="submit"
          className={styles.botao}
          disabled={status === 'enviando'}
        >
          {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {status === 'sucesso' && (
          <p className={styles.sucesso}>
            Mensagem enviada. Obrigada pelo contato, respondo em breve.
          </p>
        )}
        {status === 'erro' && (
          <p className={styles.erro}>
            Erro ao enviar. Tente de novo ou me escreva por e-mail.
          </p>
        )}
      </form>

      <div className={styles.direto}>
          <p>Prefere falar direto? Você também me encontra por aqui.</p>
          <ContactLinks />
      </div>
    </section>
  );
}

export default Contact;
