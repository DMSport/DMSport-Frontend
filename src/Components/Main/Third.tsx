import * as _ from "./main.style";

function Third() {
  return (
    <>
      <_.Img src={require("../../Assets/PNG/Main/Third.png")} />
      <_.Container>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <_.Text textColor="white">소식은 빠르고 정확해야 합니다.</_.Text>
          <_.Text textColor="#CCD6DD" style={{ marginTop: "30px" }}>
            부원들에게 빠르게 공지하세요.
          </_.Text>
        </div>
        <_.Text textColor="#72B5CA" style={{ marginTop: "108px" }}>
          시작하기
        </_.Text>
      </_.Container>
    </>
  );
}

export default Third;
