import './App.css';
import './stylesheets/Pantalla.css'
import './stylesheets/BotonClear.css'

import Boton from './components/Boton.js';
import Pantalla from './components/Pantalla.jsx';
import { BotonClear } from './components/BotonClear.js';
import logo from './img/PixelPerfectWeb.png'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  return (
    <div className="App">
      <div className='fcc-logo-contenedor'>
        <img
          src={logo}
          className='fcc-logo'
          alt='Logo de PixelPerfect' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
