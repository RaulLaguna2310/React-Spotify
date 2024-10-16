import {useParams} from "react-router-dom"

export default function Artista(children){
    const {id} = useParams()
    return(
        <h1>Artista: {id}</h1>
    )
}