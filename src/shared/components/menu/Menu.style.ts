import styled from "styled-components";
import SVGLogo from "../icons/SVGHome";
import { Typography } from "antd";

const { Text } = Typography

interface ContainerMenuProps {
    background: string
}

export const ContainerMenu = styled.div<ContainerMenuProps>`
    gap: 15px;
    display: flex;
    flex-flow: column;
    align-items: flex-end;

    position: absolute;
    top: 70px;
    left: 0;

    width: 240px;
    height: 100vh;
    background-color: ${(props) => props.background};
    z-index: 999;

    -webkit-box-shadow: 1px 0px 8px 0px rgba(0,0,0, 0.71);
    -moz-box-shadow: 1px 0px 8px 0px rgba(0,0,0, 0.71);
    box-shadow: 1px 0px 8px 0px rgba(0,0,0, 0.71);

    @media screen and (min-width: 820px) {
        top: 0;
        left: 0;
    }
`

export const LogoMenu = styled(SVGLogo)`
    flex: 0 0 auto;

    width: 50px;
    height: 50px;
`

export const NameCompany = styled(Text)`
    color: white;
    font-size: 18px;
`


export const ContainerCompany = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 14px;
    background-color: #001529;
    z-index: 999;

    gap: 8px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    -webkit-box-shadow: 1px 6px 4px 0px rgba(0,0,0, 0.47);
    -moz-box-shadow: 1px 6px 4px 0px rgba(0,0,0, 0.47);
    box-shadow: 1px 6px 4px 0px rgba(0,0,0, 0.47);
`