import { useState } from "react";
import Popup from "./Popup";

const Member = () => {

    const [popup,SetPopup] = useState(false)
    return (
        <div>
            <h1>เนื้อหาสมาชิก</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <button onClick={()=> SetPopup(!popup)}>สมัครสมาชิก</button>
            {popup && <Popup/>}
        </div>
    )
}

export default Member;