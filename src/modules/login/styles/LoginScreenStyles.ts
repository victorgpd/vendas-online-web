import styled from "styled-components";
import { Typography } from 'antd';

const { Title } = Typography;

export const MainContainer = styled.main`
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
    z-index: 0;
`

export const ContainerLogin = styled.div `
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
    padding: 22px;
    z-index: 1;
    
    flex: 0 1 auto;
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
    
export const TitleLogin = styled(Title)`
    font-weight: 500;
    margin: 8px;
`