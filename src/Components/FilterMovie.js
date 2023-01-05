import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovie=({setTitre,setEtoile,titre,etoile})=>{
    const handleReset=()=>{
        setTitre('')
        setEtoile(0)
    }
    return(
        // <div className="container">
        <div className="filter">
            <input value={titre} type="text" onChange={(e)=>setTitre(e.target.value)}/>
            <Rating value={etoile} name="simple-controlled" onChange={(e)=>setEtoile(e.target.value)}/>
            <Button onClick={handleReset} variant="outline-warning">Reset</Button>{' '}
        </div>
        // </div>
    )
}

export default FilterMovie