import { Link } from '@mui/material'
import Image from 'next/image'

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image 
                src="/images/loop.png" 
                width="85" 
                height="50" 
                alt="loop"
                />
            </div>
            <ul className={styles.link_items}>
                <li><Link href="#">Vender</Link></li>
                <li><Link href="#">Comprar</Link></li>
                <li><Link href="#">Lojas</Link></li>
            </ul>
        </nav>
    )
}