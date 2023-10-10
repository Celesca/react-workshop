import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <div>
            <h1>ฉันคือแอดมินเพจ กลับหน้าไปซะ</h1>
            <Link to="/"><button>ฉันคือปุ่มน้อยๆ</button></Link>
        </div>
    )
}

export default Admin;