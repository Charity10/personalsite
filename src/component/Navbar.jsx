import { useState } from 'react';

function Navbar() {
  const [colorChage, setColorChange] = useState(false);
  const [isActive, setIsActive] = useState('false');

  // hamburger menu
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  }
  // const removeActive = () => {
  //   setIsActive(false)
  // }

  // change navbar color
  const changeNavbarColor = () => {
    if(window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }
  window.addEventListener('scroll', changeNavbarColor);


  return (
     <div classv Name={
      colorChage ? "navbar colorChange"
    : "navbar"
    }>
      <ul className={isActive ? "nav-list active" : "nav-list"}>
        <li><a href="#">Mercy Umoh</a></li>
        <li><a href="#about-section">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Achievment</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className={isActive ? 'hamburger active' : 'hamburger'} onClick={toggleActiveClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>


      </div>
     </div>
  )
}


export default Navbar;