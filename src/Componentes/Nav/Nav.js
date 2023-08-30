import {IoIosMenu} from 'react-icons/io'
import React, { useState } from "react";
import style from "../../assets/Css/nav.css";


//icones

const Nav = () =>{

const [menuActive,setMenuActive] = useState(false)
  



window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  const top = window.scrollY;

  if (top >= 50) {
    nav.style = `
    transition: all 150ms;
     background: #141414;
    `;
  } 
  else {
    return (nav.style = null);
  }

});


function toggleMenu(){ 

  return setMenuActive(!menuActive)
    
}


return (
  <nav className={`nav ${menuActive ? 'activeMenu':""}`}>
    <div className={"nav_left"}>
      <span className={"brand"}>{`<Gabriel/>`}</span>
    </div>{" "}
    {/*left */}
    <div className={"right"}>

      <button onClick={toggleMenu} id={"openMenu"}>
        <IoIosMenu />
      </button>

      <div className={"links"}>
        <ul>
          <li>
            <a href="#in">Inicio</a>
          </li>
          <li>
            <a href="">Quem sou</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
        </ul>
      </div>{" "}
      {/*links */}
    </div>
    {/*right */}
  </nav>
)};

export default Nav;
