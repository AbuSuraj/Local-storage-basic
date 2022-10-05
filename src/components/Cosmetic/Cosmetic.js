import React from 'react';
import { addToDb, removeFromeDb } from '../../utilities/fakeDb';
const Cosmetic = (props) => {
    const {cosmetic} = props;
    const {id,name,price} = cosmetic;
    // console.log(id);
    const addToCart = id =>{
        addToDb(id);
    }
    const removeFromCart = id=>{
        removeFromeDb(id);
    }
    return (
        <div className='bg-slate-400 p-4 m-5 rounded-3xl'>
          <h1 className='font-extrabold text-xl mt-5'>id: {id}</h1>
          <h1 className='font-extrabold text-xl mt-5'>name: {name}</h1>
          <h1 className='font-extrabold text-xl mt-5'>price: {price}</h1>
          <button onClick={()=>addToCart(cosmetic)} className='bg-blue-700 m-2 p-2 text-lg font-bold rounded-lg hover:bg-orange-700'>Add to card</button>
          <button onClick={()=>removeFromCart(id)} className='bg-blue-700 m-2 p-2 text-lg font-bold rounded-lg hover:bg-orange-600'>Remove from card</button>
        </div>
    );
};

export default Cosmetic;