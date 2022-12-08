import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

export const Background = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.Base};
  border-radius: 20px;
`;

export const Title = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 30px;
  font-weight: 600;
  color: #888888;
`;

export const Team = styled(Title)`
  position: static;
  &:first-child {
    margin-top: 80px;
    margin-bottom: 10px;
  }
`;

export const Lists = styled.div`
  width: 400px;
  min-height: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const List = styled.div`
  width: 100px;
  height: 30px;
  color: #888888;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;
