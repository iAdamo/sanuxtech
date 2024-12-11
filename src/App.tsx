import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/ui";
import { HomeScreen } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
