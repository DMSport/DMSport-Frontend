import styled from "styled-components";

export const Container = styled.div`
    display: fixed;
    margin: auto;
    margin-top: 120px;
    width: 380px;
    height: 504px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 380px;
    height: 504px;
    background: #FFFFFF;
    border-radius: 30px;
`

export const TitleText = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    margin-top: 55px;
    margin-bottom: 37px;
`

export const TextInput = styled.input`
    font-size: 16px;
    border: none;
    width: 274px;
    margin-top: 10px;
    padding: 15px 10px;
    border-bottom: 2px solid #ACACAC;
    outline: none;
    &:focus{
        border-bottom: 2px solid black;
    }
`

export const FYP = styled.div`
    margin-top: 60px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 14px;
    color: #D9D9D9;
`

export const Button = styled.button`
    width: 271.08px;
    height: 50.92px;
    border: none;
    background: #226699;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
    :disabled {
      background: #95B2C8;
    }
`

export const SignUpText = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #898A8D;
    margin-top: 13px;
`

export const Background = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
`