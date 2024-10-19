import styled from "styled-components";

interface LimitedContainerProps {
    width?: string

    gap?: string
    directionWrap?: "row nowrap" | "row wrap" | "column nowrap" | "column wrap"
    align?: "flex-start" | "center" | "flex-end"
    justify?: "flex-start" | "space-around" | "space-between" | "space-evenly" | "center" | "flex-end"
}

export const LimitedContainer = styled.div<LimitedContainerProps>`
    width: ${(props) => props.width || "100%"};

    gap: ${(props) => props.gap || "0px"};
    display: flex;
    flex-flow: ${(props) => props.directionWrap || "row nowrap"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "flex-start"};
`

interface DisplayFlexProps {
    width?: string
    padding?: string
    background?: string

    gap?: string
    directionWrap?: "row nowrap" | "row wrap" | "column nowrap" | "column wrap"
    align?: "flex-start" | "center" | "flex-end"
    justify?: "flex-start" | "space-around" | "space-between" | "space-evenly" | "center" | "flex-end"
}

export const DisplayFlex = styled.div<DisplayFlexProps>`
    width: ${(props) => props.width || "100%"};
    height: 100%;
    padding: ${(props) => props.padding || "0px"};
    background-color: ${(props) => props.background || "white"};

    gap: ${(props) => props.gap || "0px"};
    display: flex;
    flex-flow: ${(props) => props.directionWrap || "row nowrap"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "flex-start"};
`