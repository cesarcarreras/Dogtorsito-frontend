import './cardServices.css';

import userIcon from '../../assets/images/user.png';
import invIcon from '../../assets/images/inventory.png';
import apoIcon from '../../assets/images/calendar.png';
import histIcon from '../../assets/images/hospital.png';

const CardServices = () => (
    <section id="services" className="services section-bg">
      <div>
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>¡Es todo lo que necesitas para una veterinaria!</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-box">
              <div className="icon">
              <img src={userIcon} alt="" width="70px"/>
              </div>
              <h4 className="title-card">Usuarios</h4>
              <p className="description">Ofrecemos una sencilla forma de gestionar todos tus usuarios</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
              <div className="icon">
              <img src={invIcon} alt="" width="70px"/>
              </div>
              <h4 className="title-card">Inventario</h4>
              <p className="description">¿Aun usas listas? Digitalizate y con nuestra aplicion tendras un mayor control con tu inventario</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
              <div className="icon">
              <img src={histIcon} alt="" width="70px"/>
              </div>
              <h4 className="title-card">Historial</h4>
              <p className="description">Guarda cualquier registro de tus clientes asi como sus visitas, vacunas pendientes, etc...</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon">
              <img src={apoIcon} alt="" width="70px"/>
              </div>
              <h4 className="title-card">Citas</h4>
              <p className="description">Con nuestra aplicacion las tareas de agendar citas sera mucho mas sencilla</p>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default CardServices;