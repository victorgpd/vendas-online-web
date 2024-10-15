import styled from "styled-components";

export const ContainerTooltip = styled.div`
    position: relative;


    &:hover {
        div {
            display: block;
        }
    }
`

export const ContainerExternal = styled.div`
    display: none;
    padding: 4px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.4);

    position: absolute;
    left: -10px;
    bottom: -100px;
    z-index: 999;

    & img {
        width: 100px;
        height: 80px;
        object-fit: cover;
    }
`