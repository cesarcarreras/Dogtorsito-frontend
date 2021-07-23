import './coverDashboard.css'
import dogoOne from '../../assets/images/dog2.JPG'

const CoverDashboard = ({user}) => (
    <section id="cover-dashboard" className="d-flex align-items-center">
    <div className="cover-dashboard-container">
      <div className="row gy-4">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1>¡Hola, {user.name}!</h1>
          <h2>¿Qué te gustaría hacer primero?</h2>
          <div>
            <a href="/dashboard/create-client" className="btn-get-started">Crear Cliente</a>
            <a href="/signup" className="btn-get-started">Agendar Cita</a>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 ">
          <img src={dogoOne} className="img-dog" width="300px" alt=""/>
        </div>
      </div>
    </div>

  </section>
)

export default CoverDashboard