import React from 'react'
import './Header.scss'
import Logo from '../../assets/images/icons/logo-icon.png';

function Header(){
  return (
    <header className='container'>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>Каталог</li>
        <li>Менің сабақтарым</li>
        <li>Контакт</li>
      </ul>
      <button className='btn light'>Кіру</button>
    </header>
  )
}

export default Header