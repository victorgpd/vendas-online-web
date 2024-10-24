import { useState } from 'react';
import { logout } from '../../functions/connection/auth';
import { HeaderContainer, LogoutButton, MenuHamburguer } from './Header.style';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HeaderTestIdEnum } from './__tests__/header.spec';

interface HeaderProps {
  menuActive: () => void;
}

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeaderContainer data-testid={HeaderTestIdEnum.HEADER_CONTAINER}>
        <MenuHamburguer
          data-testid={HeaderTestIdEnum.HEADER_LOGO_MENU}
          onClick={props.menuActive}
        />
        <LogoutButton data-testid={HeaderTestIdEnum.HEADER_LOGO} onClick={showModal} />
      </HeaderContainer>
      <Modal
        data-testid={HeaderTestIdEnum.HEADER_MODAL}
        title="Atenção"
        open={isModalOpen}
        onOk={() => logout(navigate)}
        onCancel={handleCancel}
      >
        <p data-testid={HeaderTestIdEnum.HEADER_MODAL_P}>Tem certeza que deseja sair?</p>
      </Modal>
    </>
  );
};

export default Header;
