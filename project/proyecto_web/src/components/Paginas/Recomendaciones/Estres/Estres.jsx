
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import "./Estres.css"

const Estres =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar></Navbar>
        <img className="imageejer" src="https://www.laportadacanada.com/userfiles/images/Paciencia.jpg"></img>

        <h1 className="p1">El estres te provoca deterioro en tu salud, puedes implementar estrategias para manejarlo</h1>
        
        <hr></hr>
        <div className="cuerpo">
        <img className="p2" src="https://i.pinimg.com/474x/8a/8a/57/8a8a5715e98bf3e043614501af65c82e.jpg"></img>
    
        <div className="m">
        <p className="aguita">
         <br/>        </p>
<div className="m">
    <ul>
    Todos los seres vivos experimentamos estrés. Esto se debe a que el estrés no es una enfermedad ni una condición especial, sino que más bien, es una respuesta natural de nuestro organismo ante situaciones desafiantes que se nos presenten    <hr/>
   <li className="Afor"> Afortunadamente evitar o revertir los efectos del estrés crónico es posible. Si bien es cierto, no siempre podemos controlar los agentes externos que nos causan el estrés, sí podemos controlar cómo lidiamos con él.

   </li><br/>
<li>Terapia psicológica</li> <br/>

<li>Practicar yoga y meditación</li> <br/>

<li>Acudir a sesiones de masajes</li> <br/>

<li>Ejercicios de respiración diafragmática (respiraciones profundas y controladas)</li> <br/>

<li>Desconectarte del ajetreo y pasar tiempo en la naturaleza</li> <br/>

<li>Evitar el exceso de cafeína (café, gaseosas, té, etc.) </li> <br/>

<li>Pasar tiempo con seres queridos y mascotas </li> <br/>


</ul>
<img className="p2" src="https://i.pinimg.com/474x/4d/40/d3/4d40d30faaf2f6fd0630fff82ad8a4ec.jpg
"></img>

</div>
        </div>


        </div>

        <a className="atras" href="Recomendaciones">Atras</a>

        
        </>
    
    );

}

export default Estres;