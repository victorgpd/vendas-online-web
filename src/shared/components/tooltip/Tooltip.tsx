import React from "react"
import { Tooltip as TooltipAntd } from "antd"
import { ContainerExternal, ContainerTooltip } from "./Tooltip.style"

interface TooltipProps {
    children: React.ReactNode
    tooltip?: React.ReactNode
    title?: string
}

const Tooltip = (props: TooltipProps) => {
    if (props.title) {
        <TooltipAntd title={props.title}>{props.children}</TooltipAntd>
    }

    return (
        <ContainerTooltip>
            <ContainerExternal>{props.tooltip}</ContainerExternal>
            {props.children}
        </ContainerTooltip>
    )
}

export default Tooltip