import Input from "../../../shared/inputs/inputLogin/input"
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, MainContainer } from "../styles/LoginScreenStyles"

function LoginScreen() {
    return (
        <>
            <MainContainer>
                <BackgroundImage src="./background.png" />

                <ContainerLogin>
                    <LimitedContainer>
                        <LogoImage src="./logo.png" />
                        <Input campo="USUÁRIO"/>
                        <Input campo="SENHA"/>
                    </LimitedContainer>
                </ContainerLogin>
            </MainContainer>
        </>
    )
}

export default LoginScreen