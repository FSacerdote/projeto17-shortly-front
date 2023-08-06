import { styled } from "styled-components"
import HeaderDeslogado from "../components/HeaderDeslogado"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUp (){  
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    function cadastro (event){
        event.preventDefault()
        if(password !== confirmation) return alert("Senha inválida no campo de confirmação")
        const user = { name, email, password, confirmPassword: confirmation}
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, user)
            .then(()=>navigate("/login"))
            .catch((error)=>{
                if(error.response.status === 409) return alert("Usuário já cadastrado")
                if(error.response.status === 422) return alert("Campos de cadastro inválidos")
                alert("Erro ao realizar o cadastro, por favor tente novamente mais tarde")
            })
    }

    return(
        <SignUpPage>
            <HeaderDeslogado/>
            <Form onSubmit={cadastro}>
                <input type="text" placeholder="Nome" value={name} onChange={(event)=> setName(event.target.value)} required/>
                <input type="email" placeholder="E-mail" value={email} onChange={(event)=> setEmail(event.target.value)} required/>
                <input type="password" placeholder="Senha" value={password} onChange={(event)=> setPassword(event.target.value)} required/>
                <input type="password" placeholder="Confirmar Senha" value={confirmation} onChange={(event)=> setConfirmation(event.target.value)} required/>
                <button type="submit">Criar Conta</button>
            </Form>
        </SignUpPage>
    )
}

const SignUpPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: #9C9C9C;
    }
    h2{
        color: #5D9040;
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
        margin-top: 36px;
        width: 182px;
        height: 60px;
        background-color: #5D9040;
        border-radius: 12px;
        color: white;
        border: none;
    }
`