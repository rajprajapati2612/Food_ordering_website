import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import {RemoveItem,IncrementQty,DecrementQty} from '../redux/cartSlice.js'
import { toast } from 'react-toastify';
function Card2({id,name,price,image,qty}) {
  let dispatch = useDispatch();
  return (
    <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between '>
      <div className='w-[60%] h-full  flex gap-5'>
       <div className='w-[60%] h-full overflow-hidden rounded-lg'>
        <img src={image} alt="" className='object-cover ' /></div> 
       <div className='w-[40%] h-full flex flex-col gap-3'>
        <div className='text-lg text-gray-600 font-semibold'>{name}</div>
        <div className='w-full h-[50px] bg-amber-400 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 text-xl'>
          <button className='w-[30%] h-full bg-white  flex items-center justify-center text-green-500 hover:bg-gray-100 transition-all cursor-pointer' onClick={()=>{qty>1?dispatch(DecrementQty({id:id})):1}}>-</button> 
          <span className='w-[40%] h-full bg-slate-200 flex items-center justify-center text-green-500'>{qty}</span>
          <button className='w-[30%] h-full bg-white  flex items-center justify-center text-green-500 hover:bg-gray-100 transition-all cursor-pointer' onClick={()=>{dispatch(IncrementQty({id:id}))}}>+</button> 
        </div>
       </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-7'>
        <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
        <RiDeleteBin6Line className='w-[30px] h-[30px] text-red-500 cursor-pointer' onClick={()=>{dispatch(RemoveItem(id));
         
        }} />
      </div>
    </div>
  )
}

export default Card2
