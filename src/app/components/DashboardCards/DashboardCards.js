import './dashboardCardStyles.css'

import homIcon from '../../assets/images/home-white.png';
import clienIcon from '../../assets/images/clientes.png';
import apoIcon from '../../assets/images/citas.png';
import invIcon from '../../assets/images/inventario.png';
import userIcon from '../../assets/images/perfil.png';
import logIcon from '../../assets/images/logout-white.png';

const DashboardCards = () => (
    <div className="cards-list ">

          <div className="card 1">
            <div className="card-image">
            <img src={clienIcon} width="20px" alt="Client Icon"/> </div>
            <div className="card_title title-white">
              <p>Clientes</p>
            </div>
          </div>

            <div className="card 2">
            <div className="card-image">
              <img src={apoIcon} alt="Appointment Icon"/>
              </div>
            <div className="card_title title-white">
              <p>Citas</p>
            </div>
          </div>

          <div className="card 3">
            <div className="card-image">
              <img src={userIcon} alt="User Icon"/>
            </div>
            <div className="card_title title-white">
              <p>Mi Perfil</p>
            </div>
          </div>

          <div className="card 3">
            <div className="card-image">
              <img src={invIcon} alt="Inventory Icon"/>
            </div>
            <div className="card_title title-white">
              <p>Inventario</p>
            </div>
          </div>

          <div className="card 3">
            <div className="card-image">
              <img src={homIcon} alt="Home Icon"/>
            </div>
            <div className="card_title title-white">
              <p>Pagina principal</p>
            </div>
          </div>


          <div className="card 4">
            <div className="card-image">
              <img src={logIcon} alt="Logout Icon"/>
            </div>
            <div className="card_title title-white">
              <p>Logout</p>
            </div>
          </div>

</div>
)

export default DashboardCards