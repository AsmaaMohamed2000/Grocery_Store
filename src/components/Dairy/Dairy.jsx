import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgdary from '../../assets/dairy-banner-DJesfY96.webp'

function Dairy() {
  return (
    <div>
    <CategoryPage title='Dairy & Eggs' src={Bgdary} categories={['Dairy','Eggs']}/>
    </div>
  )
}

export default Dairy
