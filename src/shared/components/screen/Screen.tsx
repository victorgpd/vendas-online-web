import React, { useEffect, useState } from "react"
import { BreadCrumbContainer, ScreenContainer } from "./screen.style"
import BreadCrumb, { ListBreadCrumb } from "../breadcrumb/Breadcrumb"
import { Divider } from "antd"
import Menu from "../menu/Menu"
import { DisplayFlex } from "../styles/styles"
import Header from "../header/Header"

interface ContainerProps {
    children?: React.ReactNode
    afterCrumb?: React.ReactNode
    listCrumb?: ListBreadCrumb[]
}

const Screen = (props: ContainerProps) => {
    const [isActive, setIsActive] = useState({
        menuActive: false,
        widthElements: "calc(100% - 240px)"
    });

    const toggleStyle = () => {
        setIsActive({
            ...isActive,
            menuActive: !isActive.menuActive
        })
    };
    
    const handleResize = () => {
      if (window.innerWidth >= 820) {
        setIsActive({
            ...isActive,
            widthElements: "calc(100% - 240px)",
            menuActive: true
        })

      } else {
        setIsActive({
            ...isActive,
            widthElements: "100%",
            menuActive: false
        })
      }
    };

    useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
            <Header menuActive={toggleStyle} />
            <ScreenContainer>
                <Menu display={isActive.menuActive ? "flex" : "none"}/>
                <DisplayFlex width="100%" background={"#"} directionwrap="row nowrap" justify="flex-end">
                    <DisplayFlex width={isActive.widthElements} background="#" padding="15px" directionwrap="column nowrap">
                        <BreadCrumbContainer>
                            {props.listCrumb && (<BreadCrumb listCrumb={props.listCrumb} />)}
                            {props.afterCrumb}
                        </BreadCrumbContainer>
                        <Divider style={{  borderColor: '#d3dbdb' }} />
                        {props.children}
                    </DisplayFlex>
                </DisplayFlex>
            </ScreenContainer>
        </>
    )
}

export default Screen