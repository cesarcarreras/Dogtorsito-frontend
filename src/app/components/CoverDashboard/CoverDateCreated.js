import './coverDashboard.css'
import logo from '../../assets/images/logo-dogtorsito.png'
import dogoOne from '../../assets/images/dog2.JPG'

const CoverDateCreated = () => (
    <section id="cover-dashboard" className="d-flex align-items-center">
    <div className="cover-dashboard-container">
      <div className="row gy-4">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h1>¡Cita creada con exito!</h1>
          
          <div>
            <a href="/dashboard/calendar" className="btn-get-started">Revisar calendario</a>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 ">
          <img src={dogoOne} className="img-dog" width="300px" alt=""/>
        </div>
      </div>
    </div>

  </section>
)

export default CoverDateCreated;