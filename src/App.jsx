import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AssessmentPortfolio from "./AssessmentPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<AssessmentPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
