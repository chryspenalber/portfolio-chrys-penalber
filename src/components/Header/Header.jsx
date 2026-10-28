import { useState } from 'react';
import styles from './Header.module.css';


// Seções do menu: o href deve ser igual ao id de cada seção
const links = [
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#projetos', rotulo: 'Projetos' },
  { href: '#habilidades', rotulo: 'Habilidades' },
  { href: '#contato', rotulo: 'Contato' },
];

function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo}>
        Chrys Penalber
      </a>

      <button
        type="button"
        className={styles.botaoMenu}
        aria-expanded={aberto}
        aria-controls="menu-principal"
        onClick={() => setAberto(!aberto)}
      >
        {aberto ? 'Fechar' : 'Menu'}
      </button>

      <nav aria-label="Navegação principal">
        <ul
          id="menu-principal"
          className={aberto ? `${styles.menu} ${styles.aberto}` : styles.menu}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setAberto(false)}>
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
