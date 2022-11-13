import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
/**
 * 사이드 컴포넌트 스타일
 */
export const SideContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: auto;
  width: 400px;
  gap: 25px;
  margin-top: 65px;
  overflow: scroll;
  padding: 30px;
`;
export const SideBtnWrapper = styled.div<{ isUserClick: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 236px;
  max-height: 400px;
  border: ${(props) => (props.isUserClick ? "1px solid #55acee" : "0")};
  border-radius: 30px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  padding: 20px;
  z-index: -1;
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

/**
 * 축구 컴포넌트 스타일
 */
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: calc(100vw - 274px);
  justify-content: center;
  align-items: center;
  z-index: -1;
  img {
    position: absolute;
    z-index: -1;
  }
  svg {
    position: absolute;
    z-index: 0;
  }
`;

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
