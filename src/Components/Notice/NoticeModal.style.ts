import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
`;

//모달 앞부분 중앙
export const White = styled.div`
  position: fixed;
  width: 930px;
  height: 450px;
  background-color: ${(props) => props.theme.white};
  z-index: 101;
  overflow-y: scroll;
  white-space: pre-wrap;
`;

//모달 뒷부분 검은색
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

//제목과 남은 시간을 같은 줄에 위치하도록 사용
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  margin-top: 10px;
  margin-left: 70px;
  border-bottom: 1px solid;
`;

//제목
export const Title = styled.input`
  width: 400px;
  font-size: 24px;
  font-weight: 700;
  border: 0;
  outline: 0;
`;

//시간
export const Time = styled.input`
  position: absolute;
  right: 30px;
  font-size: 20px;
  font-weight: 400;
  text-align: right;
  border: 0;
  outline: 0;
`;

export const Notice = styled.textarea`
  width: 700px;
  height: 200px;
  margin-left: 70px;
  margin-top: 30px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  border: 0;
  outline: 0;
  resize: none;
`;

export const Button = styled.input<{ color: string }>`
  position: absolute;
  left: 50%;
  bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 110px;
  height: 40px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.color};
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  outline: 0;
`;

export const EditButton = styled(Button)`
  left: 400px;
`;

export const DeleteButton = styled(Button)`
  left: 530px;
`;

export const Select = styled.select`
  position: absolute;
  right: 30px;
  width: 130px;
  height: 40px;
  background: url("https://freepikpsd.com/media/2019/10/down-arrow-icon-png-7-Transparent-Images.png") calc(100% - 5px)
    center no-repeat;
  background-size: 20px;
  padding: 5px 30px 5px 10px;
  border-radius: 4px;
  outline: 0 none;
`;
