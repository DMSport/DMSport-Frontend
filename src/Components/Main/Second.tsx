import * as _ from "./main.style";

function Second() {
  return (
    <>
      <_.Img src={require("../../Assets/PNG/second.png")} alt="" />
      <_.SecondContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <_.Text textColor="white" style={{ marginBottom: "22px" }}>
            스포츠 일정을 관리하고 자동화하세요.
          </_.Text>
          <_.Text textColor="#CCD6DD">
            DMSport를 이용하면 손쉽게 관리할 수 있습니다.
          </_.Text>
        </div>
      </_.SecondContainer>
    </>
  );
}

export default Second;
