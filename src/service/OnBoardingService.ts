import CustomAxios from "../api/CustomAxios.ts";

export const getTargetCompany = async (
  searchText: string
): Promise<{ success: boolean; data?: any }> => {
  try {
    const response = await CustomAxios.get(
      `/spring/company/search/${searchText}`
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const saveOnBoardingData = async (onBoardingData: {
  industryCategory: string;
  subIndustry: string;
  region: string;
  subRegion: string;
  career: string;
  targetCompanies: string[];
}) => {
  try {
    const response = await CustomAxios.post(
      "/spring/user-preference/onboarding",
      onBoardingData
    );
    if (response.status === 200) {
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
export const uploadPortfolioFiles = async (
  formData: FormData
): Promise<{ success: boolean; data?: any }> => {
  try {
    const response = await CustomAxios.post("/spring/portfolio/add", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      return { success: true, data: response.data };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const uploadVolunteeringFiles = async (
  formData: FormData
): Promise<{ success: boolean; data?: any }> => {
  try {
    const response = await CustomAxios.post(
      "/spring/volunteering/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      return { success: true, data: response.data };
    }
    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
