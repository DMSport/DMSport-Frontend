import Swal from "sweetalert2";
import request from "../axios/axios";

export default {
  getNoticeAll() {
    //전체공지 가져오기
    return request({
      url: `notices`,
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
  getNoticeDetail(id: number) {
    //공지 상세
    if (id === 0) return null;
    return request({
      url: `notices/${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  postClubNotice(title: string, content: string) {
    return request({
      url: `notices/club`,
      method: "post",
      data: {
        title,
        content,
      },
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  editClubNotice(title: string, content: string, id: number) {
    return request({
      url: `notices/${id}`,
      method: "patch",
      data: {
        title,
        content,
      },
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  deleteClubNotice(id: number) {
    return request({
      url: `notices/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
  postAdminNotice(title: string, content: string, noticeType: string) {
    return request({
      url: `notices/admin?type=${noticeType}`,
      method: "post",
      data: {
        title,
        content,
      },
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  },
};
