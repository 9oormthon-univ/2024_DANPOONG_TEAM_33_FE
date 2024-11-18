import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getToken } from "../service/UserService.ts";

const AuthPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const code = new URLSearchParams(window.location.search).get("code");
        console.log(code);
        if (code) {
          const response = await getToken(code);
          if (response.success) {
            navigate("/");
          }
        }
      } catch (error) {
        console.log("로그인 실패", error);
      }
    };
    authenticateUser();
  }, [navigate]);

  return <div></div>;
};

export default AuthPage;
