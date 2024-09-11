import CardSideBar from "./components/CardSideBar"
import Container from "./components/Container"
import Header from "./components/Header"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {

  return (

    <>
      <Header/>
     <Container>
        <SideBar>
          <CardSideBar/>
          <CardSideBar/>
          <CardSideBar/>
        </SideBar>
        <Main/>
      </Container>
        
      
    </>
  )
}

export default App
