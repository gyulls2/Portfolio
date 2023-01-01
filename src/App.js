import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Project01 from "./components/Project01";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />
      <Intro />
      <Skills />
      <Project01 />

      <Footer />
    </div>
  );
}

export default App;
