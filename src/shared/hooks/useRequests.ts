import axios from "axios"
import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext"
import { connectionAPIPost } from "../functions/connection/connectionAPI"
import { URL_AUTH } from "../constants/urls"
import { useNavigate } from "react-router-dom"
import { setAuthorizationToken } from "../functions/connection/auth"
import { AuthType } from "../../modules/login/types/AuthType"

export const useRequests = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { setNotification } = useGlobalContext()

    const getRequest = async (url: string) => {
        setLoading(true)

        return await axios({
            method: 'get',
            url: url,
        })
        .then((result) => {
            return result.data
        })
        .catch(() => {
            alert("Erro!")
        })
    }

    const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
        setLoading(true)

        const returnData = await connectionAPIPost<T>(url, body)
        .then((result) => {
            setNotification("Entrando...", "success", "Logado com sucesso!")
            return result
        })
        .catch(() => {
            setNotification("Falha no login. ", "error", "Verifique suas credenciais e tente novamente.")
            return undefined
        })

        setLoading(false)
        return returnData
    }

    const authRequest = async <T>(body: unknown): Promise<void> => {
        setLoading(true)

        await connectionAPIPost<AuthType>(URL_AUTH, body)
        .then((result) => {
            setNotification("Entrando...", "success", "Logado com sucesso!")
            setAuthorizationToken(result.accessToken)
            navigate("/product")
        })
        .catch(() => {
            setNotification("Falha no login. ", "error", "Verifique suas credenciais e tente novamente.")
        })

        setLoading(false)
    }

    return {
        loading,
        getRequest,
        postRequest,
        authRequest,
    }
}