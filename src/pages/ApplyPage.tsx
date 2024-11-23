import styles from "../styles/ApplyPage.module.less";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getApplyCompany } from "../service/CompanyService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth/AuthStore";
const ApplyPage = () => {
  const { infoNo } = useParams();
  const user = useAuthStore((state) => state.user);
  const [companyData, setCompanyData] = useState<any>(null);
  const handleApplyCompany = async () => {
    try {
      const response = await getApplyCompany(Number(infoNo));
      if (response.success) {
        setCompanyData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleApplyCompany();
  }, []);
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.mainContainer}>
        {companyData && (
          <div className={styles.topContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.title}>
                <div className={styles.imgContainer}>
                  <div className={styles.img}>
                    <img src={companyData.company_info.companyImageURL} />
                  </div>
                  <div className={styles.text}>
                    <h4 className={styles.companyName}>
                      {companyData.company_info.companyName}
                    </h4>
                    <p className={styles.companyInfo}>
                      {companyData.company_info.companyLocationRegion}{" "}
                      {companyData.company_info.companyLocationSubregion}
                    </p>
                  </div>
                </div>
                <div className={styles.applyInfo}>
                  <p>
                    급여 : {companyData.company_info.salaryMin} ~
                    {companyData.company_info.salaryMax}
                  </p>
                  <p>{companyData.company_info.employmentType}</p>
                  <p>
                    근무시간 :
                    {companyData.company_info.workingScheduleWorkingHours}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.title2}>
                <h3>필수 자격증</h3>
                <ul>
                  {companyData.company_info.certificationsEssential.map(
                    (cert: string, indx: number) => (
                      <li key={indx}>{cert}</li>
                    )
                  )}
                </ul>
              </div>
              <div className={styles.submitBtn}>
                <button disabled={!companyData.company_info.userApplyAble}>
                  지원하기
                </button>
              </div>
            </div>
          </div>
        )}
        {companyData && (
          <div className={styles.middleContainer}>
            <div className={styles.middleLeftContainer}>
              <div className={styles.content}>
                <p>{user?.name}님의 등급</p>
                <div className={styles.avarageContainer}>
                  <p>평균등급</p>
                  <p>{companyData.company_info.userRate}</p>
                  <p>
                    현재 지원자수&nbsp;{companyData.company_info.userApplyAble}
                    명
                  </p>
                </div>
                <div className={styles.applyInfo}>
                  <p>
                    지원기간: {companyData.company_info.hiringPeriodStartDate} ~
                    {companyData.company_info.hiringPeriodEndDate}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.middleRightContainer}>
              <div className={styles.content}>
                <h3>더 높은 등급으로 지원가능한 기업 </h3>
                <div className={styles.companyList}>
                  {companyData?.sameRateCompany.map((company: any) => (
                    <div key={company.infoNo}>
                      <p>{company.companyName}</p>
                      <p>평균등급: {company.applyAverageRate}</p>
                      <p>지원자수: {company.applyCount}명</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.bottomContainer2}>
          <div className={styles.content}></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplyPage;
