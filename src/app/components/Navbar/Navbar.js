import './navbar.css';
import logo from '../../assets/images/logo-dogtorsito-blanco.png';

const Navbar = () =>  (
      <header id="header" className="fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <div className="logo">
         <a href="/"><img src={logo} alt="Logo" className="logo-image"/></a>
        </div>
        <nav  id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link" href="/">Inicio</a></li>
            <li><a className="nav-link" href="#about">Nosotros</a></li>
            <li><a className="nav-link" href="#services">Servicios</a></li>
            <li><a className="nav-link" href="#team">Equipo</a></li>
            <li><a className="getstarted" href="/signup">┬íComencemos!</a></li>
          </ul>
        </nav>
      </div>
    </header>
    );

export default Navbar;