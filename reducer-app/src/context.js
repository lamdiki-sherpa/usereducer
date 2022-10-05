import React, { useContext,useState ,useReducer,useEffect} from "react";
import cartItems from './Data'
import reducer from './reducer'


const AppContext= React.createContext()

const initialState={
    loading:false,
    cart:cartItems,
    total:0,
    amount:0
}

 const AppProvider=({children})=>{
    // const [cart,setCart]=useState(cartItems)
    const [state,dispatch]=useReducer(reducer,initialState)
   
    const clearCart =()=>{
        dispatch ({type:'CLEAR_CART'})
    }
    const remove =(id)=>{
        dispatch ({type:'REMOVE',payload:id})
    }
    const increase =(id)=>{
        dispatch ({type:'INCREASE',payload:id})
    }
    const decrease =(id)=>{
        dispatch ({type:'DECREASE',payload:id})
    }
    useEffect(()=>{
    dispatch ({type:'GET_TOTALS'})
    },[state.cart]) 
    return <AppContext.Provider 
    // value={{cart}}
    value={{...state,clearCart,remove,increase,decrease}}>
            
            {children}
           </AppContext.Provider>

}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}