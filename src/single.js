import muebles from "./data/muebles.json"
const Single = () => {
    const currentRoute= window.location.pathname;
    const mueble=muebles.find(it => currentRoute.includes(it.slug))
    return ( <>
    <h1>{mueble.name}</h1>
    <hr></hr>
    <img src={mueble.picture}></img>
    <p>{mueble.description}</p>
    </>);
}
 export default Single;