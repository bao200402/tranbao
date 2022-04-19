import "./App.css";
import NavBar from "./components/navBar";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/contents/content";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <NavBar />

        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
