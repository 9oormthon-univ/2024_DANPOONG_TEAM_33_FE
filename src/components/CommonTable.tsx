import React from "react";
import styles from "../styles/CommonTable.module.less";
import { useState } from "react";
import FileUpload from "./FileUpload";

const CommonTable: React.FC<CommonTableProps> = ({
  title,
  description,
  columns,
  rowCount,
  onInputChange,
  onFileChange,
  handleFileUpload,
}) => {
  const [fileUpload, setFileUpload] = useState<boolean>(false);
  const [currentRowIndex, setCurrentRowIndex] = useState<number | null>(null);
  const [fileInfos, setFileInfos] = useState<{ [key: number]: File }>({});

  const handleFileSelect = (file: File) => {
    if (currentRowIndex !== null) {
      const newFileInfos = {
        ...fileInfos,
        [currentRowIndex]: file,
      };
      setFileInfos(newFileInfos);
      onFileChange?.(newFileInfos);
    }
    setFileUpload(false);
  };
  const renderInput = (column: any, rowIndex: number, onInputChange: any) => {
    switch (column.type) {
      case "fileName":
        return (
          <div className={styles.fileContainer}>
            {fileInfos[rowIndex] ? (
              <span className={styles.fileName}>
                {fileInfos[rowIndex].name}
              </span>
            ) : null}
          </div>
        );
      case "fileButton":
        return (
          <div className={styles.fileBtnContainer}>
            <button
              className={styles.fileButton}
              onClick={() => {
                setCurrentRowIndex(rowIndex);
                setFileUpload(true);
              }}
            >
              파일 업로드
            </button>
          </div>
        );
      case "text":
        return (
          <input
            type="text"
            onChange={(e) =>
              onInputChange(rowIndex, column.key, e.target.value)
            }
          />
        );
      default:
        return <div></div>;
    }
  };
  return (
    <div className={styles.tableContainer}>
      {fileUpload && (
        <FileUpload
          setFileUpload={setFileUpload}
          onFileSelect={handleFileSelect}
        />
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} style={{ width: column.width }}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(rowCount)
              .fill(null)
              .map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column) => (
                    <td key={`${rowIndex}-${column.key}`}>
                      {renderInput(column, rowIndex, onInputChange)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.submitButton}
          onClick={() => handleFileUpload()}
        >
          파일저장
        </button>
      </div>
    </div>
  );
};

export default CommonTable;
