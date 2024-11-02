import CardSideBar from "./components/CardSideBar"
import Container from "./components/Container"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <CardSideBar />
        </SideBar>
        <Outlet />
      </Container>
    </>
  )
}

export default App
