import { styled } from "styled-components";
import logo from "./../assets/logo.png"
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default function HeaderDeslogado(){
    const navigate = useNavigate()
    const {token} = useContext(UserContext)

    useEffect(()=>{
        if (token) {
            navigate("/home")
        }
    }, [])

    return(
    <Header>
        <Links>
            <h1 onClick={()=>navigate("/login")}>Entrar</h1>
            <h2 onClick={()=>navigate("/cadastro")}>Cadastrar-se</h2>
        </Links>
        <img onClick={()=>navigate("/")} src={logo} alt="Logo do site" />
    </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76%;
    img{
        margin-top: 17px;
        width: 314px;
        height: 102px;
    }
`
const Links = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 0px 22px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
`