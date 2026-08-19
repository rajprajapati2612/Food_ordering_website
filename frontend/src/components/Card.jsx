import React from 'react'
import { GiChickenOven } from "react-icons/gi";
import { ImLeaf } from "react-icons/im";
import {useDispatch} from 'react-redux';
import {AddItem} from '../redux/cartSlice.js';
import { toast } from 'react-toastify';
const Card = ({name,image,id,price,type}) => {
  const dispatch = useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400'>
      <div className='w-1/1 h-[65%] overflow-hidden rounded-lg' >
  <img src={image} alt="" className='object-cover' />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className='w-full flex justify-between items-center'>
        <div className="text-xl font-bold text-green-500">Rs <span>{price}/-</span></div>
        <div className='flex justify-between items-center gap-2 text-green-500 text-lg font-semibold'>{(type==='veg')?<ImLeaf />:<GiChickenOven className='text-red-700'/>}<span>{type}</span></div>
      </div>
      <button className='w-full p-3 bg-green-400 rounded-lg text-white hover:bg-green-300 transition-all cursor-pointer font-semibold' onClick={()=>{dispatch(AddItem({id:id, name:name, price:price, image:image, qty:1}));
     toast.success("Dish Added Successfully")}} >Add to Dish</button>
    </div>
  )
}

export default Card
