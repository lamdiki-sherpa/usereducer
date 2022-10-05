import React from 'react'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {amount}=useGlobalContext()
  return (
    <nav>
    <div className='nav-center'>
        <h3>BOOKSTORE</h3>
        <div className='nav-container'>
        <FontAwesomeIcon icon={faCartPlus} className='bar'></FontAwesomeIcon>
        <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
        </div>
        </div>
       
    </div>
    </nav>
  )
}

export default Navbar