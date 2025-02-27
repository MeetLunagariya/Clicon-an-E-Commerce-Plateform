import React from 'react'
import Title from '../../product_page/Title'
import Details from './Details'

const Shipping_Address = () => {
  return (
    <form
      // onSubmit={handleSubmit(submit)}
      className="border border-gray-200 rounded-sm"
    >
      <section className="py-2 px-6 uppercase ">
        <Title title={"Shipping Address"} key={"Shipping Address"} />
      </section>
      <Details/>
    </form>
  )
}

export default Shipping_Address