import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(
        ()=>{
            fetch('data.json')
            .then(res=> res.json())
            .then(data => setCosmetics(data))
        },[])
 
    return (
        <div>
            <h1 className='font-extrabold text-xl mt-5'>welcome to my cosmetic shop</h1>
            <div className='grid grid-cols-3'>
                {
                    cosmetics.map(cosmetic =>
                        <Cosmetic
                        key={cosmetic.id}
                        cosmetic = {cosmetic}
                        ></Cosmetic>
                        )
                }
            </div>
        </div>
    );
};

export default Cosmetics;