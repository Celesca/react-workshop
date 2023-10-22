// ใช้สร้าง Context API => ให้บริการข้อมูลแก่ Component ใน App
import { createContext , useContext, useReducer, useEffect } from "react";
import CartData from "../data/CartData";
import reducer from "./reducer";

// เก็บสินค้าในตะกร้า
const initState = { 
    cart: CartData,
    total:0,
    amount:0
}
// ถูก Import ข้อมูลที่ส่งให้คนอื่นใช้งาน
const CartContext = createContext()

export const MyCartContext=()=>{
    return useContext(CartContext)
}
// ผู้ให้บริการข้อมูลภายในแอพเรา 
const CartProvider = ({children})=> {
    const [state,dispatch] = useReducer(reducer,initState)

    // ดักค่าการเปลี่ยนแปลงใน state.cart
    useEffect(()=> {
        dispatch({type:"CALCULATE_TOTAL"})
    },[state.cart])

    const removeItem=(id)=> {
        console.log("รหัสที่ต้องการลบ = " , id);
        // action ชื่อว่า REMOVE ITEM ส่งไปที่ Reducer
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const toggleQuantity=(id,type)=> {
        dispatch({type:"TOGGLE_QUANTITY",payload:{id,type}})  
    }
    return (
        <CartContext.Provider value={{...state , removeItem,toggleQuantity,formatNumber}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}