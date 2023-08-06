import { styled } from "styled-components";
import logo from "./../assets/logo.png"
import { useNavigate } from "react-router-dom";

export default function HeaderLogado(){
    const navigate = useNavigate()
    return(
    <Header>
        <Topo>
            <Mensagem>Seja bem-vindo(a), Pessoa!</Mensagem>
            <Links>
                <p onClick={()=>navigate("/home")}>Home</p>
                <p onClick={()=>navigate("/ranking")}>Ranking</p>
                <Sair onClick={()=>navigate("/")}>Sair</Sair>
            </Links>
        </Topo>
        <img onClick={()=>navigate("/home")} src={logo} alt="Logo do site" />
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