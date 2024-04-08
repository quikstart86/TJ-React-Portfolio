
const ProjectGallery = () => {



  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4 text-center">Portfolio & Projects</h2>
        <div className="row">
        <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/awphotography.png" className="card-img-top" alt="image of a website project"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Autumn Wild Photography</h5>
                <p className="card-text">
                  Full build website for a client showcasing her amazing photography
                </p>
                <a
                  href="https://www.autumnwild.co.uk/"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Website
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/horeison-img.png" alt="image of refactoring project" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Code Refactor</h5>
                <p className="card-text">
                  Refactoring project making use of clean semantic code.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                <a
                  href="https://github.com/quikstart86/horeison-code-refactor"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  Repo
                </a>
                <a
                  href="https://quikstart86.github.io/horeison-code-refactor/"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  App
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/first-portfolio.gif" className="card-img-top" alt="image of a website project"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">First Portfolio</h5>
                <p className="card-text">
                  First web portfolio project utilising HTML5 & CSS3.
                </p>
                <a
                  href="https://github.com/quikstart86/ThomasJack-portfolio"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/consolelog.PNG" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Console Log</h5>
                <p className="card-text">
                  App designed to output calacualted financial data.
                </p>
                <a
                  href="https://github.com/quikstart86/Console-Finances"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/password-generator.gif" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Password Generator</h5>
                <p className="card-text">
                  CLI interface app with prompts to generate a random password.
                </p>
                <a
                  href="https://github.com/quikstart86/Random-Password-Generator"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/scheduler-demo.gif" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Day Scheduler</h5>
                <p className="card-text">
                  Useful clean UI app for managing daily tasks. Taking in JS, jQuery, dayJs.
                </p>
                <a
                  href="https://github.com/quikstart86/TJ---Work-Day-Scheduler"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/weather-app.png" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Weather Dashboard</h5>
                <p className="card-text">
                  Weather Dashboard, using API's to display 5-day local weather with search function.
                </p>
                <a
                  href="https://github.com/quikstart86/TJ-Weather-Dashboard"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/readme-generator.gif" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Readme Generator</h5>
                <p className="card-text">
                  Automation project for generating pre-determined README files using Node.js and the fs module.
                </p>
                <a
                  href="https://github.com/quikstart86/TJ-Readme-Generator"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/demo.gif" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Bootstrap Portfolio</h5>
                <p className="card-text">
                  Refactoring original portfolio to utilise Bootstrap framework for responsive design and a clean UI/UX.
                </p>
                <a
                  href="https://github.com/quikstart86/Bootstrap-Portfolio"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/team-generator.gif" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Profile Generator</h5>
                <p className="card-text">
                  Application that generates a professional team profile using user input with relevant info on each person.
                </p>
                <a
                  href="https://github.com/quikstart86/TJ-Team-Profile-Generator"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/react-portfolio.png" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">React Portfolio</h5>
                <p className="card-text">
                  Professional portfolio  built using React.js, Node.js, Express.js, Bootstrap.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                <a
                  href="https://github.com/quikstart86/TJ-React-Portfolio"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  Repo
                </a>
                <a
                  href="https://tj-react-portfolio.netlify.app/"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  App
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/home-app.png" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Home App</h5>
                <p className="card-text">
                  Mortgage Calculator and Property search tool.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                <a
                  href="https://github.com/abbyedxcmk/home-app"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  Repo
                </a>
                <a
                  href="https://abbyedxcmk.github.io/home-app/"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  App
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
              <img src="/assets/get-to-work-logo.png" className="card-img-top" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Get To Work</h5>
                <p className="card-text">
                  Customisable portfolio builder using react.js, react-bootstrap.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                <a
                  href="https://github.com/quikstart86/Get-2-work"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  Repo
                </a>
                <a
                  href="https://get-2-work.netlify.app/"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  App
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
            <img src="/assets/cbioe.png" alt="image of financial data"/>
              <div className="card-body">
                <h5 className="card-title fw-bold">Carousel Bio Energy</h5>
                <p className="card-text">
                Website built for a client needing a crisp clean UI and some basic functionality. (Branding & Web Design)
                </p>
                <a
                  href="https://www.cbioe.com/"
                  target="_blank"
                  className="btn btn-outline-dark"
                >
                  See Work
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card">
            <img src="/assets/carousel-finance.png" alt="image of financial data" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Carousel Finance</h5>
                <p className="card-text">
                  Website built for a client needing a crisp clean UI and some basic functionality. (Branding & Web Design) 
                </p>
                <a
                  href="https://carouselfinance.com/"
                  target="_blank"
                  className="btn btn-outline-dark" 
                >
                  See Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
