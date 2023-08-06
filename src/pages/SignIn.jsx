import { styled } from "styled-components"
import HeaderDeslogado from "../components/HeaderDeslogado"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import { UserContext } from "../contexts/UserContext"

export default function SignIn (){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {setToken} = useContext(UserContext)

    function login(event){
        event.preventDefault()
        const user = {email, password}
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, user)
            .then((resposta)=>{
                setToken(resposta.data.token)
                localStorage.setItem("token", resposta.data.token)
                navigate("/home")
            })
            .catch((error)=>{
                if(error.response.status === 401) return alert("Login ou senha inválidos")
                if(error.response.status === 422) return alert("Formato de senha ou login inválidos")
                alert("Erro ao realizar o login, tente novamente mais tarde")
            })
    }

    return(
        <SignUpPage>
            <HeaderDeslogado/>
            <Form onSubmit={login}>
                <input type="email" placeholder="E-mail" value={email} onChange={(event)=> setEmail(event.target.value)} required/>
                <input type="password" placeholder="Senha" value={password} onChange={(event)=> setPassword(event.target.value)} required/>
                <button type="submit">Entrar</button>
            </Form>
        </SignUpPage>
    )
}

const SignUpPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: #5D9040;
    }
    h2{
        color: #9C9C9C;
    }
`
const Form = styled.form`
    gap: 25px 0px;
    margin-top: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-style: normal; 
    input{
        width: 770px;
        height: 60px;
        border-radius: 12px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
        padding-left: 22px;
        font-weight: 400; 
    }
    button{
        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
        font-weight: 700; 
        margin-top: 43px;
        width: 182px;
        height: 60px;
        background-color: #5D9040;
        border-radius: 12px;
        color: white;
        border: none;
    }
`