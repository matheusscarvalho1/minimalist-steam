import Image from 'next/image'
import Button from '@/pages/components/forms/button/button'

import styles from './gameCard.module.css'

export default function gameCard () {
    return(
        <div className={styles.gamecard}>
            <Image className={styles.image} src='/products/counter-strike.jpg' width={300} height={145}/>
            <div className={styles.info}>
                <h3 className={styles.info}>Counter Strike: Global Offensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>99,90</h2>
                    <Button>Adicionar ao Carrinho</Button>

                </div>
            </div>
        </div>
    )
}