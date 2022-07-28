import "./App.css";
import Navbar from "./components/Navbar";
import Women from "./components/Women";
import Men from "./components/Men";
import Kids from "./components/Kids"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='women' element={<Women />}></Route>
      <Route path='men' element={<Men />}></Route>
      <Route path='kids' element={<Kids />}></Route>
      </Routes>
    </Router>
  );
}

export default App;