import './about.css';
import moka from '../../assets/images/moka.png';

const About = () => (
    <section id="about" className="about">
      <div className="about-container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={moka} className="img-fluid" alt="Dog Img" width="300px"/>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h1>¿Que es Dogtorsito?</h1>
             <p>
                Dogtorsito es una herramienta facil y sencilla que ayudara a conectar a tus clientes con sus mascotas
             </p>
          </div>
        </div>
      </div>
    </section>
);

export default About;