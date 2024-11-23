import CustomAxios from "../api/CustomAxios.ts";

export const getQualificationsCompany = async () => {
  //로그인 전 랜덤 데이터
  // 맞춤 자격증 api
  try {
    const response = await CustomAxios.get(
      "/flask/company/list/certification/page/main"
    );
    if (response.status === 200) {
      console.log(response.data);
      console.log(response.data.search_certification);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTryCompanyList = async (
  // 로그인 후 try 데이터
  value: string
): Promise<{ success: boolean; data?: any }> => {
  try {
    const response = await CustomAxios.get(
      `/flask/company/list/try/page/${value}`
    );
    if (response.status === 200) {
      console.log(response.data);
      return { success: true, data: response.data };
    }
    return { success: false };
  } catch (error) {
    console.log("기업정보 호출 실패", error);
    return { success: false };
  }
};

export const getRecentCompanyList = async (): Promise<{
  success: boolean;
  data?: any;
}> => {
  try {
    const response = await CustomAxios.get(
      "/flask/company/list/recent/page/main"
    );
    if (response.status === 200) {
      console.log(response.data);
      return { success: true, data: response.data };
    }
    return { success: false };
  } catch (error) {
    console.log("최근 기업 데이터 호출 실패", error);
    return { success: false };
  }
};

export const getApplyCompany = async (
  infoNo: number
): Promise<{
  success: boolean;
  data?: any;
}> => {
  try {
    const response = await CustomAxios.get(
      `/flask/company/apply/page/1?infoNo=${infoNo}`
    );
    if (response.status === 200) {
      console.log(response.data);
      return { success: true, data: response.data };
    }
    return { success: false };
  } catch (error) {
    console.log("기업 상세 정보 호출 실패", error);
    return { success: false };
  }
};
