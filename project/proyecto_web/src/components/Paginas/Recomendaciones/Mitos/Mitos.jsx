
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import "./Mitos.css"

const Mitos =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar></Navbar>
        <img className="imageejer" src="https://blogamaseguros.com/wp-content/uploads/2019/08/MITOS-NUTRICIONALES.jpg"></img>

        <h1 className="p1">Las creencias populares y mitos son abundantes en relación a la alimentación y dieta, muchos de ellos son falsos, A continuacion te detallamos algunos:</h1>
        
        <hr></hr>
        <div className="cuerpo">
    
        <div className="m">
        <ul>
        <b>Los alimentos light se pueden comer en forma libre</b>
        <li>
Los alimentos light son adecuados cuando forman parte de una dieta para bajar de peso, como una manera de permitir la ingesta de alimentos que en forma corriente estarían eliminados o muy restringido de un plan de alimentación bajo en calorías. Por lo tanto, no deben ser consumidos en forma libre, ya que el aporte calórico es menor, pero no ausente.</li> <br/>
        </ul>
        </div>

        <img className="p2" src="https://i.pinimg.com/474x/53/c8/d1/53c8d1247521f1213a0f0ad729536895.jpg"></img>
    
    <div className="m">
        <ul>
        <b>Las grasas vegetales son más sanass</b>
        <li>
En muchos productos se señala que contienen "aceites vegetales", lo que puede confundir al consumidor porque se asocian con grasas que tienen un beneficio para la salud. Cuando es referido a aceites vegetales tipo aceite de oliva, maravilla o pepita de uva, este concepto es adecuado.</li> <br/>
        </ul>
        </div>

    <img className="p2" src="https://i.pinimg.com/564x/c4/89/3e/c4893edf62b288782d74bc4cf1b822c0.jpg
"></img>

<div className="m">
        <ul>
        <b>Comer carbohidratos y frutas en la noche engorda</b>
        <li>
Si estamos en un tratamiento para bajar de peso, se recomienda evitar el consumo de estos alimentos ya que nos entregan mucha energía, la cual no utilizaremos en el periodo de reposo mientras dormimos, es por esto que se restringe.
<br/>
Si tenemos un peso normal, podemos consumirlos en la noche pero siempre manteniendo una ingesta adecuada, respetando el tamaño de porción indicada por su médico ó nutricionista tratante.</li> <br/>
       
        </ul>


        </div>
        <img className="p2" src=" https://i.pinimg.com/474x/5a/26/29/5a2629e8135a32d749f748cba2fbe775.jpg
"></img>

<div className="m">
        <ul>
        <b>No hacer un tiempo de comida te hace adelgazar</b>
        <li>
        Uno de los pilares fundamentales para llevar una alimentación saludable, es mantener una ingesta de alimentos cada 4 horas, de esta manera nos mantenemos mas satisfechos por mas tiempo y ayudamos a mantener nuestro metabolismo activo.

<br/></li>
       
        </ul>


        </div>
        <img className="p2" src=" https://i.pinimg.com/474x/15/4c/bb/154cbbdba1894e206b60e72184d7d7ae.jpg
"></img>






<div className="m">
        <ul>
        <b>El pan engorda</b>
        <li>
        El pan es un alimento rico en hidratos de carbono (azúcares) que aporta parte de las calorías básicas que necesitas para vivir. Te hará subir de peso si la cantidad ingerida sobrepasa las necesidades diarias (2 porciones al día)
<br/></li>
       
        </ul>


        </div>
        <img className="p2" src=" https://i.pinimg.com/474x/dc/fb/5e/dcfb5e1ed82cfe7cfb05939e624a1f39.jpg
"></img>



        </div>

        <a className="atras" href="Recomendaciones">Atras</a>

        </>
    
    );

}

export default Mitos;