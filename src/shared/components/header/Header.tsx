import { useState } from "react"
import { logout } from "../../functions/connection/auth"
import { HeaderContainer, LogoutButton, MenuHamburguer } from "./Header.style"
import { Modal } from "antd"

interface HeaderProps {
    children: React.ReactNode
    menuActive: () => void
}

const Header = (props: HeaderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <HeaderContainer>
                <MenuHamburguer onClick={props.menuActive} />
                <LogoutButton onClick={showModal} />
                {props.children}
            </HeaderContainer>
            <Modal title="Atenção" open={isModalOpen} onOk={logout} onCancel={handleCancel}>
                <p>Tem certeza que deseja sair?</p>
            </Modal>
        </>
    )
}

export default Header