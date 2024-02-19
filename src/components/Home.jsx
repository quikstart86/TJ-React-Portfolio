/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  return (
    <main>
      <section className="hero" id="hero">
        <div className="container-lg">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1 className="display-4 fw-bold">Thomas Jack</h1>
              <p>Front-End Wed Developer and Designer.</p>
              <button className="btn btn-outline-dark btn-lg">Projects</button>
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
            <p>Hi i'm Thomas. I'm currently learning Front-end Web Development on a 16-week bootcamp. I'm loving it! It's fast paced - there's a lot to new information to retain and concepts to understand but i've always wanted to do this. So far we have learned about Git version control, GitHub & GitLab, HTML5, CSS3, Flex & Grid, Bootstrap, Node, TDD, React and deployment.</p>
        </div>
    </section>
    </main>
  );
};

export default Home;
