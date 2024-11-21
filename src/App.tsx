import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import AuthPage from "./pages/AuthPage.tsx";
import MainPage from "./pages/MainPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import MyPage from "./pages/MyPage.tsx";
import OnBoardingPage from "./pages/OnBoardingPage.tsx";
function App() {
  return (
    <Routes>
      <Route path="/onboarding" element={<OnBoardingPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/oauth2/login/kakao" element={<AuthPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
