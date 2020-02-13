import React from 'react'
import './App.css'
import MyComponents from './MyComponents/MyComponents'



function App() {
  return (
    <div className="App">
      <h2>::Fourgram - by Future4::</h2>
      <MyComponents profile="https://farm1.staticflickr.com/468/buddyicons/43855786@N04_r.jpg?1485369362" title="wesleyaraujo.br" image="https://farm9.staticflickr.com/8525/8483238085_a48fe65e39_b.jpg" />
      <MyComponents profile="https://farm1.staticflickr.com/468/buddyicons/43855786@N04_r.jpg?1485369362" title="wesleyaraujo.br" image="https://live.staticflickr.com/3836/33748401745_63cceb2751_b.jpg" />
      <MyComponents profile="https://farm1.staticflickr.com/468/buddyicons/43855786@N04_r.jpg?1485369362" title="wesleyaraujo.br" image="https://live.staticflickr.com/8565/16419674640_f6c4677d9e_b.jpg" />
    </div>
  )
}

export default App
