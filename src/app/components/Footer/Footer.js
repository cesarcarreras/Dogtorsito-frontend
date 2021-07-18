import './footer.css'

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
            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Nuestros Equipo</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://github.com/inhelliburn89">Mauricio Muñoz</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://github.com/cesarcarreras/">Cesar Carreras</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://github.com/EsauDACO">Esau Acosta</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Nuestras redes sociales</h4>
          <p>¡Agradecemos tu interés! En cuanto tengamos redes sociales te lo haremos saber 😉</p>
          <div className="social-links mt-3">
            <a href="https://twitter.com/" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.facebook.com/" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.linkedin.com/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div className=" py-4">
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