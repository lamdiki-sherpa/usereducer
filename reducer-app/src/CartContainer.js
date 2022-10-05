import React from 'react'
import {faChevronDown,faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useGlobalContext } from './context'
const CartContainer = () => {
  const {cart,total,clearCart,remove,increase,decrease}=useGlobalContext()
  if(cart.length===0){
   return <section className='cart'>
   <header>
   <h2>YOUR CART</h2>
   <h5>is currently empty</h5>
   </header>
   </section>
  }
  return (
    <section className='cart'>
       <header>
        <h2>YOUR CART</h2>
        </header>
            {cart.map((datas)=>{
                const {id,title,author,price,amount,img}=datas;
                return <article key={id} className='bag-container'>
                     <div className='left-section'>
                      <img src={img} style={{height:'100px',width:'100px'}}/>
                      <div className='discription'>
                      <h5>{title}</h5>
                      <h6>{author}</h6>
                       <h6>Rs {price}</h6>
                       <button onClick={()=>remove(id)}>remove</button>
                      </div>
                      
                       </div>
                       <div className='right-section'>
                        <FontAwesomeIcon icon={faChevronUp} onClick={()=>increase(id)}></FontAwesomeIcon>
                        <h6 style={{marginLeft:'5px'}}>{amount}</h6>
                        <FontAwesomeIcon icon={faChevronDown} onClick={()=>decrease(id)}></FontAwesomeIcon>
                       </div>
                       </article>
            })}
            <hr/>
            <footer>
                <div className='d-flex justify-content-between'>
                <h5>Total</h5>
                <span>Rs {total}</span>
                </div>
                <button className='clear-button' onClick={clearCart}>CLEAR CART</button>
          
            </footer>

    </section>
  )
}

export default CartContainer