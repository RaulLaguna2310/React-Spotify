import { useEffect } from "react"
import {useParams} from "react-router-dom"

export default function Artista(children){

    const {id} = useParams()

    const [artista, setArtista] = useEffect({})

    useEffect(() =>{
    fetch(`http://localhost:3000/artistas/${id}`)
    .then(res => res.json())
    .then(data => setArtista(data))
    },[]);
    
    return(
        <>
<h1>{artista.nome}</h1>
</>        
    )
}
