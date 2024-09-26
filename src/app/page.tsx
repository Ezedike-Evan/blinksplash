'use client';
import React from 'react'
import Footer from "./component/footer"
import Getstarted from "./component/getstarted"
import Navbar from "./component/navbar"
import '@/app/styles/home.modules.css'
const Home = ()=>{
  return (
    <div id="home">
      <Navbar />
      <Getstarted />
      <Footer />
    </div>
  )
}

export default Home