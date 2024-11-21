import styles from "../styles/Qualifications.module.less";

const Qualifications = ({
  companyName,
  hiringPeriodEndDate,
  companyImageURL,
}: qualificationsCompanyType) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img src={companyImageURL} />
      </div>
      <div className={styles.bottomContainer}>
        <div>
          <img src="/image/like.png" />
        </div>

        <p className={styles.name}>{companyName}</p>
      </div>
    </div>
  );
};

export default Qualifications;
