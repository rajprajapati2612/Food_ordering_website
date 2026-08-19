import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext }   from '../context/UserContext';
import {food_items}     from '../food'
import { useSelector } from 'react-redux';

const Nav = () => {
  let {input,setInput,Cate,setcate,showCart,setShowCart} = useContext(dataContext)
  useEffect(()=>{
   let newList =  food_items.filter((item)=>item.food_name.toLowerCase().includes(input))
   setcate(newList)
  },[input])
  let items = useSelector(state=>state.cart)
  console.log(items)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8' >
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-400' />
      </div>

      <form className='w-[50%] h-[60px] bg-white flex items-center px-6 gap-5 rounded-md shadow-md md:w[70%]' onSubmit={(e)=>e.preventDefault()}>
        <IoMdSearch  className='text-green-500 w-6 h-6'/>
        <input type="text" placeholder="Search Items....." className=" w-1/1 outline-none h-[80%] text-[16px] md:text-[20px]" onChange={(e)=>setInput(e.target.value)} value={input} />
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{ setShowCart(true)}} >
        <span className='absolute text-white top-0 right-2 bg-green-400 font-semibold h-1/3 w-1/3 mt-2 flex justify-center items-center rounded-4xl'><span>{items.length}</span></span>
        <FiShoppingBag className= 'w-[30px] h-[30px] text-green-400' />
      </div>


    </div>
  )
}

export default Nav
