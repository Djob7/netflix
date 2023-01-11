import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"

const ListMovies=({movies,setMovies,titre,setTitre,setEtoile,etoile})=>{
    const x =  movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile).map(el=> <CardMovie el={el} movies={movies} setMovies={setMovies}/>)
    return(
        <div className="bou">
            <FilterMovie setTitre={setTitre} setEtoile={setEtoile} titre={titre} etoile={etoile}/><br />
            {              
                 x.length == 0 ? <img src="https://previews.123rf.com/images/lobo71/lobo711804/lobo71180400088/100042388-no-movie-camera-reflective-sign.jpg" style={{height:'500px'}}/> : x          
             
            }
        </div>
    )
}

export default ListMovies