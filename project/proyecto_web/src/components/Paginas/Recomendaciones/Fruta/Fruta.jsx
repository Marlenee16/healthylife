
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import "./Fruta.css"

const Fruta =()=>{
    const navigate = useNavigate();
    return(
        <>
        <Navbar></Navbar>
        <img className="imageejer" src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316551851_112455128362676_4817606129241620086_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=oYrTph-EfV8AX9eH7pk&_nc_ht=scontent.fsal6-1.fna&oh=00_AfBxXXsBGJ8g6yVYoWvxNRShvId2IXadLBdItDX9s-Lraw&oe=638B9CE6"></img>

        
        <hr></hr>
                <div className="m">
        <ul>
        <li> Arandanos</li> 
        Los arándanos tienen poderosos beneficios para la salud.

    Tienen un perfil nutricional impresionante, siendo particularmente altos en fibra, vitamina C, vitamina K y manganeso.

    Los arándanos poseen gran cantidad de  antioxidantes  pueden reducir el riesgo de enfermedades crónicas, como las enfermedades cardíacas, la diabetes y el Alzheimer.

    Un estudio encontró que consumir arándanos regularmente puede aumentar las células asesinas naturales en el cuerpo. Estas ayudan a defenderte contra el estrés oxidativo y las infecciones virales.


        </ul>
        </div>
        <div className="cuerpo">
        <img className="p2" src="https://i.pinimg.com/564x/09/50/04/095004292f6d0c80d733d132145dc7d0.jpg"></img>
        </div>

        <div className="m">
            <ul>
        <li>Piña</li> 
        La piña es una fruta tropical. Una taza (237 ml) de piña proporciona el 131% de la ingesta diaria de referencia (IDR) para la vitamina C y el 76% de la IDR para el manganeso. <br/>
        La piña también contiene bromelina, una mezcla de enzimas conocida por sus propiedades antiinflamatorias y su capacidad para digerir proteínas.
        Estudios en laboratorio y en animales sugieren que la bromelina puede ayudar a proteger contra el cáncer y el crecimiento de tumores.
        </ul>
        </div>
 
    <div className="cuerpo">

    <img className="p2" src="https://i.pinimg.com/474x/33/ae/73/33ae73e7af25d43448fde62c0b58bb8a.jpg"></img>
    </div>

    <div className="m">
            <ul>
        <li>Manzana</li> 
        Contienen una gran cantidad de fibra, vitamina C, potasio y vitamina K. También proporcionan algunas vitaminas B. <br/>
        Los estudios sugieren que los antioxidantes de las manzanas pueden promover la salud del corazón y reducir el riesgo de diabetes tipo 2, cáncer y Alzheimer.Estudios en laboratorio y en animales sugieren que la bromelina puede ayudar a proteger contra el cáncer y el crecimiento de tumores.<br/>
        Otro beneficio importante para la salud de las manzanas es su contenido de pectina.
        La pectina es una fibra prebiótica que alimenta a las bacterias buenas del intestino y ayuda a mejorar la digestión y la salud metabólica.
        </ul>
        </div>
 
    <div className="cuerpo">

    <img className="p2" src="https://i.pinimg.com/736x/94/c0/c0/94c0c011b8722d82866e34a1bf4b4189.jpg"></img>
    </div>

    <div className="m">
            <ul>
        <li>Mango</li> 
        Los mangos son una excelente fuente de vitamina C. <br/>
        También contienen fibra soluble, que puede proporcionar muchos beneficios para la salud. <br/>
        Además, los mangos tienen fuertes propiedades antioxidantes y antiinflamatorias que pueden ayudar a reducir el riesgo de enfermedades.<br/>
        En estudios en animales, los compuestos vegetales en los mangos han demostrado proteger contra la diabetes.        </ul>
        </div>
 
    <div className="cuerpo">

    <img className="p2" src="https://i.pinimg.com/736x/05/4e/eb/054eeb6aba42c405842389967d617763.jpg"></img>
    </div>

    <div className="m">
            <ul>
        <li>Naranja</li> 
        Una naranja mediana proporciona una cantidad significativa de vitamina C y potasio. También son una buena fuente de vitaminas B, como la tiamina y el folato. <br/>
        Los compuestos vegetales de las naranjas son responsables de la mayoría de sus beneficios para la salud. Entre ellos están los flavonoides, los carotenoides y el ácido cítrico. <br/>
        Por ejemplo, el ácido cítrico puede reducir el riesgo de cálculos renales.<br/>
        Las naranjas son similares a los limones con sus grandes cantidades de vitamina C y ácido cítrico, que ayudan a aumentar la absorción de hierro y a prevenir la anemia.       </ul>
        </div>
 
    <div className="cuerpo">

    <img className="p2" src="https://i.pinimg.com/736x/ad/19/2e/ad192e54fd8bae79e0e54396748a4ba2.jpg"></img>
    </div>

    <a className="atras" href="Recomendaciones">Atras</a>
        </>
    
    );

}

export default Fruta;