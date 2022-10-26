import * as _ from "./First.style";

function First() {
  return (
    <>
      <_.Img src={require("../../Assets/PNG/Main/firstImg.png")} alt="" />
      <_.Container>
        <_.TitleText>스포츠 관리 시스템</_.TitleText>
      </_.Container>
    </>
  );
}

export default First;
