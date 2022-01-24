import { createContext, useContext, useEffect, useMemo, useState } from "react"

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
    
const [error, setError] = useState(null) 
const [user, setUser] = useState(null)
const [loadingInitial, setLoadingInitial] = useState(true)
const [loading, setLoading] = useState(false)
// const [] = useEffect()

const signIn = (username)=> {
    setUser(username)
} 
const signOut = ()=> {
setUser(null)
}
const memoedValue = useMemo( ()=>({
user, error, loading, signIn, signOut
}),[user, loading, error])
return (
    <AuthContext.Provider value={memoedValue}>{!loadingInitial && children} </AuthContext.Provider>
)
}
export default function useAuth(){return useContext(AuthContext) }