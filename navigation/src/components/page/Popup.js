import "./Popup.css"
import {useState} from "react";

const Popup=()=> {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return (
        <div className="popup">
            <form className="popup-form">
            <div className="popup-inner">
                <h1 className="form-header">แบบฟอร์มการกรอกข้อมูลสมาชิก</h1>
                <div className="form-control">
                    <label className="">โปรดกรอกชื่อของคุณ</label>
                    <input type="text" placeholder="กรอกอีเมลให้ถูกต้อง" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label className="">โปรดกรอกรหัสผ่านของคุณ</label>
                    <input type="text" placeholder="รหัสผ่านระหว่าง 0 - 6 ตัว" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>


            </div>
            <button>ยืนยันข้อมูล</button>
            </form>
            
        </div>
    )
}

export default Popup;