import React from 'react'
import Title from '../../../product_page/Title'
import Title_Side_Button from '../Title_Side_Button'

const Title_Bar = () => {
  return (
    <section className=" flex justify-between items-center py-2 px-6">
    <span className="uppercase">
      <Title title={"payment option"} key={"payment_option"} />
    </span>
    <span className="text-[#FA8232]">
      <Title_Side_Button title={"Add Card"} key={"add_card"} />
    </span>
  </section>
  )
}

export default Title_Bar