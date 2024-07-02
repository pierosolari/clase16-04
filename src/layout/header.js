import { Link } from "react-router-dom";

const Header = () => {
    return <header>
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <img src="https://cdn.discordapp.com/attachments/1226707700545486913/1254969616363687997/image.png?ex=667b6d08&amp;is=667a1b88&amp;hm=b86b0a44a76561fc5902be1654911e28073757e8ecc66491aba4bd85d9d1beef&amp;" alt="Industrias R&amp;R"></img>
           
        < div class= "col-md-8 ">  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul>
                <li><Link class="nav-link " to="/"><a href="#">INICIO</a></Link>
                </li>
                <div class="dropdown">
                <button class="dropdown-toggle">MUEBLES <span class="arrow">^</span></button>
  <ul class="dropdown-menu">
    <li><Link class="nav-link " to="/catalogo.mueblesd+sala/"> Muebles de sala</Link></li>
    <li><Link class="nav-link " to="/catalogo.mueblesd+dormitorio/"> Muebles de dormitorio</Link></li>
    <li><Link class="nav-link " to="/catalogo.mueblesd+comedor/"> Muebles de comedor</Link></li>
  </ul>
</div>
           
                <li><Link class="nav-link " to="/info/"><a href="#">CONTACTO</a></Link></li>
            </ul>
          
        </div>
        </div>
        </div>
        </nav>
    </header>;
}

export default Header;