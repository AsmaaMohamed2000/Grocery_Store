import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeafood from '../../assets/seafood-banner-8QMSnYbw.webp'
function SeaFood() {
  return (
    <div>
     <CategoryPage title='Meat & SeaFood' src={BgSeafood} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFood
