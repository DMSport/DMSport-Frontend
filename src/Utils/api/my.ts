import request from "../axios/axios";

export default {
  getMyInfo() {
    //내정보 가져오기
    return request({
      url: `users/my`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
