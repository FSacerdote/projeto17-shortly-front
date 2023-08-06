import { styled } from "styled-components"
import HeaderDeslogado from "../components/HeaderDeslogado"
import ScoreBoard from "../components/ScoreBoard"

export default function Home (){
    return(
        <HomePage>
            <HeaderDeslogado></HeaderDeslogado>
            <ScoreBoard></ScoreBoard>
            <Message>Crie sua conta para usar nosso serviço!</Message>
        </HomePage>
    )
}

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Message = styled.p`
    margin-top: 82px;
    color: #000;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`