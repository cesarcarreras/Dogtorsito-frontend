import './coverDashboard.css'
import logo from '../../assets/images/logo-dogtorsito.png'
import dogoOne from '../../assets/images/dog2.JPG'

const CoverClientCreated = () => (
    <section id="cover-dashboard" className="d-flex align-items-center">
    <div className="cover-dashboard-container">
      <div className="row gy-4">
        <div className="col-lg-6 d-flex flex-column justify-content-center">
        <h1>¡Mascota creado con exito!</h1>
          <div>
            <a href="/dashboard/create-pet" className="btn-get-started">Crear Mascota</a>
            <a href="/dashboard/pets" className="btn-get-started">Ver Mascotas</a>
          </div>
        </div>
        <div className="col-lg-6 order-lg-2 ">
          <img src={dogoOne} className="img-dog" width="300px" alt=""/>
        </div>
      </div>
    </div>

  </section>
)

export default CoverClientCreated;