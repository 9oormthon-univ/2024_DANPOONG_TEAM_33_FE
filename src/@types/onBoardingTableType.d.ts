interface Column {
  // 온보딩 페이지 자격증, 포트폴리오, 봉사 타입 정의
  title: string;
  key: string;
  width?: string;
  type?: string; // 열의 타입을 지정
  selectionData?: Record<string, string[]>;
}

interface IndustryData {
  [key: string]: string[]; // 문자열 키를 가지고 문자열 배열을 값으로 갖는 객체
}

interface LocationData {
  [key: string]: string[];
}

interface CareerData {
  [key: string]: string[];
}

interface CommonTableProps {
  title: string;
  description: string;
  columns: Column[];
  rowCount: number;
  onInputChange: (rowIndex: number, columnKey: string, value: string) => void;
  // fileInfos: { [key: string]: FileList };
  // setFileInfos: React.Dispatch<React.SetStateAction<{ [key: number]: File }>>;
  onFileChange?: (files: { [key: number]: File }) => void;
  handleFileUpload: () => void;
}
