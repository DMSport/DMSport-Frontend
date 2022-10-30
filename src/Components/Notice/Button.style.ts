import styled from "styled-components";

export const Container = styled.input<{ backcolor: boolean }>`
  top: 100px;
  width: 180px;
  height: 60px;
  border: 0;
  outline: 0;
  background-color: ${(props) => (props.backcolor ? "#5596aa" : "#ffffff")};
  color: ${(props) => (props.backcolor ? "#ffffff" : "black")};
  border-radius: 25px;
  font-size: 24px;
  font-weight: bold;
  filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`;
