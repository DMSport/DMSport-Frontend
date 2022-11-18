import Swal from "sweetalert2";
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
    }).catch((res) => {
      if (res?.response.status === 401) {
        Swal.fire("로그인 에러", "로그인을 확인해주세요", "error").then(() => {
          window.location.href = "/";
        });
      }
    });
  },
};
