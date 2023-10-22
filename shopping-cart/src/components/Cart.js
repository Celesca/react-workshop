// Component จัดการตะกร้าสินค้า
import { MyCartContext } from "../management/context"
// ดึงข้อมูลจาก MyCartContext ที่เป็นแค่ cart
import CartItem from "./CartItem"

const Cart=()=> {
    const {cart,total,formatNumber} = MyCartContext()
    // console.log("ข้อมูลใน cart = " , cart)

    if (cart.length === 0) {
        // ไม่มีสินค้าในตะกร้า
        return (
        <div className="shopping-cart">
            <h1 className="empty">ไม่มีสินค้าในตะกร้า</h1>
        </div>
        )
    }
    else {
    return (
        <div className="shopping-cart">
            <div className="title">สินค้าในตะกร้า</div>
            {cart.map((data)=> {
                return <CartItem key={data.id} {...data}/>
            })}
            <div className="footer">ยอดชำระเงินรวม {formatNumber(total)} บาท</div>
        </div>
    )
    }

}

export default Cart