import { useState } from "react"
import CardSideBar from "./components/CardSideBar"
import Container from "./components/Container"
import Header from "./components/Header"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useEffect } from "react"
import artista from "../server/models/Artista"

function App() {

    const [artistas, setArtistas] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/artistas')
      .then( res => res.json())
      .then(res => setArtistas(res))
      .catch( err => console.log(err))
      .finally(() => console.log("Acabou >) "))

    }, [])

  return (

    <>
      <Header/>
     <Container>
        <SideBar>
          <CardSideBar/>
          <CardSideBar/>
          <CardSideBar/>
        </SideBar>
        <Main>
          <h1> Gênero Pura </h1>
          {
            artistas
            .filter(artista => artista.genero === "rap")
           .map(artista => (
            <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
          <p>{artista.name}</p>
          </div>
           )) 
          }
        
        </Main>
      </Container>
        
      
    </>
  )
}

export default App
