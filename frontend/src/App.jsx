import CardSideBar from "./components/CardSideBar"
import Container from "./components/Container"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import { Outlet } from "react-router-dom"

function App() {

  useEffect(() => {
    setIsLoading(true);
      fetch('https://react-spotify-peach.vercel.app')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  },[])

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
