import './FormComponent.css'
import { useState } from 'react';

const FormComponent =() => {
    // State of input
    const [userName,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    // Error state
    const [errorUsername,setErrorUsername] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    // Color State
    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRePasswordColor] = useState('')

    const validateForm = (e) => {
        e.preventDefault();
        // Check State Username
        if (userName.length > 8) {
            setErrorUsername('')
            setUserNameColor('green')
        }
        else {
            setErrorUsername('ป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }
        // Check State Email
        if (email.includes('@')) {
            setErrorEmail('')
            setEmailColor('green')
        }
        else {
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }
        // Check Password State
        if (password.length > 8) {
            setErrorPassword('')
            setPasswordColor('green')
        }
        else {
            setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        }
        if (repassword.trim() !== "" && repassword === password) {
            setErrorRePassword('')
            setRePasswordColor('green')
        }
        else {
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRePasswordColor('red');
        }
    }
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}} />
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )

}

export default FormComponent;