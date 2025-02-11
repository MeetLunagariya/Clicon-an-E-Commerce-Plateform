import React from 'react'

const Title_Sidebar = ({title,text_color}) => {
  return (
    <p className={`text-[${text_color}] font-sans h-[24px] w-full uppercase font-semibold`}>{title}</p>
  )
}

export default Title_Sidebar