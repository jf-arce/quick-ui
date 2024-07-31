import Link from '@docusaurus/Link';
import styles from './Navbar.module.css';
import hoverUnderline from '../EffectsCss/HoverUnderline/HoverUnderline.module.css'

export const Navbar = () => {
  return (
    <div className='relative'>
        <header className={`${styles.header} rounded-md`}>
        <div className={styles.header__icon}>
            <Link className={styles.icon__item} to="/docs/components/navbar">
                <img src="/img/quick-ui-logo.png" alt="" className='w-12 rounded-md'/>
            </Link>
        </div>

        <label htmlFor="menu" className={styles.toggleMenu}>
            <img className={styles.toggleIcon} src="./img/menu.png" alt="" />
        </label>
        <input type="checkbox" name="menu" id="menu" className={styles.toggleMenu__checkbox} />

        <nav className={styles.header__nav}>
            <ul className={styles.nav__list}>
            <li className={`${styles.list__item} !m-0`}>
                <Link className={`${styles.item__link}`} to="/docs/components/navbar">Home</Link>
            </li>
            <li className={`${styles.list__item} !m-0`}>
                <Link className={`${styles.item__link} `} to="/docs/components/navbar">Sobre Nosotros</Link>
            </li>
            <li className={`${styles.list__item} !m-0`}>
                <Link className={`${styles.item__link}`} to="/docs/components/navbar">Contacto</Link>
            </li>
            <li className={`${styles.list__item} !m-0`}>
                <Link className={`${styles.item__link}`} to="/docs/components/navbar">Login</Link>
            </li>
            <li className={`${styles.list__item} !m-0`}>
                <Link className={`${styles.item__link}`} to="/docs/components/navbar">Shop</Link>
            </li>
            </ul>
        </nav>
        </header>
    </div>
  );
};
