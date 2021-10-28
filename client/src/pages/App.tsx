import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Project from "../components/Project";
import Resume from "../components/Resume";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <br/>
        <Project />
        <br />
      </main>
      <footer>
        <Contact />
        <br />
        <Resume />
        <br />
      </footer>
    </>
  );
}

export default App;
