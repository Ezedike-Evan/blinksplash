import Footer from "./component/footer"
import Getstarted from "./component/getstarted"
import Navbar from "./component/navbar"

const Home = ()=>{
  return (
    <div id="home">
      <Navbar />
      <Getstarted />
      <Footer />
    </div>
  )
}

export default Home