import { useSetRecoilState } from "recoil";
import { isNoticeAtom } from "../../Store/atoms";
import * as _ from "./Button.style";

interface IButton {
  num: number;
  color: boolean;
  message: string;
}

const Button = ({ num, color, message }: IButton) => {
  const setNoticeAtom = useSetRecoilState(isNoticeAtom);
  const toggleNoticeAtom = (num: number) => setNoticeAtom(num);

  return (
    <_.Container onClick={() => toggleNoticeAtom(num)} backcolor={color} type="button" value={message}></_.Container>
  );
};

export default Button;
