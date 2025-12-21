import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeafood from '../../assets/seafood-banner.jpg'
function SeaFood() {
  return (
    <div>
     <CategoryPage title='Meat & SeaFood' src={BgSeafood} categories={['Meat','SeaFood']}/>
    </div>
  )
}

export default SeaFood
