import styled from "styled-components";

export const Container = styled.div<{ margin: boolean }>`
    margin-left: ${(props) => (props.margin ? 0 : 250)}px;
    transition: 0.5s;
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 892px;
    align-items: center;
    padding: 170px 0px 100px 0px;
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 80%;
    margin: 20px 0px 20px 0px;
`

export const Text = styled.div`
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 200%;
`

export const BtnWrapper = styled.div`
display: flex;
flex-direction: column;
position: absolute;
margin-left: 66%;
margin-top: 5%;
width: 11%;
height: 50%;
justify-content: center;
align-items: center;
`

export const TimeInput = styled.input`
    height: 25%;
    width: 99%;
    padding: 10px;
    border: 0px solid;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    ::before {
        content: attr(data-placeholder);
        width: 100%;
        cursor: pointer;
    }
    :focus::before,
    :valid::before {
        display: none;
    }
    ::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
`

export const BanBtn = styled.button`
    background: #EA1717;
    border-radius: 10px;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 130%;
    color: white;
    margin-top: 10px;
    :disabled {
        background-color: #ff8d8d;
        color: white;
    }
`