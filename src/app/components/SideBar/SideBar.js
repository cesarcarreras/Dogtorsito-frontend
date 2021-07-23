import './sidebar.css'

import homIcon from '../../assets/images/home-white.png';
import clienIcon from '../../assets/images/clientes.png';
import apoIcon from '../../assets/images/citas.png';
import invIcon from '../../assets/images/inventario.png';
import userIcon from '../../assets/images/perfil.png';
import logIcon from '../../assets/images/logout-white.png';

import logo from '../../assets/images/isotipo-dogtorsito-blanco.png';

const SideBar = ({user, onLogout}) => (
<div >
  <div className="main_body">
    <div className="sidebar_menu">
        <div className="inner__sidebar_menu">
          <ul>
          <li>
              <a href="/dashboard/my-profile">
                  <i className="">
                  <img src={user.image} className="profile-pic-user" alt="profile"/>
                  </i>
                <span className="user-name">{user.name}</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/home">
                <span className="icon-sidebar"><i className="fab fa-blogger">
                <img src={homIcon} width="30px" alt="User Icon"/>
                </i></span>
                <span className="list">Home</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/my-profile">
                <span className="icon-sidebar"><i className="fab fa-blogger">
                <img src={userIcon} width="30px" alt="User Icon"/>
                </i></span>
                <span className="list">Mi perfl</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/pets" >
                <span className="icon-sidebar"><i className="fas fa-chart-pie">
                <img src={clienIcon} width="30px" alt="Clients Icon"/>
                </i></span>
                <span className="list">Mascotas</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/calendar">
                <span className="icon-sidebar"><i className="fas fa-address-book">
                  <img src={apoIcon} width="30px" alt="Appointment Icon"/>
                </i></span>
                <span className="list">Citas</span>
              </a>
            </li>
            <li>
              <a href="/dashboard/inventory">
                <span className="icon-sidebar"><i className="fas fa-address-card">
                  <img src={invIcon} width="30px" alt="Inventory Icon"/>
                </i></span>
                <span className="list">inventario</span>
              </a>
            </li>
            <li>
              <a href="/" onClick={()=>onLogout()}>
                <span className="icon-sidebar"><i className="fas fa-map-marked-alt">
                <img src={logIcon} width="30px" alt="logo icon"/>
                </i></span>
                <span className="list">Logout</span>
              </a>
            </li>
          </ul>

          <div className="hamburger">
            <div className="inner_hamburger">
                <span className="arrow">
                <img src={logo} width="30px" alt="White logo"/>
                </span>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default SideBar
