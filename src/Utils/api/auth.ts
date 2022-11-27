import request from "../axios/axios";

export default {
  refreshToken() {
    return request({
      url: `/users/refresh`,
      method: "get",
      headers: {
        "refresh-token": `Bearer ${localStorage.refreshToken}`,
      },
    });
  },
};
