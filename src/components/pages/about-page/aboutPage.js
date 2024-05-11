import React from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import HeaderComponent from "../../headerComponent";


const AboutPageComponent = () =>{
    return(
        <div className="AboutPageAlign">
            <MainNavBar/>
            <ResponsiveNavBar/>
            <HeaderComponent/>
            <h1>
                Quem somos nós?
            </h1>
            <p>
                HelloWorld ! é um projeto Open Source (permite contribuição de outros devs), o 
                objetivo do projeto é ser uma porta de entrada para quem quer conhecer ou é 
                entusiasta do mundo da programação, computação, tecnologia e afins, onde o usuário poderá 
                encontrar conteúdos enxutos e introdutórios sobre diversos conceitos, linguagens de programação
                e todo conteúdo que puder agregar à comunidade de devs.  
            </p>            
            <p>
                O projeto não possui fins 
                lucrativos, somente didático e de apoio à comunidade.
            </p>
        </div>
    );
}

export default AboutPageComponent;