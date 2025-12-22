import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgFruits from '../../assets/fruits-banner-FBwyH5vP.webp'
function Fruits() {
  return (
    <div>
      <CategoryPage title='Fruits & Veggies' src={BgFruits} categories={['Fruits','Vegetables']}/>
    </div>
  )
}

export default Fruits
