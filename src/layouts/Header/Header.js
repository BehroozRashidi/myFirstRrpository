import React from 'react'
import LoginRegisterButton from '../../components/LoginRegisterButton/LoginRegisterButton'
import Logo from '../../components/Logo/Logo'
import ShoppingCartButton from '../../components/ShoppingCartButton/ShoppingCartButton'
import TopBanner from '../../components/TopBanner/TopBanner'
import style from './Header.module.scss'
const Header = () => {
  return (
    <div>
    <div className={`${style.Header}`}>
        <Logo/>
        <div className={`${style.Header_left}`}>
        <LoginRegisterButton/>
        <ShoppingCartButton/>
        </div>
       
    </div>
    <TopBanner/>
    </div>
  )
}

export default Header