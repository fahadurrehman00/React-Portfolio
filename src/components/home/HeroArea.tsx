import Resume from "../../../public/assets/Fahad - Frontend Developer.pdf";
export default function HeroArea() {
  return (
    <>
      <section id='home' className='main-hero-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='hero-content wow fadeInUp text-center delay-0-2s'>
                <h2>Fahad Ur Rehman</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 pt-30'>
              <div className='hero-content wow fadeInUp delay-0-2s'>
                <div className='clienti-reviews'>
                  <ul className='clienti-profile'>
                    <li>
                      <img
                        className='img-fluid'
                        src='assets/images/avatar/client (1).png'
                        alt='client'
                      />
                    </li>
                    <li>
                      <img
                        className='img-fluid'
                        src='assets/images/avatar/client (2).png'
                        alt='client'
                      />
                    </li>
                    <li>
                      <img
                        className='img-fluid'
                        src='assets/images/avatar/client (3).png '
                        alt='client'
                      />
                    </li>
                    <li>
                      <img
                        className='img-fluid'
                        src='assets/images/avatar/client (4).png '
                        alt='client'
                      />
                    </li>
                  </ul>
                  <div className='reviews'>
                    50+ reviews <span>(4.46 of 5)</span>
                    <p>Five-star reviews from my esteemed clients.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hero-image'>
                <img src='assets/images/about/me.jpg' alt='' />
              </div>
            </div>
            <div className='col-lg-3 pt-30'>
              <div className='hero-content wow fadeInUp delay-0-4s'>
                <p>
                  Hi, I’m Fahad, a dedicated Frontend Developer. Skilled in
                  building responsive, user-friendly web applications, and
                  mobile applications using modern frameworks.
                </p>
                <div>
                  <a
                  target="blank"
                    className='theme-btn'
                    href='mailto:fahad00rehman@gmail.com'
                  >
                    Get In touch
                  </a>
                  <a className='theme-btn' target="blank" href={Resume}>
                    Get Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
