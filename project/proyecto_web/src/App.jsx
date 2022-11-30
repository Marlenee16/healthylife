import React from 'react';
import './App.css';
import Recetario from './components/Paginas/Recetario/Recetario';
import { Route, Routes } from 'react-router-dom';
import PesoIdeal from './components/Paginas/PesoIdeal/PesoIdeal';
import Programa from './components/Paginas/Programa/Programa';
import Recomendaciones from './components/Paginas/Recomendaciones/Recomendaciones';
import Registrate from './components/Paginas/Registrate/Registrate';
import Login from './components/Paginas/Login/Login';
import Home from './components/Paginas/Home/Home';
import { useUserContext } from './contexts/UserContext';
import Proteinas from './components/Paginas/Recetario/Proteinas/Proteinas';
import Vitaminas from './components/Paginas/Recetario/Vitaminas/Vitaminas';
import Grasas from './components/Paginas/Recetario/Grasas/Grasas';
import Vegano from './components/Paginas/Recetario/Vegano/Vegano';
import Faciles from './components/Paginas/Recetario/Faciles/Faciles';
import Salvador from './components/Paginas/Recetario/Salvador/Salvador';
import Postres from './components/Paginas/Recetario/Postres/Postres';
import Ejercitarte from './components/Paginas/Recomendaciones/Ejercitarte/Ejercitarte';
import Comida from './components/Paginas/Recomendaciones/Comida/Comida';
import Agua from './components/Paginas/Recomendaciones/Agua/Agua';
import Fruta from './components/Paginas/Recomendaciones/Fruta/Fruta';
import Estres from './components/Paginas/Recomendaciones/Estres/Estres';
import Mitos from './components/Paginas/Recomendaciones/Mitos/Mitos';

function App() {
  
  const {login, register, user } = useUserContext();

  const onLoginHandler = async ( identifier, password) => {
    await login(identifier,password);
  }

  const onRegisterHandler = async (username, email, password) => {
    await register(username, email, password);
  }
  return (

    <div className="App">
  
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/Recetario" element={<Recetario/>} />
        <Route path="/PesoIdeal" element={<PesoIdeal/>} />
        <Route path="/Programa" element={<Programa/>} />
        <Route path="/Recomendaciones" element={<Recomendaciones/>} />
        <Route  path="/Login" element={<Login onLogin={onLoginHandler}/>} />
        <Route  path="/Registrate" element={<Registrate onRegister={onRegisterHandler}/>} />

        <Route path='/Proteinas' element={<Proteinas/>}/>
        <Route path='/Vitaminas' element={<Vitaminas/>}/>
        <Route path='/Grasas' element={<Grasas/>}/>
        <Route path='/Vegano' element={<Vegano/>}/>
        <Route path='/Faciles' element={<Faciles/>}/>
        <Route path='/Salvador' element={<Salvador/>}/>
        <Route path='/Postres' element={<Postres/>}/>

        <Route path='/Ejercitarte' element={<Ejercitarte/>} />
        <Route path='/Comida' element={<Comida/>} />
        <Route path='/Agua' element={<Agua/>} />
        <Route path='/Fruta' element={<Fruta/>} />
        <Route path='/Estres' element={<Estres/>} />
        <Route path='/Mitos' element={<Mitos/>} />

        </Routes>



    </div>
  );
}

export default App
