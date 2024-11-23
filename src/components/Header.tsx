import styles from "../styles/Header.module.less";
import { useInput } from "../hook/UseInput.ts";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth/AuthStore.ts";

const Header = () => {
  const [search, setSearch] = useInput();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p onClick={() => navigate("/")}>
          make&nbsp;<span>1t</span>&nbsp;with a&nbsp;
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input type="text" value={search} onChange={setSearch} />
            <img src="/image/searchBtn.png" />
          </div>
        </div>
        <div className={styles.userContainer}>
          {user ? (
            <div className={styles.profileContainer}>
              <img
                src={user.profileImage || "/image/profileLogo.png"}
                alt="profile"
              />
              <p>{`${user.name}님` || "사용자"}</p>
            </div>
          ) : (
            <div className={styles.profileContainer}>
              <img src="/image/profileLogo.png" alt="default profile" />
              <p>일트님</p>
            </div>
          )}

          <div className={styles.btnContainer}>
            {!isAuthenticated ? (
              <button onClick={() => navigate("/login")}>로그인</button>
            ) : (
              <button onClick={() => useAuthStore.getState().logout()}>
                로그아웃
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
