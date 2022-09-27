import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Deck from "./deck";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Deck />} />
      </Routes>
    </Router>
  );
}

export default App;
