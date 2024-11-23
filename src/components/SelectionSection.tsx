import React, { useState } from "react";
import styles from "../styles/SelectionSection.module.less";

interface SelectionSectionProps {
  title: string;
  mainPlaceholder: string;
  subPlaceholder: string;
  data: Record<string, string[]>;
  onMainSelect: (value: string) => void;
  onSubSelect: (value: string) => void;
}

const SelectionSection: React.FC<SelectionSectionProps> = ({
  title,
  mainPlaceholder,
  subPlaceholder,
  data,
  onMainSelect,
  onSubSelect,
}) => {
  const [selectedMain, setSelectedMain] = useState("");
  const [selectedSub, setSelectedSub] = useState("");
  const [showMainList, setShowMainList] = useState(false);
  const [showSubList, setShowSubList] = useState(false);

  const handleMainSelect = (value: string) => {
    setSelectedMain(value);
    setSelectedSub("");
    setShowMainList(false);
    setShowSubList(true);
    onMainSelect(value);
  };

  const handleSubSelect = (value: string) => {
    setSelectedSub(value);
    setShowSubList(false);
    onSubSelect(value);
  };

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.selectionBox}>
        <div className={styles.selectionGroup}>
          <div className={styles.mainSelection}>
            <input
              type="text"
              placeholder={mainPlaceholder}
              value={selectedMain}
              readOnly
              onClick={() => setShowMainList(!showMainList)}
            />
            {showMainList && (
              <div className={styles.optionList}>
                {Object.keys(data).map((key) => (
                  <div
                    key={key}
                    className={styles.option}
                    onClick={() => handleMainSelect(key)}
                  >
                    {key}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.subSelection}>
            <input
              type="text"
              placeholder={subPlaceholder}
              value={selectedSub}
              readOnly
              onClick={() => setShowSubList(!showSubList)}
            />
            {showSubList && selectedMain && (
              <div className={styles.optionList}>
                {data[selectedMain]?.map((sub) => (
                  <div
                    key={sub}
                    className={styles.option}
                    onClick={() => handleSubSelect(sub)}
                  >
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;
