import React from 'react'

const IdLogin = ({children,service}) => {
  return (
    <button className="flex border w-full h-[44px] p-2 justify-center">
    <div className="mr-auto p-1">
      {children}
    </div>
    <div className="text-[#475156] font-sans mr-auto text-sm my-auto">
      Login with {service} 
    </div>
  </button>
  )
}

export default IdLogin