import React from "react";
import styles from "./BarChart.module.less";

interface BarChartProps {
  title: string;
  status: string;
  color: string;
  data: {
    other: number;
    me: number;
  };
}

const BarChart: React.FC<BarChartProps> = ({ title, status, color, data }) => {
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.status}>
        {title} <span style={{ color: color }}>{status}</span>
      </div>
      <div className={styles.bar}>
        <div className={styles.barTitle}>{title}</div>
        <div className={styles.barGraph}>
          <div
            className={styles.other}
            style={{ height: `${data.other}%` }}
          ></div>
          <div
            className={styles.me}
            style={{ height: `${data.me}%`, backgroundColor: color }}
          ></div>
        </div>
        <div className={styles.barLabel}>Other Me</div>
      </div>
    </div>
  );
};

export default BarChart;
