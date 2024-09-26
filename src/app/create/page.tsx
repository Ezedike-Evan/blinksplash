'use client';
import React from 'react'
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Createform from '../component/create';
import '@/app/styles/create.modules.css'

const Home = ()=>{
  return (
    <div id="create">
        <Navbar />
        <Createform />
        <Footer />
    </div>
  )
}

export default Home