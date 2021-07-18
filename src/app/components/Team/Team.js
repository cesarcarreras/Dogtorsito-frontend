import './team.css'

const Faq = () => (
    <section id="team" className="team">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our team is always here to help</p>
      </div>
      <div className="row">

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
          <div className="member">
            <img src="https://avatarfiles.alphacoders.com/117/117558.jpg" className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Mauricio Muñoz</h4>
                <span>Desarrollador</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
          <div className="member">
            <img src="https://avatarfiles.alphacoders.com/117/117558.jpg" className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Cesar Carreras</h4>
                <span>Desarrollador</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
          <div className="member">
            <img src="https://avatarfiles.alphacoders.com/117/117558.jpg" className="img-fluid" alt=""/>
            <div className="member-info">
              <div className="member-info-content">
                <h4>Esau Acosta</h4>
                <span>Desarrollador</span>
              </div>
              <div className="social">
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
)

export default Faq