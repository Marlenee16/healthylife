
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import "./Ejercitarte.css"

const Ejercitarte =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar></Navbar>
        <img className="imageejer" src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316821335_112361321705390_5245419991160281311_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=6RcJwNO04I4AX-wzZr8&_nc_oc=AQlLOJmmc0cpn08vCoCjY2RnUwFJPqZT_MezcvzOpA9ujExsKAF8fS2BlEWk3oyNd6o&_nc_ht=scontent.fsal6-1.fna&oh=00_AfAqBChY2D_Oy1BdGLcB_aQQ3fA9oaLUqepYNV-HFE0LYA&oe=638C20A2"></img>

        <h1 className="p1">El ejercitarte genera impactos positivos tanto en tu cuerpo, como en tu salud, es por ello que es de suma importancia realizarlo con frecuencia <br/> a continuacion te damos unos tips que podrias tomar en cuenta al ejercitarte:</h1>
        
        <hr></hr>
        <div className="cuerpo">
        <img className="p2" src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316668171_112361161705406_4719158708710535679_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=Fz3TiQ9cu6EAX9umQ20&_nc_ht=scontent.fsal6-1.fna&oh=00_AfBWEbCq4dQdyfagiQ6Kh97FAfMxj3UqXogpImZst_eO4w&oe=638C615E"></img>
    
        <div className="m">
        <ul>
        <li>Recuerda hidratarte mientras realizas tus rutinas de ejercicio ya que durante el ejercicio el agua absorve el calor de tus músculos y lo elimina a través del sudor, manteniendo así la temperatura corporal.</li> <br/>
        <li> Recordar que las necesidades hídricas pueden variar en cada persona de acuerdo con diversos factores como: la edad, el sexo, la intensidad y duración de las posibles actividades físicas que realicemos, las altas temperaturas y la humedad ambiental, el tipo de ropa y la tasa de sudor individual de cada persona. </li><br/>
        </ul>
        </div>

    <img className="p2" src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316678740_112361055038750_7424648340796729372_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=xF77ZZNOTswAX-kYwUR&_nc_ht=scontent.fsal6-1.fna&oh=00_AfCnJrPfrMZwtHH2g1ZVyL94vw4N2lobtjXlFhIqtAk2rw&oe=638C104E"></img>
    
    <div className="m">
    <ul>
    <li>Si la actividad es al aire libre, debes estar atento al clima, usar ropa y zapatos cómodos y apropiados.</li> <br/>
<li> Tomar medidas de protección contra factores ambientales como el calor, el frío, el agua, la luz solar, la altitud y el terreno. </li> <br/>
<li> Tener especial cuidado cuando realizas operaciones pesadas en ambientes muy calurosos. </li>
<li> Realiza calentamiento bajo  de 5-10 minutos y estiramientos. Esto reduce el riesgo de lesiones y reduce la probabilidad de complicaciones cardiovasculares. </li> <br/>
</ul>
    </div>

    <img className="p2" src="    https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316665304_112361665038689_4889166368107964653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZdTIMPuubsYAX9Yu2N9&_nc_oc=AQlVhfSO1sb7WODaEw3Snwu7TjYmpMJTAx9OUtk3LTpMNjpeg81y80aiHLYWDnPnAgo&_nc_ht=scontent.fsal6-1.fna&oh=00_AfCT7MQzv7Qbe123eTPaNIG41HL3o5ehcDdBcTbESD2vyw&oe=638B2198"></img>

    < div className="m">
        <ul>
 <li>Sécate el sudor y cámbiate de ropa para evitar enfriarte.</li> <br/>
<li> Algo muy importante es definir y diseñar una rutina de ejercicio de acuerdo a tus objetivos, condición física y compromiso. No olvides consultar con un experto para asegurarte de no sufrir lesiones innecesarias y por desconocimiento.  </li>

        </ul>
    </div>
        </div>


        <a className="atras" href="Recomendaciones">Atras</a>

        </>
    
    );

}

export default Ejercitarte;