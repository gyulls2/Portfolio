import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Project01 from "./components/Project/Project01";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Project02 from "./components/Project/Project02";
import Project03 from "./components/Project/Project03";
import Project04 from "./components/Project/Project04";

function App() {
  return (
    <div className="App">
      <Header />
        <Main />
        <Intro />
        <Skills />
        <Project>
          <Project01 />
          <Project02 />
          <Project03 />
          <Project04 />
        </Project>
      <Footer />
    </div>
  );
}

export default App;
