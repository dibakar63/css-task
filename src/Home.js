import React from 'react'
import './index.css'
import Image from './assets/sphagetti.jpg'
import {BiRightArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
    <div className='lotties'>
    
    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_rXwz8k6MJO.json" background="transparent" speed="1" loop autoplay></lottie-player>
    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_rvfycj0u.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
      
      <h1>Italian Dish</h1>

      <h3>Sphagatti alla Carbonara</h3>
      <p>Pizza and spaghetti, both associated with the Neapolitan traditions of cookery, are especially popular abroad, but the varying geographical conditions of the twenty regions of Italy, together with the strength of local traditions, afford a wide range of dishes.</p>

      <button className='button-icon'><Link to='/page'>Click here  <BiRightArrowAlt /></Link></button>
    </div>
  )
}

export default Home
//BiRightArrowAlt
//https://assets2.lottiefiles.com/packages/lf20_rXwz8k6MJO.json