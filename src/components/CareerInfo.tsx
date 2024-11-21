import React, { useState } from "react";
import styles from "../styles/CareerInfo.module.less";

// 임시 데이터 구조
const INDUSTRY_DATA: IndustryData = {
  "기획, 전략": ["마케팅", "영업 관리", "전략 기획"],
  "영업 관리 부문": ["영업 관리", "세일즈", "기술 영업"],
};

const LOCATION_DATA: LocationData = {
  서울: ["서울 전체", "강남구", "강북구", "노원구"],
  경기: ["경기 전체", "성남시", "용인시", "수원시"],
  부산: ["부산 전체", "해운대구", "부산진구"],
  대전: ["대전 전체", "서구", "유성구"],
};

const CareerInfo: React.FC = () => {
  // 목표 기업 검색
  const [searchTerm, setSearchTerm] = useState("");

  // 업종 선택 상태
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSubIndustry, setSelectedSubIndustry] = useState("");

  // 지역 선택 상태
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSubLocation, setSelectedSubLocation] = useState("");

  // 경력 선택 상태
  const [careerLevels, setCareerLevels] = useState<string[]>([]);

  // 드롭다운 표시 상태
  const [showIndustryList, setShowIndustryList] = useState(false);
  const [showSubIndustryList, setShowSubIndustryList] = useState(false);
  const [showLocationList, setShowLocationList] = useState(false);
  const [showSubLocationList, setShowSubLocationList] = useState(false);

  const handleIndustrySelect = (industry: string) => {
    console.log("Selected Industry:", industry);
    setSelectedIndustry(industry);
    setSelectedSubIndustry("");
    setShowIndustryList(false);
    setShowSubIndustryList(true);
  };

  const handleSubIndustrySelect = (subIndustry: string) => {
    console.log("Selected Sub Industry:", subIndustry);
    setSelectedSubIndustry(subIndustry);
    setShowSubIndustryList(false);
  };

  const handleLocationSelect = (location: string) => {
    console.log("Selected Location:", location);
    setSelectedLocation(location);
    setSelectedSubLocation("");
    setShowLocationList(false);
    setShowSubLocationList(true);
  };

  const handleSubLocationSelect = (subLocation: string) => {
    console.log("Selected Sub Location:", subLocation);
    setSelectedSubLocation(subLocation);
    setShowSubLocationList(false);
  };

  const handleCareerLevelChange = (level: string) => {
    console.log("Career Level Change:", level);
    setCareerLevels(
      careerLevels.includes(level)
        ? careerLevels.filter((l) => l !== level)
        : [...careerLevels, level]
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search Term:", e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.container}>
      {/* 목표 기업 섹션 */}
      <section className={styles.section}>
        <h2>목표 기업을 알려주세요.</h2>
        <div className={styles.searchBox}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="일트 구글로 카카오"
          />
          <button className={styles.searchIcon}>
            <img src="/public/image/searchBtn.png" />
          </button>
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.skipButton}>건너뛰기</button>
          <button className={styles.submitButton}>등록하기</button>
        </div>
      </section>

      {/* 업종 선택 섹션 */}
      <section className={styles.section}>
        <h2>어떤 업종을 준비중이신가요?</h2>
        <div className={styles.selectionBox}>
          <div className={styles.selectionGroup}>
            <div className={styles.mainSelection}>
              <input
                type="text"
                placeholder="업종 경력"
                value={selectedIndustry}
                readOnly
                onClick={() => setShowIndustryList(!showIndustryList)}
              />
              {showIndustryList && (
                <div className={styles.optionList}>
                  {Object.keys(INDUSTRY_DATA).map((industry) => (
                    <div
                      key={industry}
                      className={styles.option}
                      onClick={() => handleIndustrySelect(industry)}
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.subSelection}>
              <input
                type="text"
                placeholder="기획, 전략 - 마케팅"
                value={selectedSubIndustry}
                readOnly
                onClick={() => setShowSubIndustryList(!showSubIndustryList)}
              />
              {showSubIndustryList && selectedIndustry && (
                <div className={styles.optionList}>
                  {INDUSTRY_DATA[selectedIndustry]?.map((subIndustry) => (
                    <div
                      key={subIndustry}
                      className={styles.option}
                      onClick={() => handleSubIndustrySelect(subIndustry)}
                    >
                      {subIndustry}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className={styles.saveButton}>저장하기</button>
        </div>
      </section>

      {/* 지역 선택 섹션 */}
      <section className={styles.section}>
        <h2>어느 지역에서 근무하고 싶으신가요?</h2>
        <div className={styles.selectionBox}>
          <div className={styles.selectionGroup}>
            <div className={styles.mainSelection}>
              <input
                type="text"
                placeholder="지역별 선택"
                value={selectedLocation}
                readOnly
                onClick={() => setShowLocationList(!showLocationList)}
              />
              {showLocationList && (
                <div className={styles.optionList}>
                  {Object.keys(LOCATION_DATA).map((location) => (
                    <div
                      key={location}
                      className={styles.option}
                      onClick={() => handleLocationSelect(location)}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.subSelection}>
              <input
                type="text"
                placeholder="시/군/구"
                value={selectedSubLocation}
                readOnly
                onClick={() => setShowSubLocationList(!showSubLocationList)}
              />
              {showSubLocationList && selectedLocation && (
                <div className={styles.optionList}>
                  {LOCATION_DATA[selectedLocation]?.map((subLocation) => (
                    <div
                      key={subLocation}
                      className={styles.option}
                      onClick={() => handleSubLocationSelect(subLocation)}
                    >
                      {subLocation}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className={styles.saveButton}>저장하기</button>
        </div>
      </section>

      {/* 경력 선택 섹션 */}
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
        <button className={styles.saveButton}>저장하기</button>
      </section>
    </div>
  );
};

export default CareerInfo;
