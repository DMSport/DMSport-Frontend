import { useSetRecoilState } from "recoil";
import { Logo } from "../../../Assets/SVG/Logo";
import { isNoticeModalAtom, UserAtom } from "../../../Store/atoms";
import { IUser } from "../studentsearch/StudentSearch";
import * as _ from "./UserCard.style";

const UserCard = ({ name, authority, id }: IUser) => {
  const auth = authority.split("_");
  const setNoticeModal = useSetRecoilState(isNoticeModalAtom);
  const setUserAtom = useSetRecoilState(UserAtom);

  const setModal = () => {
    setNoticeModal(true);
    setUserAtom({ name, authority: auth[0], user_id: id });
  };

  return (
    <_.Container onClick={setModal}>
      <_.Name>{name}</_.Name>
      <_.Authority>{`${auth[0]}\n${auth[1] ?? ""}`}</_.Authority>
      <_.Wrapper>
        <Logo width={40} height={32}></Logo>
        <_.DMS>DMS</_.DMS>
        <_.Port>port</_.Port>
      </_.Wrapper>
    </_.Container>
  );
};

export default UserCard;
