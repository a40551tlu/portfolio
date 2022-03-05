import React, {useState} from 'react'
import Link from 'next/link'
import headerStyles from './header.module.css';

function Header() {
  let [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={headerStyles.container}>

      {/* Logo */}
      <div className={headerStyles.topbar}>
        <div className={headerStyles.logo}>
          <Link href='#home' > 
            <a className=''>Hatr</a>
          </Link>
        </div>
        
        <div 
          className={headerStyles['navbar__icon']} 
          style={{fontSize: "2rem"}}
          onClick={()=>setOpenMenu(!openMenu)}
        >
          { !openMenu ? <i class='bx bx-menu-alt-right'></i> : <i class='bx bx-x'></i>}
        </div>
      </div>

      {/* Navbar */}
      <div className={`animate__animated 
            ${openMenu ? 'animate__jackInTheBox' : `${headerStyles.off}`} ${headerStyles.navbar}`}
      >
        <ul className={headerStyles.navbar__list}>
          <li className={headerStyles['navbar__list--item']} >
            <i class='bx bxs-info-circle'></i>
            <Link href='#about'>
              <a>About</a>
            </Link>
          </li>

          <li className={headerStyles['navbar__list--item']}>
            <i class='bx bx-show' ></i>
            <Link href='#project'>
              <a>Projects</a>
            </Link>
          </li>

          <li className={headerStyles['navbar__list--item']}>
            <i class='bx bx-code'></i>
            <Link href='#skills'>
              <a>Skills</a>
            </Link>
          </li>

          <li className={headerStyles['navbar__list--item']}>
            <i class='bx bxs-phone'></i>
            <Link href='#contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header