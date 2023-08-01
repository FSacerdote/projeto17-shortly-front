import { styled } from "styled-components";
import logo from "./../assets/logo.png"

export default function HeaderLogado(){
    return(
    <Header>
        <Topo>
            <Mensagem>Seja bem-vindo(a), Pessoa!</Mensagem>
            <Links>
                <p>Home</p>
                <p>Ranking</p>
                <Sair>Sair</Sair>
            </Links>
        </Topo>
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
const Topo = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 0px 22px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
    }
`


const Links = styled.div`
    display: flex;
    gap: 0px 27px;
    p{
        color: #9C9C9C;
    }
`
const Mensagem = styled.p`
    color: #5D9040;
`
const Sair = styled.p`
    text-decoration: underline;
`