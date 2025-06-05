import React from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const {currency,products}=useContext(ShopContext)
  return (
    <div className='border-t pt-16' >
      <div className='text-2xl' >
        <Title text1={"MY"} text2={" ORDERS"} />
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div>
              
            </div>
            
          ))
        }
      </div>
      
    </div>
  );
}

export default Orders;
