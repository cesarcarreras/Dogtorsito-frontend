import './styles.css'

const ProfileCard = ({user, profile}) => (
  <div class="profile-card-general">
     <div class="card-pc">
            <div class="additional-pc">
                <div class="user-card-pc">
                    <div class="level center">
                    Level 13
                    </div>
                    <img src={user.image} width="100px" alt="User img"/>
                    <div class="points center">
                    5,312 Points
                    </div>
                </div>
      <div class="more-info">
            <h1>El nombre del perrito: {profile.name}</h1>
                <div class="coords">
                    <span>Group Name</span>
                    <span>Joined January 2019</span>
                </div>
                <div class="coords">
                    <span>Position/Role</span>
                    <span>City, Country</span>
                </div>
                <div class="stats">
                    <div>
                        <div class="title">Awards</div>
                            <i class="fa fa-trophy"></i>
                        <div class="value">2</div>
                    </div>
                    <div>
                        <div class="title">Matches</div>
                            <i class="fa fa-gamepad"></i>
                        <div class="value">27</div>
                    </div>
                    <div>
                        <div class="title">Pals</div>
                            <i class="fa fa-group"></i>
                        <div class="value">123</div>
                    </div>
                    <div>
                        <div class="title">Coffee</div>
                            <i class="fa fa-coffee"></i>
                        <div class="value infinity">∞</div>
                    </div>
                </div>
      </div>
    </div>
    <div class="general">
      <h1>Jane Doe</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
      <span class="more">Mouse over the card for more info</span>
    </div>
  </div>



</div>

)
export default ProfileCard