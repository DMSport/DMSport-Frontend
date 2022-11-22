import styled from "styled-components";

export const Display = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div<{ margin: boolean }>`
  position: absolute;
  margin-left: ${(props) => (props.margin ? 10 : 300)}px;
  transition: 0.5s;
  margin-top: 100px;
  width: 75vw;
  height: 630px;
`;

export const Img = styled.img`
  position: absolute;
  top: 3px;
  left: 10px;
`;

export const CardWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: 70px;
  width: 400px;
`;

export const FilterButton = styled.div<{ searchType: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => (props.searchType ? "white" : "#a3a3a3")};
  font-weight: 600;
  width: 110px;
  height: 30px;
  border: 1px solid #a3a3a3;
  border-radius: 10px;
  background-color: ${(props) => (props.searchType ? props.theme.SkyBlue : "white")};
  cursor: pointer;
`;

export const Input = styled.input`
  position: absolute;
  padding-left: 35px;
  color: #a3a3a3;
  font-size: 16px;
  width: 270px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #a3a3a3;
  outline: 0;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 40px;
  gap: 10px;
`;
