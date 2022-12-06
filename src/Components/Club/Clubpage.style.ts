import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
/**
 * 사이드 컴포넌트 스타일
 */
export const SideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  margin-top: 65px;
  overflow-x: scroll;
  padding-left: 15rem;
  padding-right: 15rem;
  z-index: 2;
  div {
    display: flex;
    gap: 22px;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 45px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  background-color: #beefff;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`;
export const SideBtnWrapper = styled.div<{ isUserClick: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 148px;
  height: 92px;
  border: ${(props) => (props.isUserClick ? "1px solid #55acee" : "0")};
  border-radius: 30px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 2;
  div {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
`;
export const SideBtnColorStick = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 25px;
  background: #80cce3;
  border-radius: 60px 0px 0px 60px;
`;
export const SideBtnGrayStick = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 25px;
  background: "white";
  border-radius: 60px;
`;
export const Text = styled.p<{
  size: number;
  color?: string;
  weight?: number;
  height?: number;
  width?: number;
}>`
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => props.weight};
  height: ${(props) => props.height}px;
  font-size: ${(props) => props.size}px;
  width: ${(props) => props.width}px;
`;

export const ToggleBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  z-index: 2;
  width: 176px;
  height: 60px;
  background-color: white;
  border-radius: 60px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  svg {
    margin: 25px;
  }
`;
export const ToggleBtn = styled.div<{ isNight: string }>`
  position: absolute;
  width: 88px;
  height: 60px;
  background-color: #575757;
  transform: ${(props) => (props.isNight === "DINNER" ? "translate(88px)" : "translate(0)")};
  border-radius: ${(props) => (props.isNight === "DINNER" ? "0 60px 60px 0" : "60px 0 0 60px")};
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    z-index: -1;
    top: calc(50% + 100px);
    left: 50%;
    transform: translate(-50%, -50%);
  }
  svg {
    position: absolute;
    z-index: 0;
  }
`;
export const IsNone = styled.div`
  position: absolute;
  bottom: 35px;
  height: 70vh;
  width: 71vw;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;
export const IsNoneText = styled(Text)`
  z-index: 2;
  position: absolute;
  top: 60%;
`;
export const PositionModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 35%;
  background-color: white;
  width: 350px;
  height: 500px;
  border-radius: 20px;
  padding: 20px;
  z-index: 2;
  overflow-y: scroll;
`;
export const PositionWrapper = styled.div`
  display: flex;
  width: auto;
  min-height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  line-height: 40px;
  border-radius: 20px;
  justify-content: space-between;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
`;
export const SubmitBtn = styled.button`
  border-radius: 90px;
  background-color: #80cce3;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  font-weight: 700;
`;
/**
 * 배드민턴 새로운 버전 스타일
 */
export const BadmintonSpotContainer = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 200px;
  row-gap: 15px;
  position: relative;
`;
export const BadmintonSpotWrapper = styled.div`
  display: grid;
  grid-template-columns: 25px 50px;
  column-gap: 100px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  width: 300px;
  height: 150px;
  position: relative;
`;
export const BadmintonSpotBtn = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bgColor};
  border-radius: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;
