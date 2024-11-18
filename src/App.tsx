import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/oauth2/login/kakao" element={<AuthPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
