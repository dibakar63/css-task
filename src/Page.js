import React from 'react'
import Image1 from './assets/Espaguetis_carbonara.jpg'
import Image2 from './assets/cake.jpg'
import Image3 from './assets/pizza.jpg'
import Image4 from './assets/pasta.jpg'
import './page.css'
import { Link } from 'react-router-dom'

const Page = () => {
  return (
    <div className='container'>
     <div className='card'>
        <img  src={Image1} alt='sphagetti'/>
        <h5>Sphagatti</h5>
        
       <div className='menu'>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>menu</Link>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>ingredients</Link>
       </div>
     </div>
     <div className='card'>
        <img  src={Image2} alt='sphagetti'/>
        <h5>Cake</h5>
        <div className='menu'>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>menu</Link>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>ingredients</Link>
       </div>
     </div>
     <div className='card'>
        <img  src={Image3} alt='sphagetti'/>
        <h5>Pizza</h5>
        <div className='menu'>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>menu</Link>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>ingredients</Link>
       </div>
     </div>
     <div className='card'>
        <img  src={Image4} alt='chow'/>
        <h5>Pasta</h5>
        <div className='menu'>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>menu</Link>
        <Link to='https://en.wikipedia.org/wiki/Carbonara#Further_reading' target='_blank'>ingredients</Link>
       </div>
     </div>
    </div>
  )
}

export default Page
