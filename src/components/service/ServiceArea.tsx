 

export default function ServiceArea() {
  return (
    <>
      <section id="services" className="services-area no-padding">
        <div className="container">
        <div className='row'>
            <div className='col-lg-8 col-md-7'>
              <div className='service-item wow fadeInUp delay-0-2s'>
                <i className='ri-code-line'></i>
                <h5>01</h5>
                <h4>Website Development</h4>
                <p>
                  Expertise in creating high-performance, responsive websites
                  using React.js, ensuring seamless functionality and modern
                  design.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-5'>
              <div className='service-item wow fadeInUp delay-0-4s'>
                <i className='ri-device-line'></i>
                <h5>02</h5>
                <h4>Figma to HTML/CSS</h4>
                <p>
                  Transforming Figma designs into pixel-perfect, responsive web
                  pages using modern frameworks like Tailwind CSS and Bootstrap.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-5'>
              <div className='service-item wow fadeInUp delay-0-6s'>
                <i className='ri-bug-line'></i>
                <h5>03</h5>
                <h4>Bug Fixing</h4>
                <p>
                  Proficient in troubleshooting and resolving code issues to
                  enhance performance, functionality, and user satisfaction.
                </p>
              </div>
            </div>

            <div className='col-lg-8 col-md-7'>
              <div className='service-item wow fadeInUp delay-0-8s'>
                <i className='ri-pencil-ruler-line'></i>
                <h5>04</h5>
                <h4>Mobile App Development</h4>
                <p>
                  Skilled in building cross-platform mobile applications with
                  React Native, offering intuitive user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
