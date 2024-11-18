import styles from "../styles/LoginPage.module.less";
import { getKaKaoLoginURL } from "../service/UserService.ts";

const LoginPage = () => {
  const socialKaKaoLogin = () => {
    window.localStorage.setItem("provider", "kakao");
    window.location.href = getKaKaoLoginURL();
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p>
          객관적 지표로 안내하는 <span>일트</span>
        </p>
      </div>
      <div className={styles.loginContainer}>
        <img
          src="/src/assets/image/kakao_login_medium_wide.png"
          onClick={socialKaKaoLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
