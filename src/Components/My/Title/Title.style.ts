import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
`;
export const Img = styled.img`
  margin: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const Font = styled.div<{ color: string }>`
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const Big = styled(Font)`
  font-size: 60px;
  font-weight: 800;
`;
