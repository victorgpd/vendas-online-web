import { useState } from "react"
import { useGlobalContext } from "./useGlobalContext"
import ConnectionAPI, { connectionAPIPost, MethodType } from "../functions/connection/connectionAPI"
import { URL_AUTH } from "../constants/urls"
import { setAuthorizationToken } from "../functions/connection/auth"
import { AuthType } from "../../modules/login/types/AuthType"

export const useRequests = () => {
    const [loading, setLoading] = useState(false)
    const { setNotification, setUser } = useGlobalContext()

    const request = async <T>(url: string, method: MethodType, saveGlobal?: (object: T) => void, body?: unknown): Promise<T | undefined> => {
        setLoading(true)

        const returnObject: T | undefined  = await ConnectionAPI.connect<T>(url, method, body)
        .then((result) => {
            if (saveGlobal) {
                saveGlobal(result)
            }
            return result
        })
        .catch((error: Error) => {
            setNotification(error.message, "error")
            return undefined
        })

        setLoading(false)
        return returnObject
    }

    const authRequest = async (body: unknown): Promise<void> => {
        setLoading(true)

        await connectionAPIPost<AuthType>(URL_AUTH, body)
        .then((result) => {
            setUser(result.user)
            setAuthorizationToken(result.accessToken)
            location.href = "/"
        })
        .catch(() => {
            setNotification("Falha no login. ", "error", "Verifique suas credenciais e tente novamente.")
        })

        setLoading(false)
    }

    return {
        loading,
        request,
        authRequest,
    }
}