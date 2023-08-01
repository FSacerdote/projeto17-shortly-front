import { styled } from "styled-components";
import logo from "./../assets/logo.png"

export default function HeaderDeslogado(){
    return(
    <Header>
        <Links>
            <h1>Entrar</h1>
            <h2>Cadastrar-se</h2>
        </Links>
        <img src={logo} alt="Logo do site" />
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