import { styled } from "styled-components"
import HeaderDeslogado from "../components/HeaderDeslogado"

export default function SignIn (){
    return(
        <SignUpPage>
            <HeaderDeslogado/>
            <Form>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Senha"/>
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
    font-family: Lexend Deca;
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