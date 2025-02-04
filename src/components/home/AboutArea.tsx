import Count from "../common/Count";

const counter_data = [
  {
    id: 1,
    title: "Years Of Experience",
    count: 2,
    cls: "plus",
  },
  {
    id: 2,
    title: "Completed Projects",
    count: 100,
    cls: "plus",
  },
  {
    id: 3,
    title: "Client Satisfactions",
    count: 95,
    cls: "percent",
  },
];

export default function AboutArea() {
  return (
    <>
      <section id='about' className='about-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-3 section-title'>
              <h2>About Me</h2>
            </div>
            <div className='col-lg-9 col-sm-9'>
              <div className='about-content-part wow fadeInUp delay-0-2s'>
                <p>
                  Dedicated Frontend Developer with 2+ years of experience
                  specializing in React.js, HTML, CSS, and JavaScript.
                  Proficient in modern frameworks like Tailwind CSS and
                  Bootstrap, with a strong focus on building responsive,
                  high-performance web applications. Passionate about continuous
                  learning, collaboration, and leveraging cutting-edge frontend
                  technologies.
                </p>
              </div>
              <div className='hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s'>
                {counter_data.map((item, i) => (
                  <div key={i} className='counter-item counter-text-wrap'>
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className='counter-title'>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
