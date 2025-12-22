import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { RiSeedlingFill } from "react-icons/ri";
import Basket from '../../assets/basket-full-vegetables-CZuTFg9_.webp'
function Value() {
      console.log('value')
    const leftValues=values.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex sm:flex-row-reverse px-6 py-10 xl:pb-32' >
                <div className='  text-white text-xl '>
                    <span className=' w-10 h-10 rounded-full mr-6 sm:mr-0 sm:ml-6 flex items-center justify-center  bg-gradient-to-b from-orange-400 to-orange-500'>{item.icon}</span>
                </div>
                <div className='sm:text-right '>
                    <h3 className='text-zinc-800  text-xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-800 mt-6 lg:text-md text-sm '>{item.para}</p>
                </div> 
            </div>
        )
    })
      const rightValues=values.slice(2,4).map(item=>{
        return(
            <div className='flex  px-6 py-10 xl:pb-32  ' key={item.id}>
                <div className='text-white text-xl '>
                    <span className=' bg-gradient-to-b  from-orange-400 to-orange-500  w-10 h-10  rounded-full flex items-center justify-center'>{item.icon}</span>
                </div>
                <div className=' ml-6 '>
                    <h3 className='text-zinc-800  text-xl  font-bold'>{item.title}</h3>
                    <p className='text-zinc-800 mt-6 lg:text-md text-sm' >{item.para}</p>
                </div>
            </div>
        )
    })
  return (
   <section className=' mt-16 py-14 mx-auto w-[100%] lg:max-w-[1200px] px-4 md:px-10'>
    <Heading hilight='Our' header='Values'/>
    <div className='flex flex-col  xl:flex-row mt-20 xl:gap-8 items-center'> 
        <div className='xl:w-[30%] sm:flex flex-row xl:flex-col'>
            {leftValues}</div>
        <div className='xl:w-[30%] hidden sm:flex w-[60%]  flex justify-center items-center '>
            <img className=' xl:min-h-[500px] h-[300px] scale-120 xl:scale-100  ' src={Basket} alt="" />
        </div >
        <div className='xl:w-[30%] sm:flex flex-row xl:flex-col'>{rightValues}</div>

    </div>

   </section>
  )

}

export default Value

const values=[
    {
        id:1,
        title:'Trust',
        para:'We earn your trust through quality and consistency.Every product, every promise — we stand by it.',
        icon:<FaHeart/>
    },
      {
        id:2,
        title:'Food Safety',
        para:'Every product is handled with care, from sourcing to delivery.Your health and well-being are our top priority. ',
         icon:<FaShieldAlt />
    },
          {
        id:3,
        title:'Always Fresh',
        para:'Every product is handled with care, from sourcing to delivery.Your health and well-being are our top priority. ',
        icon:<FaLeaf/>
    },
            {
        id:4,
        title:'100% Organic ',
        para:'Our products are 100% organic, pure, and chemical-free.Good for you, and even better for the planet.',
            icon:<RiSeedlingFill />
    }
]
