import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CompanyPieChart.module.less";

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface CompanyData {
  companyName: string;
  chartData: PieChartData[];
}

interface CompanyPieChartProps {
  companies: CompanyData[];
}

const CompanyPieChart = ({ companies }: CompanyPieChartProps) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <div className={styles.chartContainer}>
      <Slider {...sliderSettings}>
        {companies.map((company, index) => (
          <div key={`${company.companyName}-${index}`}>
            <div className={styles.slideContent}>
              <h3>{company.companyName}</h3>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={company.chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {company.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className={styles.legend}>
                {company.chartData.map((item, index) => (
                  <div key={`legend-${index}`} className={styles.legendItem}>
                    <span
                      className={styles.colorBox}
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                    <span>{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyPieChart;
