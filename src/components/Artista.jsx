import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

export default function Artista(children){

    const {id} = useParams()

    const [artista, setArtista] = useState({})

    useEffect(() =>{
    fetch(`http://localhost:3000/artistas/${id}`)
    .then(res => res.json())
    .then(data => {setArtista(data);console.log(data)})
    },[]);
    
    return(
        <>
<div className="bg-gray-400 w-3/4 grid grid-cols-4 pl-20 items-center">
<h1>{artista.name}</h1>
<p>{artista.descricao}</p>
</div>
</>        
    )
}
