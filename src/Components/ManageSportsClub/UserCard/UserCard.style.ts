import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: scroll;
  width: 165px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid #80cce3;
  background-color: white;
  cursor: pointer;
`;

export const Name = styled.div`
  position: absolute;
  font-size: 17px;
  font-weight: 700;
  left: 20px;
  top: 100px;
`;

export const Authority = styled.div`
  position: absolute;
  font-size: 15px;
  font-weight: 700;
  color: #8f8f8f;
  margin-left: 20px;
  top: 120px;
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 11px;
  bottom: 20px;
`;

export const DMS = styled.div`
  font-weight: 700;
  font-size: 23px;
  color: #80cce3;
`;

export const Port = styled(DMS)`
  color: #5596aa;
  font-family: "ItalicBold";
  font-weight: 500;
`;
