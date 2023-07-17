import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from './components/navbar/navbar'
import Subtitle from './components/typography/subtitle/subtitle'
import Container from './components/container/container'
import SaleCard from './components/cards/saleCard/saleCard'
import GameCard from './components/cards/gameCard/gameCard'


export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) => {
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter ((obj, posObj) => posObj !== pos ))
  }

  console.log(cart)
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct} />
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>
          <div className={styles.salecontainer}>
            <SaleCard 
              
              image={'dota-2.jpg'}
              discount='30%'
              fullPrice='199,90'
              discountPrice={'139,90'}
              onAdd={() => handleAddProduct ({ name:'Dota 2', price:139.90, image:'dota-2.jpg'})}
            
              />
            
            <SaleCard 
              
              image={'league-of-legends.jpg'}
              discount='40%'
              fullPrice='299,90'
              discountPrice={'179,90'}
              onAdd={() => handleAddProduct ({ name:'League of Legends', price:179.90, image:'league-of-legends.jpg'})}
              
              />

            <SaleCard 
              
              image={'valorant.jpg'}
              discount='10%'
              fullPrice='399,90'
              discountPrice={'359,90'}
              onAdd={() => handleAddProduct ({ name:'Valorant', price:359.90, image:'valorant.jpg'})}
              
              />

          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>
            <div className={styles.gamecontainer}>
                <GameCard 

                  onAdd={() => handleAddProduct ({ name:'Counter Strike: Global Offensiive', price:99.90, image:'counter-strike.jpg'})}
                  
                />
              

            </div>
          </div> 
        
      </div>
      </Container>
    </div>
  </>
  )
}
