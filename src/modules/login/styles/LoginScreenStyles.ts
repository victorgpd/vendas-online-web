import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: right;
`

export const BackgroundImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
`

export const LogoImage = styled.img`
    
`

export const ContainerLogin = styled.div `
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    padding: 22px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`