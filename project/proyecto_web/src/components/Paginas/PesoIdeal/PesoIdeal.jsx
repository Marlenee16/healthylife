import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer"
import { useNavigate } from "react-router-dom";
import "./PesoIdeal.css"


function PesoIdeal (){
    const navigate =useNavigate();

    return(
    <>
    <Navbar/>


<h1 className="genero">Crear plan personalizado</h1>
<a className="agg">Genero :</a>
<div className="card_genero">
    <br/>

    <br/>
    <div className="gusto">
    <button className="ag" onClick={()=>navigate("/Datos")}>Femenino</button>
    <button className="ag" onClick={()=>navigate("/Datos")}>Masculino </button>
    </div>
    <div className="imagener">
    <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317097136_112361218372067_5505557749244128993_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=diafdoiWeS0AX9vTPNZ&_nc_ht=scontent.fsal6-1.fna&oh=00_AfAkExNvgn47zFLIe-bMyWeVkf59ORMbGtFPa1vHU0GHQw&oe=638BC93B" alt="mujer" ></img>
    <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316669758_112361268372062_3168260170180132861_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=yjgKwtHeXDAAX8BuwG8&_nc_ht=scontent.fsal6-1.fna&oh=00_AfBg7ZfJRX94UzOx24UfW_1fK40VZZ4QKejkFJOkBOQmLA&oe=638B7529" alt="hombre" ></img>



    </div>
</div>

<hr/>
<Footer/>
    </>


)
}

export default PesoIdeal;

