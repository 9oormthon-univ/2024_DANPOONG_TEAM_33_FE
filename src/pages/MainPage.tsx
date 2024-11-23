import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/MainPage.module.less";
import Header from "../components/Header.tsx";
import CompanyList from "../components/CompanyList.tsx";
import Qualifications from "../components/Qualifications.tsx";
import RecentCompany from "../components/RecentCompany.tsx";
import Footer from "../components/Footer.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  getQualificationsCompany,
  getTryCompanyList,
  getRecentCompanyList,
} from "../service/CompanyService.ts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CompanyPieChart from "../components/charts/CompanyPieChart.tsx";

const MainPage = () => {
  const [clickedTry, setClickedTry] = useState<number | null>(null);
  const [qualificationsCompany, setQualificationsCompany] = useState<
    qualificationsCompanyType[]
  >([]);
  const [searchCertification, setSearchCertification] = useState<string>("");
  const [showImage, setShowImage] = useState<boolean>(true);
  const [companyList, setCompanyList] = useState([
    // 서버 api 호출 전 임시 데이터
    { name: "삼성전자1", end_date: "2024-12-31" },
    { name: "삼성전자2", end_date: "2024-12-31" },
    { name: "삼성전자3", end_date: "2024-12-31" },
    { name: "삼성전자4", end_date: "2024-12-31" },
    { name: "삼성전자5", end_date: "2024-12-31" },
    { name: "삼성전자6", end_date: "2024-12-31" },
  ]);
  const [value, setValue] = useState(new Date());

  const companyData = [
    {
      companyName: "(주)원트",
      chartData: [
        { name: "자격증 충족", value: 45, color: "#4781ff" },
        { name: "성적증명서/성적", value: 30, color: "#1ba93a" },
        { name: "봉사 활동", value: 25, color: "#f06c00" },
      ],
    },
    {
      companyName: "(주)원트2",
      chartData: [
        { name: "자격증 충족", value: 55, color: "#4781ff" },
        { name: "성적증명서/성적", value: 20, color: "#1ba93a" },
        { name: "봉사 활동", value: 25, color: "#f06c00" },
      ],
    },
    {
      companyName: "(주)원트3",
      chartData: [
        { name: "자격증 충족", value: 45, color: "#4781ff" },
        { name: "성적증명서/성적", value: 30, color: "#1ba93a" },
        { name: "봉사 활동", value: 25, color: "#f06c00" },
      ],
    },
    {
      companyName: "(주)원트4",
      chartData: [
        { name: "자격증 충족", value: 45, color: "#4781ff" },
        { name: "성적증명서/성적", value: 30, color: "#1ba93a" },
        { name: "봉사 활동", value: 25, color: "#f06c00" },
      ],
    },
  ];

  const [recentCompanyList, setRecentCompanyList] = useState<any[]>([]);
  const navigate = useNavigate();

  const getQualificationsCompanyData = async () => {
    try {
      const response = await getQualificationsCompany();
      if (response?.status === 200) {
        setSearchCertification(response.data.search_certification);
        console.log("메인", response.data.company_list);
        setQualificationsCompany(response.data.company_list);
      }
    } catch (error) {
      console.error("자격증 기업 호출 에러", error);
    }
  };

  const getTryCompanyListData = async () => {
    try {
      const response = await getTryCompanyList("main");
      if (response.success) {
        // setCompanyList(response.data.company_list);
      }
    } catch (error) {
      console.error("맞춤 기업 호출 에러", error);
    }
  };

  const getRecentCompanyListData = async () => {
    try {
      const response = await getRecentCompanyList();
      if (response.success) {
        setRecentCompanyList(response.data.company_list);
        console.log("최근 기업", response.data.company_list);
      }
    } catch (error) {
      console.error("최근 기업 호출 에러", error);
    }
  };

  console.log(recentCompanyList);
  useEffect(() => {
    getQualificationsCompanyData();
    getTryCompanyListData();
    getRecentCompanyListData();
    return () => {
      setQualificationsCompany([]);
    };
  }, []);

  const handleShowImage = (tryNumber: number) => {
    setClickedTry(tryNumber);
    setShowImage(!showImage);
  };
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    speed: 500,
    pauseOnHover: true,
    swipeToSlide: true,
  };
  const settings2 = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: qualificationsCompany.length > 4 ? true : false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 3000,
  };

  console.log(clickedTry);
  console.log(qualificationsCompany.length);

  console.log(searchCertification);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.topContainer}>
            <div className={styles.leftContainer}>
              <p className={styles.title}>지원가능한 기업</p>
              <div className={styles.companyContainer}>
                <div className={styles.tryContainer}>
                  <button onClick={() => handleShowImage(1)}>1try</button>
                  <button onClick={() => handleShowImage(2)}>2try</button>
                  <button onClick={() => handleShowImage(3)}>3try</button>
                </div>
                <div className={styles.companyListContainer}>
                  {clickedTry === null ? (
                    <div className={styles.mainBookImage}>
                      <img src="/image/mainBookImage.png" />
                    </div>
                  ) : (
                    <div className={styles.slideContainer}>
                      <Slider {...settings} className={styles.slide}>
                        {companyList.map((company) => (
                          <CompanyList
                            key={company.name}
                            name={company.name}
                            end_date={company.end_date}
                          />
                        ))}
                      </Slider>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.chartContainer}>
                <CompanyPieChart companies={companyData} />
              </div>
              <div className={styles.menuContainer}>
                <button onClick={() => navigate("/resume")}>
                  내 이력서
                  <span>
                    <img src="/image/more.png" />
                  </span>
                </button>
                <button>
                  나의 자료
                  <span>
                    <img src="/image/more.png" />
                  </span>
                </button>
                <button>
                  지원 기업
                  <span>
                    <img src="/image/more.png" />
                  </span>
                </button>
                <button>
                  세부 조건
                  <span>
                    <img src="/image/more.png" />
                  </span>
                </button>
                <button onClick={() => navigate("/mypage")}>
                  마이페이지
                  <span>
                    <img src="/image/more.png" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.middleContainer}>
            <div className={styles.middleTitleContainer}>
              {searchCertification ? (
                <p className={styles.middleTitle}>
                  {searchCertification} <span>자격증으로 지원 가능한 기업</span>
                </p>
              ) : (
                <p></p>
              )}
            </div>

            {qualificationsCompany.length === 0 ? (
              <p>자격증 관련 기업 정보가 없습니다.</p>
            ) : (
              <Slider {...settings2}>
                {qualificationsCompany.map((qualifications) => (
                  <Qualifications
                    key={qualifications.infoNo}
                    companyName={qualifications.companyName}
                    hiringPeriodEndDate={qualifications.hiringPeriodEndDate}
                    companyImageURL={qualifications.companyImageURL}
                  />
                ))}
              </Slider>
            )}
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.leftContainer}>
              <RecentCompany
                recentCompanyList={recentCompanyList && recentCompanyList}
              />
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
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
