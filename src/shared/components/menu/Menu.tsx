import { ContainerCompany, ContainerMenu, LogoMenu, NameCompany } from "./Menu.style"

interface MenuProps {
    display: "block" | "none"
}

const Menu = (props: MenuProps) => {
    return (
        <ContainerMenu style={{display: props.display}}>
            <ContainerCompany>
                <LogoMenu />
                <NameCompany>Vendas Online</NameCompany>
            </ContainerCompany>
        </ContainerMenu>
    )
}

export default Menu