import axios, { AxiosError, AxiosRequestConfig } from "axios";
import moment from "moment";
import { Cookies } from "react-cookie";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const cookies = new Cookies();
  const refreshToken = cookies.get("refresh_token");
  const expireAt = localStorage.getItem("expiresAt");
  let token = localStorage.getItem("access_token");

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (moment(expireAt).diff(moment()) < 0 && refreshToken) {
    // 토큰 갱신 서버통신
    const { data } = await axios({
      method: "PUT",
      url: process.env.REACT_APP_BASE_URL + "users/auth",
      headers: {
        "X-Refresh-Token": `${refreshToken}`,
      },
    });
    token = data.access_token;
    localStorage.setItem("access_token", data.access_token);
    cookies.set("refresh_token", data.refresh_token);
    localStorage.setItem("expiresAt", data.expired_at);
  }

  config.headers!.Authorization = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (err: AxiosError) => {
  const cookies = new Cookies();
  cookies.remove("refresh_token");
};

export { refresh, refreshErrorHandle };
