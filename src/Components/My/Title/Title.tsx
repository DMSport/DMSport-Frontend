import Daema from "../../../Assets/SVG/Daema.svg";
import * as _ from "../Title/Title.style";

const Title = () => {
  return (
    <_.Container>
      <_.Wrapper>
        <_.Font color="#1F8E45">대마</_.Font>
        <_.Font color="#226699">의 자랑</_.Font>
        <_.Img src={Daema} />
      </_.Wrapper>
      <_.Big color="#80CCE3">CUTTIE DMS</_.Big>
    </_.Container>
  );
};

export default Title;
