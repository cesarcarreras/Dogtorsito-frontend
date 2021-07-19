import './sidebar.css'

import userIcon from '../../assets/images/user.png';
import invIcon from '../../assets/images/inventory.png';
import apoIcon from '../../assets/images/calendar.png';
import histIcon from '../../assets/images/hospital.png';
import homIcon from '../../assets/images/home.png'
import logIcon from '../../assets/images/logout.png'

const SideBar = ({user,onLogout}) => (
  <div className="main-app">
  <div className="sidebar">
    <nav className="main-nav">
      <ul className="main-menu">
        <li className="menu-item active">
          <a href="/dashboard" className="menu-a">
            <div className="menu-txt-hld">
              <i className="fas fa-igloo menu-icon">
                <img src={homIcon} width="40px" alt="Home Icon"/>
              </i>
              <span className="menu-txt">Home</span>
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/dashboard/clients" className="menu-a">
            <div className="menu-txt-hld">
              <i className="fas menu-icon">
              <img src={histIcon} width="40px" alt="Hospital Icon"/>
              </i>
              <span className="menu-txt">Clients</span>
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/dashboard/calendar" className="menu-a">
            <div className="menu-txt-hld">
              <i className="fas menu-icon">
              <img src={apoIcon} width="40px" alt="Calendar Icon"/>
              </i>
              <span className="menu-txt">Appoinments</span>
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/dashboard/inventory" className="menu-a">
            <div className="menu-txt-hld">
              <i className="fas fa-envelope menu-icon">
              <img src={invIcon} width="40px" alt="Iventory Icon"/>
              </i>
              <span className="menu-txt">Inventory</span>
            </div>
          </a>
        </li>
        <li className="menu-item">
          <a href="/dashboard/my-profile" className="menu-a">
            <div className="menu-txt-hld">
            <i className="fas menu-icon">
              <img src={userIcon} width="40px" alt="User Icon"/>
              </i>
              <span className="menu-txt">{user.name}</span>
            </div>
          </a>
        </li>
        <li className="menu-item" onClick={()=>onLogout()}>
          <a href="/" className="menu-a">
            <div className="menu-txt-hld">
            <i className="fas menu-icon">
              <img src={logIcon} width="38px" alt="Logout Icon"/>
              </i>
              <span className="menu-txt">Log out</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
)

export default SideBar
