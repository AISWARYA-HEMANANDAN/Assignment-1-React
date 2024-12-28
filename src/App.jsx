import About from "./components/About"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Home from "./components/Home"


function App() {
  

  return (
    <>
      <div id="header"><Header/></div>
    <div id="home"><Home/></div>
    <div id="about"><About/></div>
    <div id="achievements" className="mb-4"><Achievements/></div>
    <div id="gallery" className="mt-4"><Gallery/></div>
    <div id="contact"><Contact/></div>
    <div id="footer"><Footer/></div>
    </>
  )
}

export default App
