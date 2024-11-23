import styles from "../styles/FileUpload.module.less";
import { useState } from "react";

const FileUpload = ({ setFileUpload, onFileSelect }: FileUploadProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);

      setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
      onFileSelect(files[0]);
    }
  };

  return (
    <div>
      <div className={styles.container}></div>
      <div className={styles.FileUpload}>
        <div className={styles.topContainer}>
          <p>첨부파일</p>
          <button onClick={() => setFileUpload(false)}>
            <img src="/image/close.png" />
          </button>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.uploadContainer}>
            <div className={styles.infoBox}>
              <img src="/image/fileUpload.png" />
              <p>파일을 첨부해주세요!</p>
            </div>
          </div>
          <div className={styles.fileContainer}>
            <div className={styles.left}>URL</div>
            <div className={styles.right}>
              {uploadedFiles.map((file, index) => (
                <p key={index}>{file.name}</p>
              ))}
            </div>
            <div className={styles.fileBtn}>
              <input
                id="fileUpload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
              <label htmlFor="fileUpload">파일첨부</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
