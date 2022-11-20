import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { Logo } from "../../../Assets/SVG/Logo";
import { isNoticeModalAtom, UserAtom } from "../../../Store/atoms";
import api from "../../../Utils/api/admin";
import ToastError from "../../../Utils/Function/ErrorMessage";
import * as _ from "./UserModal.style";

type ClubType = "BASKETBALL" | "SOCCER" | "VOLLEYBALL" | "BADMINTON";

const UserModal = () => {
  const setIsNoticeModal = useSetRecoilState(isNoticeModalAtom);
  const userInfo = useRecoilValue(UserAtom);
  const [flip, setFlip] = useState<boolean>(false);
  const type: ClubType[] = ["BASKETBALL", "SOCCER", "VOLLEYBALL", "BADMINTON"];

  const EventBubbling = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const Flip = (event: React.MouseEvent<HTMLElement>) => {
    setFlip((prev) => !prev);
    EventBubbling(event);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const ChangeAuth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    api
      .changeClubAdmin(userInfo.user_id, e.currentTarget.value)
      .then(() => {
        Swal.fire("", "권한이 수정되었습니다", "success");
        setIsNoticeModal((prev) => !prev);
      })
      .catch((err) => {
        switch (err.response.data.status) {
          case 400:
            return ToastError("제목 혹은 내용을 확인해주세요");
          case 403:
            return ToastError("권한이 없어요");
          default:
            return ToastError("오류");
        }
      });
  };

  return (
    <_.Container onClick={() => setIsNoticeModal(false)}>
      <_.Front flip={flip} onClick={Flip}>
        <_.FrontWrapper onClick={EventBubbling}>
          <Logo width={70} height={50}></Logo>
          <_.DMS>DMS</_.DMS>
          <_.Port>port</_.Port>
        </_.FrontWrapper>
        <_.Text>카드를 클릭해주세요</_.Text>
      </_.Front>
      <_.Back flip={flip} onClick={Flip}>
        <_.Name onClick={EventBubbling}>{userInfo?.name}</_.Name>
        <_.Select onChange={ChangeAuth} onClick={EventBubbling}>
          <option>{userInfo.authority}</option>
          {type
            ?.filter((props) => props !== userInfo.authority && props)
            .map((res, i) => {
              return <option key={i}>{res}</option>;
            })}
        </_.Select>
        <_.Wrapper onClick={EventBubbling}>
          <Logo width={70} height={50}></Logo>
          <_.DMS>DMS</_.DMS>
          <_.Port>port</_.Port>
        </_.Wrapper>
      </_.Back>
    </_.Container>
  );
};

export default UserModal;
