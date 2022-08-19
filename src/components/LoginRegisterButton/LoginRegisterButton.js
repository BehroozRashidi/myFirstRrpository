import React, { useEffect, useState } from 'react'
const LoginRegisterButton = () => {
const [isUserLogin, setisUserLogin] = useState(false)
useEffect(() => {
    
}, [isUserLogin])
const changeUserLogin=()=>{
    setisUserLogin(!isUserLogin)
}

  return (
    <div>
{!isUserLogin ?  <p>ورود/ثبت نام</p> : <p>مشاهده پروفایل</p>}  
        <button onClick={changeUserLogin}>changeUserLogin </button>
    </div>
  )
}

export default LoginRegisterButton