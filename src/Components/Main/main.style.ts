import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
export const Text = styled.span<{ textColor: string }>`
  color: ${(props) => props.textColor};
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  z-index: -1;
`;

export const SecondContainer = styled(Container)`
  align-items: flex-start;
  padding: 196px;
`;
