import { useState } from "react"
import CardSideBar from "./components/CardSideBar"
import Container from "./components/Container"
import Header from "./components/Header"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useEffect } from "react"
import artista from "../server/models/Artista"
import { Outlet } from "react-router-dom"

function App() {

    

  return (

    <>
      <Header/>
     <Container>
        <SideBar>
          <CardSideBar/>
        </SideBar>
          <Outlet/>
      </Container>
        
      
    </>
  )
}

export default App
