import styles from './Header.module.css';

// Seções do menu: o href deve ser igual ao id de cada seção
const links = [
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#projetos', rotulo: 'Projetos' },
  { href: '#habilidades', rotulo: 'Habilidades' },
  { href: '#contato', rotulo: 'Contato' },
];

function Header() {
  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.logo}>
        Chrys Penalber
      </a>

      <nav aria-label="Navegação principal">
        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.rotulo}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
