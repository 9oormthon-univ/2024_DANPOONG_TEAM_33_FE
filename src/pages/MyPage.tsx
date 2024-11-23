import styles from "../styles/MyPage.module.less";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { useAuthStore } from "../store/auth/AuthStore.ts";
import BarChart from "../components/charts/BarChart.tsx";
import Calendar from "react-calendar";
import { useState } from "react";
const MyPage = () => {
  const dummyData = [
    {
      title: "자격증",
      status: "보충",
      color: "#4781ff",
      data: { other: 80, me: 60 },
    },
    {
      title: "봉사활동",
      status: "부족",
      color: "#f06c00",
      data: { other: 90, me: 40 },
    },
    {
      title: "포트폴리오",
      status: "충족",
      color: "#1ba93a",
      data: { other: 70, me: 70 },
    },
  ];
  const [value, setValue] = useState(new Date());
  const user = useAuthStore((state) => state.user);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.barChartContainer}>
          <div className={styles.userInfoContainer}>
            <img src="/public/image/profileLogo.png" />
            <p>{`${user?.name}님`}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {dummyData.map((item, index) => (
              <BarChart
                key={index}
                title={item.title}
                status={item.status}
                color={item.color}
                data={item.data}
              />
            ))}
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.gridItem}>
              <div className={styles.itemHeader}>
                <span>내 이력서</span>
                <span>›</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  완성도 <span className={styles.percentage}>80%</span>
                </div>
                <div>
                  수정 날짜 <span className={styles.date}>1달 전</span>
                </div>
              </div>
            </div>

            <div className={styles.gridItem}>
              <div className={styles.itemHeader}>
                <span>나의 자료</span>
                <span>›</span>
              </div>
              <div className={styles.itemContent}>
                <div>컴퓨터 관련 자격증 다수</div>
                <div>
                  수정 날짜 <span className={styles.date}>4달 전</span>
                </div>
              </div>
            </div>

            <div className={styles.gridItem}>
              <div className={styles.itemHeader}>
                <span>지원 기업</span>
                <span>›</span>
              </div>
              <div className={styles.itemContent}>
                <div>6개 기업 지원</div>
                <div>
                  최근 지원 <span className={styles.date}>4일 전</span>
                </div>
              </div>
            </div>

            <div className={styles.gridItem}>
              <div className={styles.itemHeader}>
                <span>목표 설정</span>
                <span>›</span>
              </div>
              <div className={styles.itemContent}>
                <div>
                  최근 목표 <span className={styles.date}>2일 전</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <Calendar
              onChange={() => setValue}
              value={value}
              className={styles.calendar}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
