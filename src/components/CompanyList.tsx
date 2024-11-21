import styles from "../styles/CompanyList.module.less";

const CompanyList = ({ name, end_date }: companyListType) => {
  return (
    <div className={styles.container}>
      <div className={styles.companyName}>
        <p>{name}</p>
      </div>
      <div className={styles.companyInformation}>
        <p>
          채용 기간:&nbsp;<span>{end_date}</span>
        </p>
        <p>채용 인원</p>
      </div>
      <div className={styles.btnContainer}>
        <button>지원하기</button>
      </div>
    </div>
  );
};

export default CompanyList;
