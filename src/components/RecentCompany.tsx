import styles from "../styles/RecentCompany.module.less";

const RecentCompany = ({ recentCompanyList }: { recentCompanyList: any[] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>최근 채용 공고 기업</h2>
        <a href="/more" className={styles.more}>
          더보기 &gt;
        </a>
      </div>
      <div className={styles.grid}>
        {recentCompanyList.map((company, index) => (
          <div key={index} className={styles.card}>
            <h3>{company.companyName}</h3>
            <ul>
              {company.certificationsEssential.map(
                (cert: string, idx: number) => (
                  <li key={idx} className={styles.certItem}>
                    <span className={styles.certName}>{cert}</span>
                    <span
                      className={`${styles.dot} ${
                        company.certificationsEssentialUserHave?.includes(cert)
                          ? styles.activeDot
                          : styles.inactiveDot
                      }`}
                    ></span>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCompany;
