import styled from "styled-components";
import { Typography } from 'antd';

const { Text } = Typography;

export const TitleSelect = styled(Text)`
    font-weight: 500;
    margin: 8px;
`

export const BoxSelect = styled.div`
    width: 100%;
`

export const SelectContainer = styled.div`
    width: 100%;

    gap: 15px;
    display: flex;
    flex-flow: row nowrap;
`