import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { isNoticeModalAtom } from "../../Store/atoms";
import * as _ from "./UserListModal.style";

const UserListModal = ({ list }: any) => {
  const setIsNoticeModal = useSetRecoilState(isNoticeModalAtom);

  const EventBubbling = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <_.Container onClick={() => setIsNoticeModal(false)}>
      <_.Background onClick={EventBubbling}>
        <_.Title>신청자 목록</_.Title>
        {list[0].is_complete ? (
          <div>
            <_.Team>1팀</_.Team>
            <_.Lists>
              {list[0].vote_user
                ?.filter((res: { name: string; team: number }) => res.team === 0 && res)
                ?.map((res: { name: string; team: number }) => {
                  <_.List>{res.name}</_.List>;
                })}
            </_.Lists>
            <_.Team>2팀</_.Team>
            {list[0].vote_user
              ?.filter((res: { name: string; team: number }) => res.team === 1 && res)
              ?.map((res: { name: string; team: number }) => {
                return <_.List>{res.name}</_.List>;
              })}
          </div>
        ) : (
          <_.Lists style={{ marginTop: 100 }}>
            {list[0].vote_user.map((res: { name: string; team: string }) => {
              return <_.List>{res.name}</_.List>;
            })}
          </_.Lists>
        )}
      </_.Background>
    </_.Container>
  );
};

export default UserListModal;
