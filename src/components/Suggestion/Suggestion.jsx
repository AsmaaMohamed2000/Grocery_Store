import React from 'react'
import { useCart } from '../ContextCard/contexts/CartProvider'
import Cards from '../Cards/Cards'
function Suggestion() {
    const {sugest}=useCart()
  return (
  <section className='lg:max-w-[90%] mt-[150px] md:max-w-[80%] max-w-[90%] mx-auto'>
    <div className='  cardItems   max-w-[80%] mb-14  sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 md:gap-y-12 md:gap-x-6 gap-7 gap-y-10 md:max-w-[90%] mx-auto'>
        {sugest.map(item=>{
            return(
                <Cards key={item.id} id={item.id} title={item.name} src={item.image}  price={item.price}/>
            )
        })}
    </div>
  </section>
  )
}

export default Suggestion
