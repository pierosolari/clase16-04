import muebles from "./data/muebles.json"
const Single = () => {
    const currentRoute= window.location.pathname;
   
    const mueble=muebles.find(it => currentRoute.includes(it.slug))
    return ( <>
     <div className="conteiner">
    <div className="row">
    
    
    <div className=" bg p-3 text-dark-emphasis bs-dark-border-subtle border border-dark-subtle rounded-3 ">
    <h1>Venta De Muebles De Casa </h1>
</div>
</div>
</div>
    <h1>{mueble.name}</h1>
    <hr></hr>
    <img src={mueble.picture}></img>
    <p>{mueble.description}</p>
    </>);
}
 export default Single;