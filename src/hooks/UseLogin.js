import {useContext, useEffect} from "react"
import {UserContext} from "../context/UserContext"
import {getToken} from "../utils/authentication"

function useLogin(){

  const [token, setToken] = useContext(UserContext)

  console.log(token);

  useEffect(() => {
    console.log('LLEGA')
    const _token = getToken()
  })

}

export {useLogin}