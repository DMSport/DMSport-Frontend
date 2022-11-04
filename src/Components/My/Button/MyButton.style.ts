import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 70px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #c7edf9;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 40px;
  margin-left: 15%;
`;

export const Name = styled.div<{ color: string }>`
  margin-left: 40px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const Arrow = styled.div<{ color: string }>`
  position: absolute;
  right: 40px;
  font-size: 30px;
  color: ${(props) => props.color};
`;
