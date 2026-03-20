import { login, register, logout, getMe } from "../services/auth.api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context.jsx";

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setuser, loading, setLoading } = context

    async function handleRegister({username, email, password}) {
        setLoading(true)
        const data = await register({ username, email, password })
        setuser(data.user)
        setLoading(false)
    }

    async function handleLogin({email, password}) {
        setLoading(true)
        const data = await login({ email, password })
        setuser(data.user)
        setLoading(false)
    }

    async function handleGetme() {
        setLoading(true)
        const data = await getMe()
        setuser(data.user)
        setLoading(false)
    }

    async function handleLogout() {
        setLoading(true)
        const data = await logout()
        setuser(data.user)
        setLoading(false)
    }

useEffect(() => {
    handleGetme()
},[])


    return ({ user, loading, handleRegister, handleLogin, handleGetme, handleLogout })
}