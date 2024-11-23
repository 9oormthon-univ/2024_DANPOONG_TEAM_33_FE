import CustomAxios from "../api/CustomAxios.ts";
import { useAuthStore } from "../store/auth/AuthStore.ts";

export const getKaKaoLoginURL = () => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
};

export const getToken = async (
  authCode: string
): Promise<{ success: boolean }> => {
  try {
    const response = await CustomAxios.get(
      `/spring/oauth2/login/kakao?code=${authCode}`
    );

    if (response.status === 200) {
      console.log(response);
      const accessToken = response.data.result.Access;
      const refreshToken = response.data.result.Refresh;
      console.log("액세스 토큰", accessToken, "리프레쉬토큰", refreshToken);
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);

      return { success: true };
    }

    return { success: false };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const getUserInfo = async (): Promise<{ success: boolean }> => {
  try {
    const response = await CustomAxios.get("/spring/users/info");

    if (response.status === 200) {
      const userData = response.data.result;
      console.log("사용자 정보", userData);

      useAuthStore.setState((state) => ({
        ...state,
        user: {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          profileImage: userData.profileImageUrl,
        },
        isAuthenticated: true,
      }));

      return { success: true };
    }

    return { success: false };
  } catch (error) {
    console.error("사용자 정보 조회 실패:", error);
    return { success: false };
  }
};
