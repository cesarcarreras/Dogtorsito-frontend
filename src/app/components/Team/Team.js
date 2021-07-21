import './team.css'

import fbIcon from '../../assets/images/logo-facebook.png';
import InsIcon from '../../assets/images/logo-instagram.png';
import LnkIcon from '../../assets/images/logo-linkedin.png';
import gitIcon from '../../assets/images/logo-github.png';

import esauImg from '../../assets/images/esau.png'
import cesarImg from '../../assets/images/cesar.png'
import mauImg from '../../assets/images/mau.png'

const Team = () => (
    <section id="team" className="team">
      <div className="section-title">
        <h2>Nuestro Equipo</h2>
        <p>Amantes de las mascotas listos para ayudarte</p>
      </div>
      <div className="team-container">
        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
          <div className="member">
            <img src={mauImg} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Mauricio Munoz</h4>
                <span>Desarrollador</span>
              </div>
              <div className="social">
                <a href="/"><i className="bi">
                <img src={fbIcon} alt="Algo" width="30px"/>
                </i></a>
                <a href="/"><i className="bi">
                <img src={InsIcon} alt="Algo" width="30px"/>
                </i></a>
                <a href="/"><i className="bi bi-linkedin">
                <img src={LnkIcon} alt="Algo" width="30px"/>
                </i></a>
                <a href="/"><i className="bi bi-linkedin">
                <img src={gitIcon} alt="Algo" width="30px"/>
                </i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="member">
            <img src={cesarImg} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Cesar Carreras</h4>
                <span>Desarrollador</span>
              </div>
              <div className="social">
              <a href="https://www.facebook.com/cesar.carrerasmabarak"><i className="bi">
                <img src={fbIcon} alt="Facebook Icon" width="30px"/>
                </i></a>
                <a href="https://www.instagram.com/cesarcarreras/"><i className="bi">
                <img src={InsIcon} alt="Instagram Icon" width="30px"/>
                </i></a>
                <a href="https://www.linkedin.com/in/cesar-carreras-533a52130/"><i className="bi bi-linkedin">
                <img src={LnkIcon} alt="Linkedin Icon" width="30px"/>
                </i></a>
                <a href="https://github.com/cesarcarreras"><i className="bi bi-linkedin">
                <img src={gitIcon} alt="GitHub Icon" width="30px"/>
                </i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
          <div className="member">
            <img src={esauImg} className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Esau Acosta</h4>
                <span>Desarrollador</span>
              </div>
              <div className="social">
                <a href="/"><i className="bi">
                <img src={fbIcon} alt="Algo" width="30px"/>
                </i></a>
                <a href="/"><i className="bi">
                <img src={InsIcon} alt="Algo" width="30px"/>
                </i></a>
                <a href="/"><i className="bi bi-linkedin">
                <img src={LnkIcon} alt="Algo" width="30px"/>
                </i></a>
                <a href="/"><i className="bi bi-linkedin">
                <img src={gitIcon} alt="Algo" width="30px"/>
                </i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="ml-form-embed ml-form"
            data-account="2093336:n7m4u3i8k3"
            data-form="4439428:u7n5q6">
          </div>
  </section>
)

export default Team