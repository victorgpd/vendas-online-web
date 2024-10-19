import { useState } from "react"
import { logout } from "../../functions/connection/auth"
import { HeaderContainer, LogoutButton, MenuHamburguer } from "./Header.style"
import { Modal } from "antd"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
    menuActive: () => void
}

const Header = (props: HeaderProps) => {
    const navigate = useNavigate()
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
            </HeaderContainer>
            <Modal title="Atenção" open={isModalOpen} onOk={() => logout(navigate)} onCancel={handleCancel}>
                <p>Tem certeza que deseja sair?</p>
            </Modal>
        </>
    )
}

export default Header