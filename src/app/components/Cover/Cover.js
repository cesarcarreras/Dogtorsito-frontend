import './cover.css'
import logo from '../../assets/images/logo-dogtorsito.png'

const Cover = () => (
    <section id="cover" className="d-flex align-items-center">
    <div className="cover-container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>¡Hola!, wuf wuf</h1>
          <h2>Bienvenido al sistema de gestion para veterinarias mas perruna del mundo</h2>
          <div>
            <a href="/signup" className="btn-get-started">¡Quiero comenzar!</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={logo} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
);

export default Cover;