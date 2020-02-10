import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div>
      <header>
        <h1 className="titulo-header">FutureTube</h1>       
        <input type="text" placeholder="Busca/Search/Busqueda" className="pesquisa" />
      </header>

      <main id="inicial">
      <section class="menu" id="menu-lateral">
            <ul class="lista-menu">
                <li><a href="futuretube.html">Home</a></li>
                <li>Em alta</li>
                <li>Inscrições</li>
                <li>Originais FutureTube</li>
                <li>Histórico</li>
            </ul>
        </section>
        <section className="principal" id="section-imgs">
            <figure className="imagens-videos" id="link1">
                <a href="video1.html" >
                    <img src={ require("./vid1.png") } />
                </a>
                <p>Travel by Ireland!</p>
                <p id="segundo">Encante-se com as belezas da Irlanda</p>
                <p id="nome-canal">Future4Travel and Interchanges</p>
            </figure>

            <figure className="imagens-videos" id="link2">
                <a href="video2.html" >
                    <img src={ require("./vid2.png") } />
                </a>
                <p>O CORPO HUMANO PARTE 1 - Corrente sanguínea</p>
                <p id="segundo">Venha viajar pelo corpo conosco!</p>
                <p id="nome-canal">Future4Science</p>
            </figure>

            <figure className="imagens-videos" id="link3">
                <img src={ require("./vid3.png") } />
                <p>Colourful</p>
                <p id="segundo">Colours, colours and more colours!</p>
                <p id="nome-canal">Future4Kids</p>
            </figure>

            <figure className="imagens-videos" id="link4">
                <img src={ require("./vid4.png") } />
                <p>LA PLAYA</p>
                <p id="segundo">Vamos nos divertir en la playa.</p>
                <p id="nome-canal">Future4Spanish</p>
            </figure>

            <figure className="imagens-videos" id="link5">
                <img src={ require("./vid5.png") } />
                <p>Turismo escondido - Parque Nacional Shangri-lá</p>
                <p id="segundo">Um dos lugares mais fantásticos do Brasil</p>
                <p id="nome-canal">Future4Geography</p>
            </figure>

            <figure className="imagens-videos" id="link6">
                <img src={ require("./vid6.png") } />
                <p>PESTES 1 - Lebre</p>
                <p id="segundo">Você sabia que a Lebre é um animal invasivo?!</p>
                <p id="nome-canal">Future4Biology</p>
            </figure>

            <figure className="imagens-videos" id="link7">
                <img src={ require("./vid7.png") } />
                <p>REALIDADES PARALELAS - A Estrela que move consigo o Espaço-Tempo!</p>
                <p id="segundo">Einsten, quando falou sobre a teoria da relatividade, menci...</p>
                <p id="nome-canal">Future4Science</p>
            </figure>

            <figure className="imagens-videos" id="link8">
                <img src={ require("./vid8.png") } />
                <p>EXPEDIÇÃO BR - Equipe FutureAlpha rumo a Marte</p>
                <p id="segundo">Nosso projeto está saindo do papel. Vamos a Marte...</p>
                <p id="nome-canal">Future4Science</p>
            </figure>

        </section>
    </main>

    <footer>
        <h2>Layout desenvolvido por Future4. Execução do projeto: Wesley Araujo.</h2>
    </footer>
    </div>
  )
}

export default App
