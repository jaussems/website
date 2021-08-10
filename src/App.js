//import backgroundimg from "./45687978_2345070585711445_3530001292363563008_o.jpg";
import "./App.css";
import "./textautomation.css";
import Navigation from "./Components/Navigation";
import MyStory from "./Components/MyStory";
import Contact from "./Components/Contact";
import Portfolio from "./Components/My-Portfolio";
import Skills from "./Components/Skills";
function App() {
  //   <img
  //   className="backgroundImg"
  //   src={backgroundimg}
  //   alt="image showing me and one of my hobbies"
  // />
  function Smooth() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });

    const navigation = document.getElementsByTagName("Navigation");
    function FixNav() {
      navigation.style.display = "fixed";
    }
    navigation.addEventListener("scroll", FixNav);
  }

  return (
    <div className="App" onScroll={Smooth}>
      <Navigation />
      <div className="area1">
        <div className="area1-backgroundbox">
          <div className="content">
            <div className="content-container">
              <div className="text-container">
                <p className="content-container-text">I am a</p>
                <div className="content-animation-div">
                  <h2 class="content-list-item">programmer </h2>
                  <h2 class="content-list-item">creator </h2>
                  <h2 class="content-list-item">energy </h2>
                  <h2 class="content-list-item">personality </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Story" className="area2">
        <MyStory />
      </div>
      <div id="Skills" className="area3">
        <Skills />
      </div>
      <div id="Portfolio" className="area4">
        <Portfolio />
      </div>
      <div id="Contact" className="area5">
        <Contact />
      </div>
    </div>
  );
}

export default App;
