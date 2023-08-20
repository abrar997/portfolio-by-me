import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import SkillsExperience from "./SkillsExperience";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills-experience" element={<SkillsExperience />} />
        <Route path="/works" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
