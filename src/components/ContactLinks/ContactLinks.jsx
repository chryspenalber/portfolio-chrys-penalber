import contacts from '../../data/contacts';
import styles from './ContactLinks.module.css';

function ContactLinks() {
  return (
    <ul className={styles.lista}>
      {contacts.map((contato) => (
        <li key={contato.id}>
          {contato.url ? (
            <a
              href={contato.url}
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
