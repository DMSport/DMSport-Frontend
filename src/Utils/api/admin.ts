import request from "../axios/axios";

export default {
  getUsers() {
    //유저정보 가져오기
    return request({
      url: `admin/users`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  changeClubAdmin(user_id: number, club_type: string) {
    //클럽장 변경
    return request({
      url: `admin/users/manager/${user_id}`,
      method: "patch",
      data: {
        club_type,
      },
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
