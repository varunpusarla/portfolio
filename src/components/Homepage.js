import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {

    return ( 
      <div>
      <Navbar />
        <div className='a'>
          <img src={require('./image.jpg')} />
          <h2>VARUN PUSARLA</h2>
        </div>
        
        <div className='mid'>
          <h1>Hey there! I'm a Data Scientist</h1>
        </div>

     
      </div>
      
      );
  }
   
export default Homepage