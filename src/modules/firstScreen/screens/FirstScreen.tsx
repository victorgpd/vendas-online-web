import { Spin } from "antd"
import { useEffect } from "react"
import { getAuthorizationToken, unsetAuthorizationToken } from "../../../shared/functions/connection/auth"
import { useNavigate } from "react-router-dom"
import { connectionAPIGet } from "../../../shared/functions/connection/connectionAPI"
import { URL_USER } from "../../../shared/constants/urls"

const FirstScreen = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const verifyToken = async () => {
            const token = getAuthorizationToken()
            if (token) {
                await connectionAPIGet(URL_USER).then(() => {
                    navigate("/product")
                }).catch(() => {
                    unsetAuthorizationToken()
                    navigate("/login")
                })
                
            } else {
                navigate("/login")
            }
        }

        verifyToken()
    }, [])

    return <Spin />
}

export default FirstScreen