import { useSetRecoilState } from "recoil";
import { NoticeTypeAtom } from "../../Store/atoms";
import ClubType from "../../Utils/ClubType";
import * as _ from "./Button.style";

interface IButton {
  isSelected: boolean;
  message: string;
}

const Button = ({ isSelected, message }: IButton) => {
  const setNoticeTypeAtom = useSetRecoilState(NoticeTypeAtom);
  const toggleNoticeAtom = (notice: any) => setNoticeTypeAtom(notice);

  return (
    <_.Container
      onClick={() => toggleNoticeAtom(ClubType(message))}
      backcolor={isSelected}
      type="button"
      value={message}
    ></_.Container>
  );
};

export default Button;
