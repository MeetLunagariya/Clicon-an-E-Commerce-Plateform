import Sidebar from './sidebar/Sidebar'
import Products from './Products'

const Product_Index = () => {
  return (
    <div className='flex px-[200px] py-[40px]'>
      <Sidebar/>
      <Products/>
    </div>
  )
}

export default Product_Index