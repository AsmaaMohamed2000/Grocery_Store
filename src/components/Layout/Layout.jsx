import {React ,Suspense } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Suspense fallback='Loading.......'>
<Outlet/>
      </Suspense>
      
      <Footer/>
    </div>
  )
}

export default Layout
