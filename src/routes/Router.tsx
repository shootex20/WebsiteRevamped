import { Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Aboutme from "../components/Aboutme";
import Projects from "../components/Projects";
// import Resume from '../components/Resume'
import Title from "../components/Title";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
