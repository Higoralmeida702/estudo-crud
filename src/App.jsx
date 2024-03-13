import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Link, Route} from 'react-router-dom'
import Alunos from './componentes/alunos'
import Home from './componentes/home'
import Sobre from './componentes/sobre'

function App() {
 return (
   <div className='App'>
    <h1>Minha Aplicação React</h1>
    <BrowserRouter>
      <ul>
        <li><Link to="/">Pagina Inicial</Link></li>
        <li><Link to="/alunos">Cadastro de Alunos</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        
      </ul>    

      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/alunos" element={<Alunos/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
