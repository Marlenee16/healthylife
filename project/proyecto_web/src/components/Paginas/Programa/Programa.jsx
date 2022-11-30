import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Programa.css"
function Programa (){

    return(
    <>
    <Navbar/>
    <div className="contenedor">
    <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317625666_112361348372054_2590162079410825791_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=inOk03DlGU4AX-1dMNi&_nc_ht=scontent.fsal6-1.fna&oh=00_AfDP1Tcq6d1vE4y23MAT8E3HKMhWq7Jhd7W0XH2b7mUSNg&oe=638B8B7E"></img>
    <p> <b>Recomiendanos para <br/>
        llegar a mas personas </b>
    </p>

    <p className="parrafo2">
    <b>
        Porque si nos cuidamos, <br/>
        nos cuidamos entre todos, <br/>
        ayudanos a llegar a mas </b>
    </p>

    <a className="unete" href="Registrate" > <b> Unete </b></a>

    </div>
    <body>

    <h2> ¿Como Funciona? </h2>
    <div className="funcion">
    <br></br>
    <br></br>
    <div className="cards">
        <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316539189_112361598372029_1715402330993693007_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=htHIM9A4TiwAX8oa-t4&tn=tLUqyBG7vcPCxQI8&_nc_ht=scontent.fsal6-1.fna&oh=00_AfB4EZ73smEqWIs3WsZXeDKjNyMtFtx2XDfp1jfWapRoYw&oe=638AF002" alt="registrate"></img>

        <div className="contenido">
            <h3>REGISTRATE</h3>
            <p>Totalmente gratuito, llena tus datos e inicia sesión para empezar</p>
        </div>
    </div>

    <div className="cards">
        <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317846003_112361618372027_3439296608470271302_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=CaKQJlK3sbMAX_dX4u_&_nc_ht=scontent.fsal6-1.fna&oh=00_AfCfscW7D-zoUL0WChw9h1jswIxLsIYx0b_Dg5cRFddZlA&oe=638C36D7" alt="recomienda" />
    <div className="contenido">
        <h3>RECOMIENDANOS</h3>
        <p>Hablales sobre nosotros a tus amigos y muestrales nuestros servicios </p>
    </div>
    </div>

    <div className="cards">
        <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317539488_112360988372090_6854885901964592306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ANfvzYZuAEkAX_nqMcS&_nc_ht=scontent.fsal6-1.fna&oh=00_AfB_4xPw3LYYCa86pEzmh8hCUp0VKEeZdzRe52BT68aS4A&oe=638C179C" alt="aporta"></img>
        <div className="contenido">
        <h3>APORTA</h3>
        <p> Comparte con los demas, tus experiencias con la pagina y que podemos mejorar</p>
    </div>
    </div>
    </div>

    <div className="preguntas">
    <h4>PREGUNTAS FRECUENTES</h4>

    < div className="interrogantes">
    <h5> ¿Como funciona? </h5>
        <p> Nos recomiendas y de esa manera compartes con los demas,<br/>los conocimientos de esta aplicacion, asi mismo habra una caja de comentarios <br/> para que puedas compartir experiencias o recetas.  </p>
    
        <h5> ¿Tiene un precio? </h5>
        <p> Como se mencionó al inicio la apliacion es de uso totalmente gratuito, <br/>por lo que no te cuesta nada compartirla y recomendarla, asi ayudaras a más personas.<br/> Si tienes algun comentario y posees cuenta,con total confianza,   
        <a className="link_comentarios" href="Comentarios"> Entra aqui.</a></p>
    </div>
    </div>

        <hr>
        
        </hr>


    </body>
<Footer>

</Footer>

    </>


)
}

export default Programa;