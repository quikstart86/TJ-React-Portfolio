/* eslint-disable react/no-unescaped-entities */

const Home = () => {



  return (
    <main>
      <section className="hero" id="hero">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1 className="display-4 fw-bold">Thomas Jack</h1>
              <img src="/assets/Animation - 1708473494329.gif" />
              <p>Front-End Wed Developer & Designer.</p>
              <a className="btn btn-outline-dark btn-lg" href="https://tj-react-portfolio.netlify.app/project-gallery
              " role="button">See my Projects</a>
            </div>
            <div className="col-sm-6 text-center">
              <img src="..." className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4">Services</h2>
            <div className="row">
                <div className="col-lg col-sm-6 mt-4">
                    <div className="card">
                        <i className="bi bi-pentagon-half"></i>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Brand Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-sm-6 mt-4">
                    <div className="card">
                        <i className="bi bi-laptop"></i>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Web Development</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-sm-6 mt-4">
                    <div className="card">
                        <i className="bi bi-rulers"></i>
                        <div className="card-body">
                            <h5 className="card-title fw-bold">UX/UI Design</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about" id="about">
        <div className="container">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <img src="https://media.licdn.com/dms/image/D4E03AQFwQpcxPkPMNg/profile-displayphoto-shrink_200_200/0/1699529846200?e=1714003200&v=beta&t=P8xyDd0KsuY-xDDZeslfLeFh5ZF3kQYYGWAelTOo7r4"className="rounded-circle mb-3 border border-5" alt="" />
            <p>Hi i'm Thomas. I'm a Front-end Web Developer having completed a 16-week Bootcamp. It was great! Very fast-paced - A huge amount of new information to retain and concepts to understand but i've always wanted to do this. We learned about Git version control, GitHub & GitLab, HTML5, CSS3, Flex & Grid, Bootstrap, JS, Node, NPM, TDD, React and how to deploy.</p>
        </div>
    </section>
  
    </main>
  );
};

export default Home;
