import React from 'react'
import Billing_Info from './billing_info/Billing_Info'

const Checkout = () => {
  return (
    <div className='container '>
      <div className='grid grid-cols-4 px-3 py-10'>
        <Billing_Info/>
       
        <section >Order Summary</section>
      </div>
    </div>
  )
}

export default Checkout