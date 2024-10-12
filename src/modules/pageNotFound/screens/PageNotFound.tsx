import { Result } from "antd"
import Button from "../../../shared/components/buttons/button/button"
import { MainContainer } from "../styles/PageNotFound.style"
import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const navigate = useNavigate()

    const BackHomeButton = () => {
        navigate("/")
    }

    return (
        <MainContainer>
            <Result status="404"
                    title="404"
                    subTitle="Desculpe, a página que você está visitando não existe."
                    extra={<Button type="primary" onClick={BackHomeButton}>Página Principal</Button>}
            />
        </MainContainer>
    )
}

export default PageNotFound