const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4 mx-auto">Contact Me</h2>
        <div className="col-lg-8 mx-auto">
          <div className="contact-wrap">
            <form
              action="https://formsubmit.co/theshitbox2@gmail.com"
              method="POST"
              id="contactForm"
              name="contactForm"
              className="contactForm"
              encType="multipart/form-data"
            >
              <div className="row">
                <div className="col-md-12 pb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="8"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 pb-3">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-outline-dark"
                    />
                    <div className="submitting"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
