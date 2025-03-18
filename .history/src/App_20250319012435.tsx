import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./Auth";
import Dashboard from "./Dashboard/HeaderContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
