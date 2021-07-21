import './footer.css'

import twiIcon from '../../assets/images/twitter.png';
import fbIcon from '../../assets/images/facebook.png';
import InsIcon from '../../assets/images/instagram.png';
import LnkIcon from '../../assets/images/linkedin.png';
import gitIcon from '../../assets/images/github.png';

const Footer = () => (
  <footer id="footer">
  <div className="footer-top">
    <div className="footer-container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-contact">
          <h3>Dogtorsito</h3>
          <p>
          Tonalá 10, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX<br></br>
            <strong>Número:</strong> +1 5589 55488 55<br></br>
            <strong>Correo:</strong> hola@dogtorsito.com
          </p>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><i></i> <a href="/">Home</a></li>
            <li><i></i> <a href="#about">About us</a></li>
            <li><i></i> <a href="#services">Services</a></li>
            <li><i></i> <a href="/">Terms of service</a></li>
            <li><i></i> <a href="/">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Nuestros Equipo</h4>
          <ul>
            <li><i></i> <a href="https://github.com/inhelliburn89">Mauricio Munoz</a></li>
            <li><i></i> <a href="https://github.com/cesarcarreras/">Cesar Carreras</a></li>
            <li><i></i> <a href="https://github.com/EsauDACO">Esau Acosta</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Nuestras redes sociales</h4>
          <p className="social-text">¡Agradecemos tu interes! En cuanto tengamos redes sociales te lo haremos saber 😉</p>
          <div className="social-links mt-3">

            <a href="https://twitter.com/">
            <i className="bx">
            <img src={twiIcon} alt="Twitter Icon" width="30px"/>
            </i></a>

            <a href="https://www.facebook.com/">
            <i className="bx">
            <img src={fbIcon} alt="Facebook Icon" width="30px"/>
            </i></a>

            <a href="https://www.instagram.com/">
            <i className="bx">
            <img src={InsIcon} alt="Instagram Icon" width="30px"/>
            </i></a>

            <a href="https://www.linkedin.com/">
            <i className="bx">
            <img src={LnkIcon} alt="Linkedin Icon" width="30px"/>
            </i></a>

            <a href="https://www.github.com/">
            <i className="bx">
            <img src={gitIcon} alt="GitHub Icon" width="30px"/>
            </i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-4">
    <div className="copyright">
      &copy; Copyright <strong><span>Dogtorsito</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <a href="https://github.com/cesarcarreras/Dogtorsito">Cesar Carreras</a>
    </div>
  </div>
</footer>
)

export default Footer