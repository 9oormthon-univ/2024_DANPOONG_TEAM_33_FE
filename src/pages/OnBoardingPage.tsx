import React, { useState } from "react";
import CommonTable from "../components/CommonTable.tsx";
import styles from "../styles/OnBoardingPage.module.less";
import Footer from "../components/Footer.tsx";
import CareerInfo from "../components/CareerInfo";

import { useEffect } from "react";
import {
  uploadPortfolioFiles,
  uploadVolunteeringFiles,
} from "../service/OnBoardingService";
const OnBoardingPage: React.FC = () => {
  // 업종 선택 상태
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedSubIndustry, setSelectedSubIndustry] = useState<string>("");

  // 지역 선택 상태
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedSubLocation, setSelectedSubLocation] = useState<string>("");

  const [selectedCertification, setSelectedCertification] =
    useState<string>("");
  const [selectedSubCertification, setSelectedSubCertification] =
    useState<string>("");

  console.log(
    "mainData",
    selectedIndustry,
    selectedLocation,
    selectedSubIndustry,
    selectedSubLocation,
    selectedCertification,
    selectedSubCertification
  );

  // 포트폴리오 테이블 설정
  const portfolioColumns = [
    { title: "순번", key: "number", width: "80px", type: "text" },
    { title: "파일명", key: "filename", type: "fileName" },
    { title: "첨부파일", key: "file", type: "fileButton" },
  ];

  // 봉사활동 테이블 설정
  const volunteerColumns = [
    { title: "시간", key: "hours", width: "100px", type: "text" },
    { title: "파일명", key: "filename", type: "fileName" },
    { title: "첨부파일", key: "file", type: "fileButton" },
  ];

  // 각 테이블의 데이터 상태 관리

  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [volunteerData, setVolunteerData] = useState<any[]>([]);

  // 입력 처리 함수들

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

    console.log("봉사 데이터", newData);
  };

  const [fileInfos, setFileInfos] = useState<{ [key: number]: File }>({}); //파일 이름

  const handleFileChange = (files: { [key: number]: File }) => {
    setFileInfos(files);
    console.log("업데이트된 파일 정보:", files);
  };

  useEffect(() => {
    console.log("파일 업로드 상태 변경:", fileInfos);
  }, [fileInfos]);

  const handleFileUpload = async (fileName: string, fileType: string) => {
    if (!fileInfos[0]) {
      console.log("업로드할 파일이 없습니다");
      return;
    }

    const formData = new FormData();
    formData.append(`${fileName}Name`, fileInfos[0].name);
    formData.append(`${fileType}File`, fileInfos[0]);
    switch (fileName) {
      case "portfolio":
        await uploadPortfolioFiles(formData);
        break;
      case "volunteeringFile":
        formData.append("time", volunteerData[0].hours);
        console.log("봉사데이터 타입", typeof volunteerData[0].hours);
        await uploadVolunteeringFiles(formData);
        break;
    }
  };

  console.log("파일 업로드", fileInfos[0]?.name);
  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.tableSection}>
        <CommonTable
          title="포트폴리오가 있다면 등록해주세요."
          description="설정에서 변경 가능합니다"
          columns={portfolioColumns}
          rowCount={1}
          onInputChange={handlePortfolioChange}
          // setFileInfos={setFileInfos}
          onFileChange={handleFileChange}
          handleFileUpload={() =>
            handleFileUpload("portfolio", "certification")
          }
        />
      </div>

      <div className={styles.tableSection}>
        <CommonTable
          title="봉사 활동을 하셨나요?"
          description="설정에서 변경 가능합니다"
          columns={volunteerColumns}
          rowCount={1}
          onInputChange={handleVolunteerChange}
          // setFileInfos={setFileInfos}
          onFileChange={handleFileChange}
          handleFileUpload={() =>
            handleFileUpload("volunteeringFile", "volunteering")
          }
        />
      </div>
      <CareerInfo
        selectedIndustry={selectedIndustry}
        selectedSubIndustry={selectedSubIndustry}
        selectedLocation={selectedLocation}
        selectedSubLocation={selectedSubLocation}
        setSelectedCertification={setSelectedCertification}
        setSelectedSubCertification={setSelectedSubCertification}
        setSelectedIndustry={setSelectedIndustry}
        setSelectedSubIndustry={setSelectedSubIndustry}
        setSelectedLocation={setSelectedLocation}
        setSelectedSubLocation={setSelectedSubLocation}
      />
      <Footer />
    </div>
  );
};

export default OnBoardingPage;
