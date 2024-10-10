import { BackgroundImage, ContainerLogin, LimitedContainer, MainContainer, TitleLogin } from "../styles/LoginScreenStyles"
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext"
import { useRequests } from "../../../shared/hooks/useRequests"
import { useState } from "react"
import Button from "../../../shared/components/buttons/button/button"
import Input from "../../../shared/components/inputs/inputLogin/input"
import SVGLogo from "../../../shared/components/icons/SVGHome"

function LoginScreen() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { postRequest, loading } = useRequests()
    const { accessToken, setAccessToken } = useGlobalContext()

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const hadleLogin = () => {
        postRequest('http://localhost:5000/auth', { email: username, password: password })
    }

    return (
        <>
            <MainContainer>
                <BackgroundImage src="./background.png" />

                <ContainerLogin>
                    <LimitedContainer>
                        <SVGLogo />
                        <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                        <Input margin="32px 0 0 0" campo="USUÁRIO" onChange={handleUsername} value={username}/>
                        <Input type="password" margin="22px 0 0 0" campo="SENHA" onChange={handlePassword} value={password}/>
                        <Button loading={loading} margin="64px 0 16px 0" type="primary" onClick={hadleLogin}>ENTRAR</Button>
                    </LimitedContainer>
                </ContainerLogin>
            </MainContainer>
        </>
    )
}

export default LoginScreen