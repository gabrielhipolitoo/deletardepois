import { PiLaptopThin } from 'react-icons/pi'
import React from 'react'
import style from '../assets/Css/servicos.module.css'
const st = style


const Servicos = () => (
    <section className={st.servicos}>
        <h1>Serviços</h1>
        <div className={st.icones_servicos}>
            <div className="">
                <PiLaptopThin />
                <h2>Desenvolvimento Web</h2>
                <p>
                Desenvolvo sites profissionais de diversos tipos, incluindo landing pages, blogs, sites institucionais e e-commerce.
                </p>
            </div>

            <div className="">
                <PiLaptopThin />
                <h2>Desenvolvimento Web</h2>
                <p>
                Desenvolvo sites profissionais de diversos tipos, incluindo landing pages, blogs, sites institucionais e e-commerce.
                </p>
            </div>

            <div className="">
                <PiLaptopThin />
                <h2>Desenvolvimento Web</h2>
                <p>
                Desenvolvo sites profissionais de diversos tipos, incluindo landing pages, blogs, sites institucionais e e-commerce.
                </p>
            </div>
        </div>
    </section>
)

export default Servicos