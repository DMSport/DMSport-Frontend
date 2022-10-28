import * as _ from "../First.style";

function First() {
  return (
    <>
      <_.Img src={require("../../Assets/PNG/Main/firstImg.png")} alt="" />
      <_.Container>
        <_.Text textColor="#FFFFFF">스포츠 관리 시스템</_.Text>
        <_.Text textColor="#80CCE3">
          DM<_.Text textColor="#95C1CE">Sport</_.Text>
        </_.Text>
      </_.Container>
    </>
  );
}

export default First;
