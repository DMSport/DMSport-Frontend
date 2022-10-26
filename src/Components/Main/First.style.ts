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
export const TitleText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: white;
`;
export const Img = styled.img`
  position: absolute;
  max-height: 100%;
  max-width: 100%;
`;
export const Text = styled.span<{textColor: string}>`
    color: ${props => props.}
`
