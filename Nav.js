// components/Nav.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/Portfolio">Portfolio</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
