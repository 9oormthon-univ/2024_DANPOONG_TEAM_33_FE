import styles from "../styles/Chart.module.less";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "자격증",
      value: 4,
    },
    {
      name: "성적",
      value: 4.5,
    },
    {
      name: "봉사시간",
      value: 60,
    },
  ];

  const COLORS = ["#4781ff", "#1ba93a", "#f06c00"];

  const renderCenterText = () => {
    return (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        일트
      </text>
    );
  };

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
          {renderCenterText()}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
