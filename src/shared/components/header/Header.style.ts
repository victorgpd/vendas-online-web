import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 15px 0;
    background-color: #001529;

    position: relative;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    -webkit-box-shadow: -2px 4px 4px 0px rgba(0,0,0, 0.47);
    -moz-box-shadow: -2px 4px 4px 0px rgba(0,0,0, 0.47);
    box-shadow: -2px 4px 4px 0px rgba(0,0,0, 0.47);

    @media screen and (min-width: 821px) {
        justify-content: flex-end;
    }
`

export const MenuHamburguer = styled(MenuOutlined)`
    display: none;
    width: 35px;
    height: 35px;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    color: white;

    &:hover {
        background-color: #1677ff;
        transition: all .4s;
    }

    @media screen and (max-width: 820px) {
        display: inline-flex;
        justify-content: center;
    }
`

export const LogoutButton = styled(LogoutOutlined)`
    display: inline-flex;
    justify-content: center;
    width: 35px;
    height: 35px;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 5px;
    color: white;

    &:hover {
        background-color: #1677ff;
        transition: all .4s;
    }
`