import styles from "../styles/Resume.module.less";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import FileUpload from "../components/FileUpload.tsx";
import { useState, useEffect } from "react";
const ResumePage = () => {
  const [fileUpload, setFileUpload] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    return () => {
      if (selectedFile) {
        URL.revokeObjectURL(URL.createObjectURL(selectedFile));
      }
    };
  }, [selectedFile]);

  return (
    <div className={styles.container}>
      {fileUpload && (
        <FileUpload
          setFileUpload={setFileUpload}
          onFileSelect={handleFileSelect}
        />
      )}
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.headerBar}>
          <p>내 이력서</p>
          <div className={styles.btnContainer}>
            <button>수정하기</button>
          </div>
        </div>
        <div className={styles.resumeContainer}>
          <div className={styles.topContainer}>
            <div
              className={styles.imageContainer}
              onClick={() => setFileUpload(!fileUpload)}
            >
              {selectedFile ? (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="미리보기"
                  className={styles.previewImage}
                />
              ) : (
                <p>이미지를 추가해주세요</p>
              )}
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.itemBox1}>
                <div className={styles.item1}>성명</div>
                <div className={styles.item1}>주민등록번호</div>
                <div className={styles.item1}>주소</div>
                <div className={styles.item1}>이메일</div>
              </div>
              <div className={styles.itemBox2}>
                <div className={styles.item2}>
                  <input type="text" />
                </div>
                <div className={styles.item3}>
                  <div>
                    <input type="text" />
                  </div>
                  <div>생년월일</div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.item2}>
                  <input type="text" />
                </div>
                <div className={styles.item2}>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.middleContainer}>
            <div className={styles.middleItem}>
              <div className={styles.middleItem1}>학력사항</div>
              <div className={styles.middleItem2}>
                <div className={styles.middleItem2_1}>
                  <div>기간</div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.middleItem2_1}>
                  <div>학교명</div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.middleItem2_2}>
                  <div>학과 (전공)</div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.middleItem2_3}>
                  <div className={styles.middleItem2_3_1}>
                    <div>졸업 여부</div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                  <div className={styles.middleItem2_3_2}>
                    <div>학점</div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.bottomItem}>
              <div className={styles.bottomItem1}>경력사항</div>
              <div className={styles.bottomItem2}>
                <div className={styles.bottomItem2_1}>
                  <div>회사명</div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.bottomItem2_1}>
                  <div>근무 기간</div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.bottomItem2_2}>
                  <div>최종 직위</div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div className={styles.bottomItem2_3}>
                  <div className={styles.bottomItem2_3_1}>
                    <div>졸업 여부</div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
