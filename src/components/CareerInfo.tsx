import React, { useState } from "react";
import styles from "../styles/CareerInfo.module.less";
import {
  INDUSTRY_DATA,
  LOCATION_DATA,
  CERTIFICATION_DATA,
} from "../data/career";
import SelectionSection from "./SelectionSection";
import { saveOnBoardingData } from "../service/OnBoardingService";
import { useAuthStore } from "../store/auth/AuthStore";

interface CareerInfoProps {
  selectedIndustry: string;
  selectedSubIndustry: string;
  selectedLocation: string;
  selectedSubLocation: string;
  setSelectedIndustry: (industry: string) => void;
  setSelectedSubIndustry: (subIndustry: string) => void;
  setSelectedLocation: (location: string) => void;
  setSelectedSubLocation: (subLocation: string) => void;
  setSelectedCertification: (certification: string) => void;
  setSelectedSubCertification: (subCertification: string) => void;
}

const CareerInfo: React.FC<CareerInfoProps> = ({
  selectedIndustry,
  selectedSubIndustry,
  selectedLocation,
  selectedSubLocation,
  setSelectedIndustry,
  setSelectedSubIndustry,
  setSelectedLocation,
  setSelectedSubLocation,
  setSelectedCertification,
  setSelectedSubCertification,
}) => {
  // 목표 기업 검색

  // 경력 선택 상태
  const user = useAuthStore((state) => state.user);

  const [careerLevels, setCareerLevels] = useState<string[]>([]);

  const [,] = useState<any[]>([]);

  const handleIndustrySelect = (industry: string) => {
    // 메인업종
    console.log("Selected Industry:", industry);
    setSelectedIndustry(industry);
    setSelectedSubIndustry("");
  };
  const handleCertificationSelect = (certification: string) => {
    // 메인자격증
    console.log("Selected Certification:", certification);
    setSelectedCertification(certification);
    setSelectedSubCertification("");
  };
  const handleCertificationSubSelect = (subCertification: string) => {
    // 서브자격증
    console.log("Selected Sub Certification:", subCertification);
    setSelectedSubCertification(subCertification);
  };

  const handleSubIndustrySelect = (subIndustry: string) => {
    // 서브업종
    console.log("Selected Sub Industry:", subIndustry);
    setSelectedSubIndustry(subIndustry);
  };

  const handleLocationSelect = (location: string) => {
    // 메인지역
    console.log("Selected Location:", location);
    setSelectedLocation(location);
    setSelectedSubLocation("");
  };

  const handleSubLocationSelect = (subLocation: string) => {
    // 서브지역
    console.log("Selected Sub Location:", subLocation);
    setSelectedSubLocation(subLocation);
  };

  const handleCareerLevelChange = (level: string) => {
    // 경력
    console.log("Career Level Change:", level);
    setCareerLevels(
      careerLevels.includes(level)
        ? careerLevels.filter((l) => l !== level)
        : [...careerLevels, level]
    );
  };

  const handleSave = async () => {
    try {
      const data = {
        industryCategory: selectedIndustry,
        subIndustry: selectedSubIndustry,
        region: selectedLocation,
        subRegion: selectedSubLocation,
        career: careerLevels[0] || "",
        targetCompanies: ["LG", "삼성"],
      };
      const response = await saveOnBoardingData(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(
    "호출데이터",
    typeof selectedIndustry,
    typeof selectedSubIndustry,
    typeof selectedLocation,
    typeof selectedSubLocation,
    typeof careerLevels
  );
  return (
    <div className={styles.container}>
      {/* 목표 기업 섹션 */}
      <SelectionSection
        title={`${user?.name}님 자격증을 알려주세요`}
        mainPlaceholder="자격증 종류를 선택해주세요"
        subPlaceholder="자격증 이름을 입력해주세요"
        data={CERTIFICATION_DATA}
        onMainSelect={handleCertificationSelect}
        onSubSelect={handleCertificationSubSelect}
      />
      <SelectionSection
        title="어떤 업종을 준비중이신가요?"
        mainPlaceholder="업종 경력"
        subPlaceholder="기획, 전략 - 마케팅"
        data={INDUSTRY_DATA}
        onMainSelect={handleIndustrySelect}
        onSubSelect={handleSubIndustrySelect}
      />

      <SelectionSection
        title="어느 지역에서 근무하고 싶으신가요?"
        mainPlaceholder="지역별 선택"
        subPlaceholder="시/군/구"
        data={LOCATION_DATA}
        onMainSelect={handleLocationSelect}
        onSubSelect={handleSubLocationSelect}
      />

      <section className={styles.section}>
        <h2>경력을 알려주세요.</h2>
        <div className={styles.careerBox}>
          {["신입", "1~3년", "4~6년", "7년 이상"].map((level) => (
            <label key={level} className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={careerLevels.includes(level)}
                onChange={() => handleCareerLevelChange(level)}
              />
              <span>{level}</span>
            </label>
          ))}
        </div>
      </section>
      <button className={styles.saveButton} onClick={handleSave}>
        저장하기
      </button>
    </div>
  );
};

export default CareerInfo;
