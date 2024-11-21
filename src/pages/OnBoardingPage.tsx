import React, { useState } from "react";
import CommonTable from "../components/CommonTable";
import styles from "../styles/OnBoardingPage.module.less";
import Header from "../components/Header";
import CareerInfo from "../components/CareerInfo";
const OnBoardingPage: React.FC = () => {
  // 자격증 테이블 설정
  const certificationColumns = [
    { title: "순번", key: "number", width: "80px" },
    { title: "종류 및 등급", key: "type" },
    { title: "취득일", key: "date" },
    { title: "발행처", key: "issuer" },
  ];

  // 포트폴리오 테이블 설정
  const portfolioColumns = [
    { title: "순번", key: "number", width: "80px" },
    { title: "파일명", key: "filename" },
    { title: "첨부파일", key: "file" },
  ];

  // 봉사활동 테이블 설정
  const volunteerColumns = [
    { title: "시간", key: "hours", width: "100px" },
    { title: "파일명", key: "filename" },
    { title: "첨부파일", key: "file" },
  ];

  // 각 테이블의 데이터 상태 관리
  const [certificationData, setCertificationData] = useState<any[]>([]);
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [volunteerData, setVolunteerData] = useState<any[]>([]);

  // 입력 처리 함수들
  const handleCertificationChange = (
    rowIndex: number,
    columnKey: string,
    value: string
  ) => {
    const newData = [...certificationData];
    if (!newData[rowIndex]) newData[rowIndex] = {};
    newData[rowIndex][columnKey] = value;
    setCertificationData(newData);
  };

  const handlePortfolioChange = (
    rowIndex: number,
    columnKey: string,
    value: string
  ) => {
    const newData = [...portfolioData];
    if (!newData[rowIndex]) newData[rowIndex] = {};
    newData[rowIndex][columnKey] = value;
    setPortfolioData(newData);
  };

  const handleVolunteerChange = (
    rowIndex: number,
    columnKey: string,
    value: string
  ) => {
    const newData = [...volunteerData];
    if (!newData[rowIndex]) newData[rowIndex] = {};
    newData[rowIndex][columnKey] = value;
    setVolunteerData(newData);
  };

  // 제출 처리 함수들
  const handleCertificationSubmit = () => {
    console.log("자격증 데이터:", certificationData);
    // API 호출 등 제출 로직 구현
  };

  const handlePortfolioSubmit = () => {
    console.log("포트폴리오 데이터:", portfolioData);
    // API 호출 등 제출 로직 구현
  };

  const handleVolunteerSubmit = () => {
    console.log("봉사활동 데이터:", volunteerData);
    // API 호출 등 제출 로직 구현
  };

  return (
    <div className={styles.onboardingContainer}>
      <Header />
      <div className={styles.tableSection}>
        <CommonTable
          title="애라님의 자격증을 알려주세요."
          description="설정에서 변경 가능합니다"
          columns={certificationColumns}
          rowCount={3}
          onInputChange={handleCertificationChange}
          onSubmit={handleCertificationSubmit}
          onCancel={() => {
            /* 취소 로직 */
          }}
        />
      </div>

      <div className={styles.tableSection}>
        <CommonTable
          title="포트폴리오가 있다면 등록해주세요."
          description="설정에서 변경 가능합니다"
          columns={portfolioColumns}
          rowCount={3}
          onInputChange={handlePortfolioChange}
          onSubmit={handlePortfolioSubmit}
          onCancel={() => {
            /* 취소 로직 */
          }}
        />
      </div>

      <div className={styles.tableSection}>
        <CommonTable
          title="봉사 활동을 하셨나요?"
          description="설정에서 변경 가능합니다"
          columns={volunteerColumns}
          rowCount={3}
          onInputChange={handleVolunteerChange}
          onSubmit={handleVolunteerSubmit}
          onCancel={() => {
            /* 취소 로직 */
          }}
        />
      </div>
      <CareerInfo />
    </div>
  );
};

export default OnBoardingPage;
