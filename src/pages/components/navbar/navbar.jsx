import styles from '@/pages/components/navbar/navbar.module.css'
import { BsCart4 } from 'react-icons/bs'

import Logo from '@/pages/components/logo/logo'
import Input from '@/pages/components/forms/input/input'

export default function Navbar () {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullWidth />
            </div>
            <BsCart4 size={40}/>
        </nav>
    )
}