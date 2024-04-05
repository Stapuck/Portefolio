import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    // todo revoir pour faire une page cool. 
    <section className='max-container'>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to='/'>Back to HomePage</Link>
    </section>
  )
}

export default NotFound