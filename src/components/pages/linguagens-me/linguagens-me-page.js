import React from "react";
import { useState } from "react";
import MainNavBar from "../../main-nav-bar";
import ResponsiveNavBar from "../../responsiveNavBarComponent";
import ContentBtnComponent from "../../contentBtnComponent";
import HeaderComponent from "../../headerComponent";

const LinguagensMe = () => {

    const[contentVisibleHTML, setContentVisibleHTML] = useState(false);
    const handleButtonClickHTML = () =>{
        setContentVisibleHTML(!contentVisibleHTML)
    } 
    
    const[contentVisibleCSS, setContentVisibleCSS] = useState(false);
    const handleButtonClickCSS = () =>{
        setContentVisibleCSS(!contentVisibleCSS)
    }

    return(
        <div>
            <HeaderComponent/>
            <MainNavBar/>
            <ResponsiveNavBar/>
            <h1>Hello <span className='title-color'>world</span> !</h1>     
            <nav>
                <ul className="nav-align">
                    <li>
                        <ContentBtnComponent title={'HTML'} onClick={handleButtonClickHTML} />
                        {contentVisibleHTML &&
                            <div className="content-align">
                                <h2>O que é?</h2>
                                <p>
                                    HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.
                                </p>                                                               
                                <p>
                                    HTML não é uma linguagem de programação; é uma linguagem de marcação, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira. As tags anexas podem transformar uma palavra ou imagem num hiperlink, pode colocar palavras em itálico, pode aumentar ou diminuir a fonte e assim por diante. Por exemplo, veja a seguinte linha de conteúdo:
                                </p>
                                <p>
                                    A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento.
                                </p>
                                <p>   
                                    O HTML não é considerado uma linguagem de programação, já que ele não pode criar funcionalidades dinâmicas. Ao invés disso, com o HTML, os usuários podem criar e estruturar seções, parágrafos e links usando elementos, tags e atributos.
                                </p>
                                <h2>Principais aplicações</h2>
                                <p>
                                    <span>Desenvolvimento Web:</span>
                                    <br></br> <br></br>
                                    Os desenvolvedores usam códigos HTML para projetar como um navegador vai exibir os elementos das páginas, como textos, hiperlinks e arquivos de mídia.                                    
                                    <br></br>
                                    <br></br>
                                    <span>Navegação na Internet:</span> 
                                    <br></br><br></br>
                                    Os usuários podem navegar facilmente e inserir links entre páginas e sites relacionados, já que o HTML é amplamente usado para incorporar hiperlinks.
                                    <br></br>
                                    <br></br>
                                    <span>Documentação:</span>
                                    <br></br><br></br>
                                    O HTML torna possível a organização e a formatação de documentos, de maneira similar ao Microsoft Word.
                                    <br></br>
                                    <br></br>
                                    Também vale notar que o HTML agora é considerado um padrão oficial da internet. O <strong>World Wide Web</strong> Consortium (W3C) mantêm e desenvolve especificações do HTML, além de providenciar atualizações regulares.
                                </p>
                            </div>
                        }                        
                    </li>
                    <li>
                        <ContentBtnComponent title={'CSS'} onClick={handleButtonClickCSS} />
                        {contentVisibleCSS &&
                            <div className="content-align">
                                <h2>O que é?</h2>
                                <p>
                                    CSS é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo em Cascatas. 
                                </p>
                                <p>
                                    CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.
                                </p>
                                <p>
                                    CSS foi desenvolvido pelo W3C (World Wide Web Consortium) em 1996, por uma razão bem simples. O HTML não foi projetado para ter tags que ajudariam a formatar a página. Você deveria apenas escrever a marcação para o site.
                                </p>
                                <p>
                                   Tags como 'font' foram introduzidas na versão 3.2 do HTML e causaram muitos problemas para os desenvolvedores. Como os sites tinham diferentes fontes, cores e estilos, era um processo longo, doloroso e caro para reescrever o código. Assim, o CSS foi criado pelo W3C para resolver este problema.
                                </p>
                                <p>
                                   A relação entre HTML e CSS é bem forte. Como o HTML é uma linguagem de marcação (o alicerce de um site) e o CSS é focado no estilo (toda a estética de um site), eles andam juntos.
                                </p>
                                
                                <h2>Como o CSS funciona?</h2>
                                <p>
                                   O CSS é uma ferramenta muito potente que possibilita criar diversas funcionalidades ao invés de usar JavaScript ou outra linguagem mais pesada. Se usado com moderação, CSS pode viabilizar uma ótima experiência ao desenvolvedor e usuários das páginas web.
                                </p>
                                <p>
                                   Com o Cascading Style Sheets é possível criar animações complexas, criar efeitos com uso de parallax, que faz parecer que a imagem de fundo tem uma profundidade diferente um dos outros, criar sites interativos e também jogos com HTML5 e CSS3.
                                </p>
                            </div>
                        }
                    </li>

                </ul>
            </nav>       
        </div>
    );
}

export default LinguagensMe;