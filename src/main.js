const Main = () => {
    return <main>
        
        <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://sodimac.scene7.com/is/image/SodimacPeru/8789789_02?wid=1500&hei=1500&qlt=70" className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://sodimac.scene7.com/is/image/SodimacPeru/8789789_12?wid=1500&hei=1500&qlt=70" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://sodimac.scene7.com/is/image/SodimacPeru/8789789_13?wid=1500&hei=1500&qlt=70" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button clasName="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
       
      </div>
    </main>;
}

export default Main;