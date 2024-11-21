import CustomAxios from "../api/CustomAxios.ts";

export const getQualificationsCompany = async () => {
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
