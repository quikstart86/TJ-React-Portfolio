const Footer = () => {
  return (
    <footer className="text-center p-3 bg-body-tertiary">
      <ul className="nav justify-content-center  pb-3 mb-3">
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/thomastjack/"
            className="nav-link px-2 text-dark"
            target="_blank"><i className="bi bi-linkedin"></i></a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/quikstart86"
            className="nav-link px-2 text-dark"
            target="_blank"><i className="bi bi-github"></i></a>
        </li>
      </ul>
      <div>© 2024. Thomas Jack - All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
