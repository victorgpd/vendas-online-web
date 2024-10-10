import { useState } from "react"
import axios from "axios"
import Button from "../../../shared/buttons/button/button"
import Input from "../../../shared/inputs/inputLogin/input"
import { BackgroundImage, ContainerLogin, LimitedContainer, MainContainer, TitleLogin } from "../styles/LoginScreenStyles"
import SVGLogo from "../../../shared/icons/SVGHome"

function LoginScreen() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const hadleLogin = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:5000/auth',
            data: {
                email: username,
                password: password,
            }
        })
        .then((result) => {
            alert("Fez login!")
            return result.data
        })
        .catch(() => {
            alert("Usuário ou senha invalida!")
        })
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
                        <Button margin="64px 0 16px 0" type="primary" onClick={hadleLogin}>ENTRAR</Button>
                    </LimitedContainer>
                </ContainerLogin>
            </MainContainer>
        </>
    )
}

export default LoginScreen