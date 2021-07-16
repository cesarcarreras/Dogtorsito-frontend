import './sidebar.css'

const SideBar = ({user,onLogout}) => (
<section>
<div className="sidebar-container">
  <div className="sidebar-logo">
    Dogtorsito
  </div>
  <ul className="sidebar-navigation">
    <li className="header">User</li>
    <li>
      <a href="/dashboard/my-profile">
        <i className="fa fa-home" aria-hidden="true"></i> My Profile
      </a>
    </li>
    <li onClick={()=>onLogout()}>
      <a href="/">
        <i className="fa fa-info-circle" aria-hidden="true"></i> Logout
      </a>
    </li>
    <li></li>
    <li className="header">Calendar</li>
    <li>
      <a href="/dashboard/appointments">
        <i className="fa fa-users" aria-hidden="true"></i> Appointments
      </a>
      <li></li>
    </li>
    <li className="header">Inventory</li>
    <li>
      <a href="/dashboard/inventory">
        <i className="fa fa-home" aria-hidden="true"></i> Products
      </a>
    </li>
  </ul>
</div>
</section>
)

export default SideBar

{/* <div classNameName="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: 280,height:'100vh'}}>
<a href="/" classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
  <Bootstrap/>
  <span classNameName="fs-4">Iron Projects</span>
</a>
<hr/>
<ul classNameName="nav nav-pills flex-column mb-auto">

  <li>
    <a href="/dashboard" classNameName="nav-link text-white">
        <Bootstrap classNameName='bi me-2'/>
        Home
    </a>
  </li>
  <li>
    <a href="/dashboard/clients" classNameName="nav-link text-white">
        <Bootstrap classNameName='bi me-2'/>
        Clients
    </a>
  </li>
  <li>
    <a href="http" classNameName="nav-link text-white">
        <Bootstrap classNameName='bi me-2'/>
      Calendar
    </a>
  </li>
  {user.role === 'ADMIN' && <li>
    <a href="http" classNameName="nav-link text-white">
      <Bootstrap classNameName='bi me-2'/>
      Crear curso
    </a>
  </li>}

  <li onClick={()=>onLogout()}>
    <span classNameName="nav-link text-white">
        <Bootstrap classNameName='bi me-2'/>
      Logout
    </span>
  </li>
</ul>
<hr/>
<div classNameName="dropdown">
  <a href="http" classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="https://github.com/mdo.png" alt="" width="32" height="32" classNameName="rounded-circle me-2"/>
    <strong>{user.name}</strong>

  </a>
  <ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
    <li><a classNameName="dropdown-item" href="http">New project...</a></li>
    <li><a classNameName="dropdown-item" href="http">Settings</a></li>
    <li><a classNameName="dropdown-item" href="http">Profile</a></li>
    <li><hr classNameName="dropdown-divider"/></li>
    <li><a classNameName="dropdown-item" href="http">Sign out</a></li>
  </ul>
</div>
</div> */}