import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import "./Home.css"

function Home(){

    return(
        
    <>
               <Navbar/>
   
              <body>

    <div className="contenedor1">

        <h1 className="one">Porque tu salud <br/> es primero </h1>
        <p className="somos">Somos una organizacion <br/> 
           encargada para la salud y <br/> 
           nutricion de la poblacion salvadoreña</p>
           <a className="button_comienza" href="Registrate">Comienza</a>


    
    <div className="image1">
    <div classname=" HomeImage"  > <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317090618_112361501705372_7506241113719354922_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=VNqXoajNFZMAX8i8LPm&_nc_ht=scontent.fsal6-1.fna&oh=00_AfDCdCjXFVBn_cNXcW--CreSWRO_MPBrvhoWLpDfS_A0SA&oe=638B290B" alt="Home_Image"></img> </div>
    </div>
    </div>
    <hr></hr>
        
        <h2>Conoce los diferentes servicios que tenemos para ti</h2>
    <div className="contenedor2">
    <div className="cards_Home">
      <a className="card_1">  <img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317359944_112360975038758_1866646648011921703_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=JbWAL-w7Bb4AX8t3VdJ&_nc_ht=scontent.fsal6-1.fna&oh=00_AfDHyCNsFPntirISZVu7DVi5NZwGkdZrMOxrgMXYgZr00Q&oe=638BEC61" alt="Card"></img> </a>
    </div>

    <div className="cards_Home">
    <a className="card_2"><img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317320192_112361435038712_6622348360857750169_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Mqi81sVNnHsAX8v86Kh&_nc_ht=scontent.fsal6-1.fna&oh=00_AfDg44HiyVy5XKQvc-fEGdht6_B7C6IK0zbQScyB0I_BaQ&oe=638B6423" alt="Image_Manzana"/> </a>
    <div className="contenido">
       <b> <p>Pierde grasa, <br/> gana musculo <br/> y mejora tu salud</p></b>
    </div>
    </div>

    </div>
    <div className="contenedor3"> 
    <div className="cards_Home">
    <a className="card_3"><img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316818855_112360965038759_3545048618246698354_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=V4Zl6n8vfB4AX-V3Vj8&_nc_ht=scontent.fsal6-1.fna&oh=00_AfDeg1O9VF6cM0Kn_6PR0Fr2dDd92bWDeSVXkCUIgPvHPQ&oe=638C9182" alt="Image_campana"/> </a>
    <div className="contenido">
        <p> <b>Recibe notificaciones <br/>sobre tu plan de alimentacion </b></p>
    </div>
    </div>

    <div className="cards_Home">
        <a className="card_4"><img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317095536_112361485038707_6469590304848533506_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=0WCb1XD60uQAX-8Og6C&_nc_ht=scontent.fsal6-1.fna&oh=00_AfBZAt1J84v_bwJOG_C7Z--UWevj4O56jkyOBqVcdm11eg&oe=638C2C28" alt="notificaciones"/> </a>
    </div>
    </div>

    <div className="contenedor4">
    <div className="cards_Home">
        <a className="card_5"><img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/317419793_112361538372035_6482940137291169384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=G0lYkafS8ncAX9FPXKH&_nc_ht=scontent.fsal6-1.fna&oh=00_AfCNGtbc9WWwVTU47W0r6qRFJH6r8ioJpft-mhmp2O2cfg&oe=638BB44A" alt="Receta"/> </a>
    </div>

    <div className="cards_Home">
        <a className="card_6"><img src="https://scontent.fsal6-1.fna.fbcdn.net/v/t39.30808-6/316821770_112361588372030_4782251771712806866_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=MInXb93ZqWYAX-S6-IW&_nc_ht=scontent.fsal6-1.fna&oh=00_AfAc4glx2GWjJ_A8R9vHx_vnaOLZkaKX5KEYui_5_q26_g&oe=638BDF7C" alt="Recetario"/></a>
        <div className="contenido">
        <p> <b>Encontraras muchas recetas <br/> recomendadas por nutricionistas </b> </p>
    </div>
    </div>
    </div>
<hr></hr>
</body>

 

<Footer>

</Footer>
    </>




)
}



export default Home;

