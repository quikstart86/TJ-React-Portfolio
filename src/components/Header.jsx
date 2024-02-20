/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Header() {
  return (
    
     <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
     <div className="container-lg">
         <Link className="navbar-brand fw-bold" to="/">Thomas Jack</Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav mx-auto">
                 <li className="nav-item">
                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" to="/project-gallery">Projects</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" to="/contact">Contact</Link>
                 </li>
                 <li className="nav-item">
                 <a className="nav-link" href="https://drive.google.com/file/d/1Q_3GvNySPOa3_sZHmW25KcyEfSVJ4fvz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
                 </li>
             </ul>
             <Link className="btn btn-outline-dark d-none d-lg-block" to="/contact">Let's Talk</Link>
         </div>
     </div>
 </nav>
  );
}

export default Header;
