interface Column {
  // 온보딩 페이지 자격증, 포트폴리오, 봉사 타입 정의
  title: string;
  key: string;
  width?: string;
}

interface IndustryData {
  [key: string]: string[]; // 문자열 키를 가지고 문자열 배열을 값으로 갖는 객체
}

interface LocationData {
  [key: string]: string[];
}
