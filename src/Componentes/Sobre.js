import React from "react";
import style from "../assets/Css/sobre.module.css";


//react-icons
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'
const st = style;

const Sobre = () => {
  return (
    <section className={st.sobre}>
      <h1>Mas, quem sou eu??</h1>
      <div className={st.grupo_sobre}>
        <div id={st.eu}></div>
        <div className={st.texto}>
          <p>
            Olá, sou
            Gabriel Hipólito Carneiro, estudante de Ciência da Computação no 2º
            semestre e freelancer em desenvolvimento web. Com 24 anos, meu foco é
            criar sites modernos, responsivos e de alta performance. Minha paixão
            pela tecnologia e design se reflete na qualidade dos meus projetos.
            Estou aqui para transformar suas ideias em realidade digital. Vamos
            colaborar para construir uma presença online excepcional para o seu
            negócio.
            <br />
            <br />
            Se você já possui uma empresa, um pequeno negócio ou está no processo de iniciar o seu empreendimento e deseja apresentar o seu produto ou serviço na internet, ficarei feliz em ajudar! Entre em contato comigo para que possamos conversar. 

          </p>
          <div className={st.contatos}>
            <a href="">
              <span>
              <AiFillLinkedin/>
              </span>
            </a>

            <a href="">
              <span>
              <AiFillGithub/>
              </span>
            </a>

            <a href="">
              <span>
              <AiFillInstagram/>
              </span>
            </a>

            <a href="">
              <span>
              <HiDocumentText/>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sobre;
