import './styles.css'

const ProfileCard = ({user, profile}) => (
  <div class="profile-card-general">
     <div class="card-pc">
            <div class="additional-pc">
                <div class="user-card-pc">
                    <div class="level center">
                    Moka
                    </div>
                    <img src={user.image} width="100px" alt="User img" className="card-profile-picture"/>
                </div>
      <div class="more-info">
            <h1>MOKA</h1>
                <div class="coords">
                    <span>Mascota:</span>
                    <span>{user.pet}</span>
                </div>
                <div class="coords">
                    <span>Raza:</span>
                    <span>{user.breed}</span>
                </div>
                <div class="coords">
                    <span>Edad:</span>
                    <span>10 meses</span>
                </div>
                <div class="coords">
                    <span>Peso:</span>
                    <span>21kg</span>
                </div>
                <div class="coords">
                    <span>Ultima Vacuna:</span>
                    <span>Polivalente + Rabia</span>
                </div>
                <div class="coords">
                    <span>Ultima Desparacitacion:</span>
                    <span>24 dias</span>
                </div>
                <div class="coords">
                    <span>Ultima Visita:</span>
                    <span>24 dias</span>
                </div>
                <div class="stats">
                    <div>
                        <div class="title">Vacunas</div>
                            <i class="fa fa-trophy"></i>
                        <div class="value">2</div>
                    </div>
                    <div>
                        <div class="title">Desparacitaciones</div>
                            <i class="fa fa-gamepad"></i>
                        <div class="value">18</div>
                    </div>
                    <div>
                        <div class="title">Visitas</div>
                            <i class="fa fa-group"></i>
                        <div class="value">12</div>
                    </div>
                </div>
      </div>
    </div>
    <div class="general-pc">
      <h1>¡Hola, {user.name}!</h1>
      <p>En esta seccion tienes todo tu perfil y el de tu mascota</p>
      <p>Correo: {user.email}</p>
      <p>Perfil: {user.role}</p>
      <span class="more">Pasa el mouse sobre la tarjeta para obtener mas informacion</span>
    </div>
  </div>



</div>

)
export default ProfileCard