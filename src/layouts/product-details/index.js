import Layout from '../../components/Layout'
import React ,{ useState } from 'react'


const ProductsDetail = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    if(count >= 10) {
      setCount(10)
    } else {
      setCount(count + 1)
    }
  }
  const decrement = () => {
    if(count <= 0) {
      setCount(0)
    }
    else {
      setCount(count - 1)
    }
  }
  
  return(
    <Layout>
    <div className='bg-slate-200 '>
      <div className='w-full mx-auto pt-10 pb-24 px-20'>
        <div className='text-sm'>
          <p className='ml-7'>Favorite and Promo {'>'}<span className='text-[#6A4029] font-bold'>Cold Brew</span></p>
        </div>
        <div className='flex mt-5 w-full justify-around'>
          <div className='flex flex-col justify-center items-center'>
            <img src='/img/coldbrew.png' className='rounded-full w-[330px] my-8'/>
            <h1 className='text-3xl font-extrabold'>Cold Brew</h1>
            <h3 className='text-xl my-5'>Rp. 30.000</h3>
            <button className='bg-[#6A4029] p-3 w-4/5 my-7 rounded-xl text-white font-extrabold'>Add to cart</button>
            <button className='bg-[#FFBA33] p-3 w-4/5 rounded-xl text-[#6A4029] font-extrabold'>Ask a staff</button>
          </div>
          <div className='flex flex-col w-5/12'>
          <div className='bg-white  rounded-lg p-12 shadow-lg h-fit text-[#6A4029] text-xl'>
            <p className='mb-16'>Delivery only on <b>Monday to Friday at 1 - 7 pm</b></p>
            <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
              <div className='mt-16'>
                <p className='text-center text-black font-bold'>Choose a size</p>
                <div className='flex justify-center'>
                  <h1 className='bg-[#FFBA33] hover:border-[#6A4029] font-semibold w-11 text-center text-lg p-2 my-5 mx-5 rounded-full'><button>R</button></h1>
                  <h1 className='bg-[#FFBA33] font-semibold w-11 text-center text-lg p-2 my-5 mx-5 rounded-full'><button>L</button></h1>
                  <h1 className='bg-[#FFBA33] font-semibold w-11 text-center text-lg p-2 my-5 mx-5 rounded-full'><button>XL</button></h1>
                </div>
              </div>
          </div>
          <div className='flex flex-col p-12'>
            <h4 className='font-bold text-center'>Choose the delivery method</h4>
            <div className='flex justify-between my-4'>
              <button className='bg-[#6A4029] text-white px-5 py-1 rounded-xl'><p>Dine-In</p></button>
              <button className='bg-[#F4F4F8] text-[#9F9F9F] px-5 py-1 rounded-xl'><p>Door Delivery</p></button>
              <button className='bg-[#F4F4F8] text-[#9F9F9F] px-5 py-1 rounded-xl'><p>Pick-Up</p></button>
            </div>
            <div className='flex'>
              <p>Set time : </p>
              <input placeholder='Enter the time you will arrive'/>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='bg-white flex justify-center '>
        <div className='bg-white shadow-2xl rounded-3xl flex w-5/12 p-4 justify-around -mt-16 mx-8'>
          <img src='/img/coldbrew.png' className='rounded-full w-[100px]'/>
          <div className='flex'>
            <div className='flex flex-col justify-center items-center leading-6'>
              <p className='font-xl font-semibold'>COLD BREW</p>
              <p>1x (LARGE)</p>
              <p>1x (Regular)</p>
            </div>
            <div className='flex justify-evenly items-center ml-24 font-semibold'>
              <button onClick={decrement} className='bg-[#E7AA3685] px-3 rounded-full text-[#6A4029]'>-</button>
              <p className='mx-4'>{count}</p>
              <button onClick={increment} className='bg-[#E7AA3685] px-3 rounded-full text-[#6A4029]'>+</button>
            </div>
          </div>
        </div>
        <div className=' w-3/12 justify-center items-center flex -mt-20'>
          <button className='bg-[#FFBA33] rounded-3xl p-12 shadow-2xl font-bold text-xl'>CHECKOUT</button>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default ProductsDetail;