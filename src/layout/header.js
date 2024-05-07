import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" to="/">INDUSTRIAS R&R</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link class="nav-link " to="/">Inicio </Link>
            </li>
           
            <li className="nav-item dropdown">
              <a className="nav-link" href="/sout/"> Muebles </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Informacion</a>
            </li>
            
          </ul>
          <form className="d-sm-inline-flex" role="search" >
            <input className="form-control me-2"  type="search"  placeholder="Buscar" aria-label="Buscar" ></input>
           
          </form>
        </div>
            </div>
        </nav>
    </header>;
}

export default Header;