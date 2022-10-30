import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isNoticeModalAtom } from "../../Utils/atoms";
import * as _ from "./NoticeModal.style";

function NoticeModal() {
  const setNoticeModalAtom = useSetRecoilState(isNoticeModalAtom);
  const toggleNoticeModalAtom = () => {
    setNoticeModalAtom((prev) => !prev);
  };

  //모달 창이 열렸을 때 스크롤을 막는 코드
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <_.Container>
      <_.Background onClick={toggleNoticeModalAtom} />
      <_.White>
        <_.Wrapper>
          <_.Title>제목</_.Title>
          <_.Time>1시간전</_.Time>
        </_.Wrapper>
        <_.Notice>오늘은 동아리가 없어요</_.Notice>
      </_.White>
    </_.Container>
  );
}

export default NoticeModal;
