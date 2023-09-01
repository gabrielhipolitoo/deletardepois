import { PiLaptopThin } from 'react-icons/pi'
import React from 'react'
import style from '../assets/Css/servicos.module.css'
import { CelularSvg, PenSvg,PcSvg } from '../assets/Imgs/servicos/Svg'
const st = style


const Servicos = () => (
    <section className={st.servicos}>
        <h1>Serviços</h1>
        <div className={st.icones_servicos}>
            <div className="">
                <PcSvg/>
                <h2>Desenvolvimento Web</h2>
                <p>
                Desenvolvo sites profissionais de diversos tipos, incluindo landing pages, blogs, sites institucionais e e-commerce.
                </p>
            </div>
            <div className="">
                <PenSvg/>
                <h2>Ui/Ux Design</h2>
                <p>
                Refaço sua pagina sua pagina utilizando tecnicas do ui/ux design, deixando o seu site mais claro e objetivo
                </p>
            </div>

            <div className="">
                <CelularSvg/>
                <h2>Alta performaçe e responsividade</h2>
                <p>
                Desenvolvo sites profissionais de diversos tipos, incluindo landing pages, blogs, sites institucionais e e-commerce.
                </p>
            </div>
        </div>
    </section>
)

export default Servicos