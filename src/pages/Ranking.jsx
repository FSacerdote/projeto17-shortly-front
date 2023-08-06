import { styled } from "styled-components"
import HeaderLogado from "../components/HeaderLogado"
import ScoreBoard from "../components/ScoreBoard"

export default function Ranking (){
    return(
        <RankingPage>
            <HeaderLogado></HeaderLogado>
            <ScoreBoard></ScoreBoard>
        </RankingPage>
    )
}

const RankingPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`