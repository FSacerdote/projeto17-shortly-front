import { styled } from "styled-components";
import HeaderLogado from "../components/HeaderLogado";
import Url from "../components/Url";

export default function UserHome (){
    return(
        <HomePage>
            <HeaderLogado></HeaderLogado>
            <Container>
                <Encurtador>
                    <input placeholder="Links que cabem no bolso" type="text" />
                    <button>Encurtar link</button>
                </Encurtador>
                <Links>
                    <Url></Url>
                    <Url></Url>
                    <Url></Url>
                    <Url></Url>
                    <Url></Url>
                    <Url></Url> 
                </Links>
            </Container>
        </HomePage>
    )
}

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 1020px;
    margin-top: 136px;
    display: flex;
    flex-direction: column;
`

const Encurtador = styled.div`
    display: flex;
    justify-content: space-between;
    input{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 400;
        padding-left: 22px;
        width: 769px;
        height: 60px;
        border-radius: 12px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        background: #FFF;
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    }
    button{
        color: #FFF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 700;
        width: 182px;
        height: 60px;
        border-radius: 12px;
        background: #5D9040; 
        border: none;
    }
`

const Links = styled.div`
    margin-top: 60px;
    height: 264px;
    display: flex;
    flex-direction: column;
    gap: 42px 0;
    overflow: scroll;
`