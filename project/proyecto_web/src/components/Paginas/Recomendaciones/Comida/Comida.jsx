
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import "./Comida.css"

const Comida =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar></Navbar>
        <img className="imageejer" src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316551851_112455128362676_4817606129241620086_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=oYrTph-EfV8AX9eH7pk&_nc_ht=scontent.fsal6-1.fna&oh=00_AfBxXXsBGJ8g6yVYoWvxNRShvId2IXadLBdItDX9s-Lraw&oe=638B9CE6"></img>

        <h1 className="p1">La base de una buena salud es llevar una dieta sana y equilibrada que nos brinde a nuestro cuerpo los nutrientes que necesita para funcionar correctamente. Por ello, los expertos recomiendan no caer en nada que pueda perjudicar nuestra salud e incluir siempre alimentos frescos y saludables.
A continuacion te mostramos algunos de los alimentos que deberias evitar para llevar una alimentacion mas sana:</h1>
        
        <hr></hr>
        <div className="cuerpo">
        <img className="p2" src="https://i.pinimg.com/564x/3f/cd/35/3fcd354a7f5e39b3af08395f2f17e0d3.jpg"></img>
    
        <div className="m">
        <ul>
        <b>Bebidas con exceso de</b>
        <li>Bebidas tales como: gaseosas, refrescos, energizantes  contienen cantidades excesivas de azucares, nos hacen mas propensos a sufir sobrepeso, u obesidad asi como tambien nos pueden llevar a desarrollar diversas enfermedades como: diabetes, azucar, tambien aumenta las concentraciones de acido urico</li> <br/>
        </ul>
        </div>

    <img className="p2" src="https://i.pinimg.com/474x/0d/8b/5e/0d8b5e8bc6dda0b723252d2b9c0013bd.jpg"></img>
    
    <div className="m">
        <ul>
        <b>Frituras</b>
        <li>Al freir los alimentos pierden sus propiedades,  las frituras suelen incorporar rebozados que aportan más calorías a la alimentación  y si el aceite está sucio, oscuro o produce humo, aporta una gran cantidad de radicales libres que pueden afectar a las células de la persona que lo consume.</li> <br/>
        </ul>
        </div>

    <img className="p2" src="https://i.pinimg.com/474x/c3/ee/63/c3ee63777393350c30f190202bf0afb6.jpg
"></img>

<div className="m">
        <ul>
        <b>Comidas rapidas, papas fritas.hambuguesas</b>
        <li>Como bien sabemos los deliciosas que pueden ser las hamburguesas acompañadas de papas fritas, pero estos alimentos contiene muchas grasas, condimentos que pueden ser perjudiciales para nuestra salud.</li> <br/>
        </ul>
        </div>
        </div>


        <a className="atras" href="Recomendaciones">Atras</a>

        </>
    
    );

}

export default Comida;