import { /*Star,Arrow90degDown,*/Bootstrap/*,House,Speaker,Table*/ } from 'bootstrap-icons-react';
const SideBar = ({user,onLogout}) => (

    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280,height:'100vh'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <Bootstrap/>
      <span className="fs-4">Dogtorsito</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">

      <li>
        <a href="http" className="nav-link text-white">
            <Bootstrap className='bi me-2'/>
            Dashboard
        </a>
      </li>
      <li>
        <a href="/calendar" className="nav-link text-white">
            <Bootstrap className='bi me-2'readOnly />
            Mis consultas
        </a>
      </li>
      {user.role === 'ADMIN' && <li>
        <a href="/calendar" className="nav-link text-white">
            <Bootstrap  className='bi me-2'/>
            Calendario
        </a>
      </li>}
    
      {user.role === 'ADMIN' && <li>
        <a href="http" className="nav-link text-white">
          <Bootstrap className='bi me-2'/>
          Crear cita
        </a>
      </li>}

      <li onClick={()=>onLogout()}>
        <span className="nav-link text-white">
            <Bootstrap className='bi me-2'/>
          Logout
        </span>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="http" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>{user.name}</strong>

      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="http">New project...</a></li>
        <li><a className="dropdown-item" href="http">Settings</a></li>
        <li><a className="dropdown-item" href="http">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="http">Sign out</a></li>
      </ul>
    </div>
  </div>
)

export default SideBar