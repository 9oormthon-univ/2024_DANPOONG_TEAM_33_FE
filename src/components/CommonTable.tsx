import React from "react";
import styles from "../styles/CommonTable.module.less";

interface CommonTableProps {
  title: string;
  description: string;
  columns: Column[];
  rowCount: number;
  onInputChange: (rowIndex: number, columnKey: string, value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const CommonTable: React.FC<CommonTableProps> = ({
  title,
  description,
  columns,
  rowCount,
  onInputChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className={styles.tableContainer}>
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
                      <input
                        type="text"
                        onChange={(e) =>
                          onInputChange(rowIndex, column.key, e.target.value)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton} onClick={onCancel}>
          건너뛰기
        </button>
        <button className={styles.submitButton} onClick={onSubmit}>
          등록하기
        </button>
      </div>
    </div>
  );
};

export default CommonTable;
