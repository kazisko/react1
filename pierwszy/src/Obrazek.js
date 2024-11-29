import './Obrazek.css';
const Obrazek=({szer,wys=50,alt="obrazek nieznany"})=>{
    return(
        <>
            <img src={`https://picsum.photos/${szer}/${wys}`} alt={alt} />
        </>
    )
}

export default Obrazek;