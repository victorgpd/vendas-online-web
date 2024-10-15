import React from "react"
import { BreadCrumbContainer, ScreenContainer } from "./screen.style"
import BreadCrumb, { ListBreadCrumb } from "../breadcrumb/Breadcrumb"
import { Divider } from "antd"

interface ContainerProps {
    children: React.ReactNode
    afterCrumb?: React.ReactNode
    listCrumb?: ListBreadCrumb[]
}

const Screen = (props: ContainerProps) => {
    return (
        <ScreenContainer>
            <BreadCrumbContainer>
                {props.listCrumb && (<BreadCrumb listCrumb={props.listCrumb} />)}
                {props.afterCrumb}
            </BreadCrumbContainer>
            <Divider style={{  borderColor: '#d3dbdb' }} />
            {props.children}
        </ScreenContainer>
    )
}

export default Screen