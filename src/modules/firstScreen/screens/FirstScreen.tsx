import { Spin } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext"

const FirstScreen = () => {
    const { user } = useGlobalContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/product") 
        }
    }, [user])

    return <Spin />
}

export default FirstScreen