import styles from './cartMenu.module.css'

import CartOption from '../cartOption/cartOption'

export default function cartMenu () {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                <CartOption />
                <CartOption />
                <CartOption />
            </div>
            <div className={styles.priceline}>
                <h2>Total</h2>
                <h2 className={styles.price}>R$ 999,99</h2>

            </div>
        </div>
    )
}