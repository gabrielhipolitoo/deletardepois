import React from "react";
import style from "../../assets/Css/nav.module.css";

const st = style;

window.addEventListener("scroll", () => {
  const nav = document.querySelector("." + st.nav);
  const top = window.scrollY;

  if (top >= 50) {
    nav.style = `
    transition: all 150ms;
     background: linear-gradient(207deg, #a5532257 10%, rgba(181, 181, 181, 0) 100%);


    `;
  } else {
    return (nav.style = null);
  }
});

const Nav = () => {
  return (
    <nav className={`${st.nav} nav`}>
      <div className={st.nav_left}>
        <span className={st.brand}>{`<Gabriel/>`}</span>
      </div>{" "}
      {/*left */}
      <div className={st.right}>
        <div className={st.links}>
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
  );
};

export default Nav;
