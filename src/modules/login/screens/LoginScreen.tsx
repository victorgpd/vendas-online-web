import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  MainContainer,
  TitleLogin,
} from '../styles/LoginScreenStyles';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useState } from 'react';
import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input/input';
import SVGLogo from '../../../shared/components/icons/SVGHome';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authRequest, loading } = useRequests();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const hadleLogin = async () => {
    authRequest({ email: email, password: password });
  };

  return (
    <>
      <MainContainer>
        <BackgroundImage src="./background.png" />

        <ContainerLogin>
          <LimitedContainer>
            <SVGLogo />
            <TitleLogin level={2} type="secondary">
              LOGIN
            </TitleLogin>
            <Input margin="32px 0 0 0" campo="E-MAIL" onChange={handleUsername} value={email} />
            <Input
              type="password"
              margin="22px 0 0 0"
              campo="SENHA"
              onChange={handlePassword}
              value={password}
            />
            <Button loading={loading} margin="64px 0 16px 0" type="primary" onClick={hadleLogin}>
              ENTRAR
            </Button>
          </LimitedContainer>
        </ContainerLogin>
      </MainContainer>
    </>
  );
}

export default LoginScreen;
