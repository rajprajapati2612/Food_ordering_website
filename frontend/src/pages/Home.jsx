import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import { Categories } from '../categories'
import Card from '../components/card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Home = () => {
  let {Cate,setcate,input,showCart,setShowCart} = useContext(dataContext)

  function filter(category){
    if(category==="All"){
      setcate(food_items);
    }else{
   let newList =    food_items.filter((item)=>(item.food_category===category));
    setcate(newList);
    }
  }
  
  let items = useSelector(state=>state.cart)
  let subtotal = items.reduce((total ,item)=>total +item.price*item.qty,0)
  let deliveryFee = 20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal + deliveryFee + taxes)
  return (
    <div className='bg-slate-200 w-full min-h-screen '>
      <Nav/>
      {!input?<div className="flex flex-wrap justify-center items-center gap-5 w-1/1">
       {Categories.map((item)=>{
        return( 
           <div   className="w-[140px] h-[150px] bg-white flex-col items-start gap-10 p-5 text-[20px] font-semibold text-gray-600
            rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200" onClick={()=>filter(item.name)} >
            
            
            {item.image}  
             
             {item.name}
             
             </div> 
             )
       })}
       
      </div>:null}

      
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-10'>
        {Cate.length>1? Cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
        )):<div className='text-green-500 text-center text-2xl font-semibold pt-5'>No Dish found</div>}
       
      </div>
   <div className={`w-full  md:w-[40vw] h-1/1 fixed top-0 right-0 bg-white shadow-xl p-6  transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0": "translate-x-full"}`}>
    <header className='w-full flex justify-between items-center'>
      <span className='text-green-400 text-[18px] font-semibold'>Order items</span>
      <RxCross2  className='text-green-400 text-[30px] font-semibold cursor-pointer hover:text-gray-500 transition-all' onClick={()=>setShowCart(false)} />
      
    </header>
    {items.length>0? <>
    <div>
      {
        items.map((item)=>
       <Card2 id={item.id} name={item.name} price={item.price} image={item.image} qty={item.qty}/> )
      }
    </div>
    <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
   <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
    <span className='text-green-400 font-semibold text-lg'> Rs {subtotal}/-</span>
   </div>
   <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
    <span className='text-green-400 font-semibold text-lg'> Rs {deliveryFee}/-</span>
   </div>
   <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
    <span className='text-green-400 font-semibold text-lg'> Rs {taxes}/-</span>
   </div>
   
    </div>
    <div className='w-full flex justify-between items-center p-9'>
    <span className='text-lg text-gray-600 font-semibold'>Total</span>
    <span className='text-green-400 font-semibold text-lg'> Rs {total}/-</span>
   </div>
   <button className='w-[80%] p-3 bg-green-400 rounded-lg text-white hover:bg-green-300 transition-all cursor-pointer font-semibold' onClick={()=>{toast.success("Item ordered successfully")}} >Place Order</button>
   </>:<div className='text-green-500 text-center text-2xl font-semibold pt-5'>Empty Cart</div>}
   
   </div>

    </div>
  )
}

export default Home
