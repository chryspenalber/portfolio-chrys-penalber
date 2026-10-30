import contacts from '../../data/contacts';
import styles from './ContactLinks.module.css';

function ContactLinks() {
  return (
    <ul className={styles.lista}>
      {contacts.map((contato) => (
        <li key={contato.id}>
          {/* A localização não tem url, então aparece como texto */}
          {contato.url ? (
            <a
              href={contato.url}
              // Só GitHub e LinkedIn abrem em nova aba. Com undefined, o React não cria o atributo
              target={contato.externo ? '_blank' : undefined}
              rel={contato.externo ? 'noopener noreferrer' : undefined}
            >
              {contato.rotulo}
            </a>
          ) : (
            contato.rotulo
          )}
        </li>
      ))}
    </ul>
  );
}

export default ContactLinks;
