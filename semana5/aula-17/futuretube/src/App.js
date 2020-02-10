import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return ( 
    <div>
      <header>
        <a href="futuretube.html" alt="Ao clicar aqui, você retornará à Página Inicial"><h1 className="titulo-header">FutureTube</h1></a>        
        <input type="text" placeholder="Busca/Search/Busqueda" className="pesquisa" />
      </header>

      <main id="inicial">
      <section class="menu" id="menu-lateral">
            <ul class="lista-menu">
                <ol><a href="futuretube.html">Home</a></ol>
                <ol>Em alta</ol>
                <ol>Inscrições</ol>
                <ol>Originais FutureTube</ol>
                <ol>Histórico</ol>
            </ul>
        </section>
        <section className="principal" id="section-imgs">
            <figure className="imagens-videos" id="link1">
                <a href="video1.html" >
                    <img src={ require("src/vid1.png") } />
                </a>
                <p>Vídeo 1</p>
            </figure>

            <figure className="imagens-videos" id="link2">
                <a href="video2.html" >
                    <img src={ require("src/vid2.png") } />
                </a>
                <p>Vídeo 2</p>
            </figure>

            <figure className="imagens-videos" id="link3">
                <img src={ require("src/vid3.png") } />
                <p>Vídeo 3</p>
            </figure>

            <figure className="imagens-videos" id="link4">
                <img src={ require("src/vid4.png") } />
                <p>Vídeo 4</p>
            </figure>

            <figure className="imagens-videos" id="link5">
                <img src={ require("src/vid5.png") } />
                <p>Vídeo 5</p>
            </figure>

            <figure className="imagens-videos" id="link6">
                <img src={ require("src/vid6.png") } />
                <p>Vídeo 6</p>
            </figure>

            <figure className="imagens-videos" id="link7">
                <img src={ require("src/vid7.png") } />
                <p>Vídeo 7</p>
            </figure>

            <figure className="imagens-videos" id="link8">
                <img src={ require("src/vid8.png") } />
                <p>Vídeo 8</p>
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
