import React from 'react'
import style  from '../../assets/Css/inicio.module.css'

//svg
import donw from '../../assets/Imgs/donw.svg'

const st = style

const Inicio = () => {
  return (
    <section className={st.inicio}>
        <div className={st.texto}>
            <p>Eu sou</p>
            <strong>Gabriel Hipólito, desenvolvedor web.</strong>
            <p>Meu objetivo é levar sua empresa para o mundo web com alta qualidade e tecnologia de ponta.</p>
            <img src={donw} alt="" />
        </div>
    </section>
  )
}

export default Inicio