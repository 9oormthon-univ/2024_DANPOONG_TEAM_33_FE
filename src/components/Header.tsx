import styles from "../styles/Header.module.less";
import { useInput } from "../hook/UseInput.ts";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth/AuthStore.ts";

const Header = () => {
  const [search, setSearch] = useInput();
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          make&nbsp;<span>1t</span>&nbsp;with a&nbsp;
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
            <input type="text" value={search} onChange={setSearch} />
            <img src="/image/searchBtn.png" />
          </div>
        </div>
        <div className={styles.userContainer}>
          <div className={styles.profileContainer}>
            {user ? (
              <div>
                <img src={user.profileImage} /> <p>{user.name}</p>
              </div>
            ) : (
              <div>
                <img src="/image/profileLogo.png" />
                <p>일트님</p>
              </div>
            )}
          </div>
          <div className={styles.btnContainer}>
            <button onClick={() => navigate("/login")}>로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
