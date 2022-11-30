
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import "./Agua.css"

const Agua =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar></Navbar>
        <img className="imageejer" src="https://petitfitbycris.com/wp-content/uploads/2018/08/agua.jpg"></img>

        <h1 className="p1">El consumo de agua debe ser a diario a continuacion te detallamos lo recomendado que debes ingerir:</h1>
        
        <hr></hr>
        <div className="cuerpo">
        <img className="p2" src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317506217_112361718372017_1296649304990108990_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=JLqqMJqD1zYAX_vfAiW&_nc_ht=scontent.fsal6-1.fna&oh=00_AfCMa7PG4d0taSzbUpT4va3LAd0FkHiDBAVTIHHRTaUOZA&oe=638BC3EC"></img>
    
        <div className="m">
        <p className="aguita">
         <br/>        </p>
<div className="m">
    <ul>
Quizá has escuchado el dicho conceptual de 8 vasos mínimos de agua al día. Se dice 8x8 (8 vasos de 8 onzas), la cual es una manera sencilla de declarar la ingesta de bebida al día, para no sufrir una deshidratación.

Sin embargo, existen indicaciones hídricas más específicas para cada contingencia en particular.<hr/>

<li>En el contingencia de las mujeres se recomienda 2.7 litros de fluidos y en el contingencia de los varones, esta enchufe es de 3.5 litros de fluidos. Es eminente declarar que esta enchufe incluyen todos los líquidos que consumimos, incluyendo el bebida proveniente de los alimentos (los cuales representan el 20% del total)</li> <br/>

<li>Por otro lado, una manera sencilla de calcular el requerimiento de agua es calcular 35 ml por kg de peso (2).</li> <br/>

<li>Por ende, si se trata de un adulto de 70 kg, el requerimiento hídrico sería de 2.45 litros de agua al día. Asimismo, sobre este se adiciona 1.5 litros de agua en caso de realizar deporte o alguna actividad física (o 500 ml por cada 30 min de actividad física). Es recomendable consumir 500 ml 2-3h antes, 500 ml durante y 500 ml de agua después de la actividad física que se realice (5).</li>
</ul>
</div>
        </div>


        </div>

        <a className="atras" href="Recomendaciones">Atras</a>

        
        </>
    
    );

}

export default Agua;