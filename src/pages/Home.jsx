import { styled } from "styled-components"
import HeaderDeslogado from "../components/HeaderDeslogado"

export default function Home (){
    return(
        <HomePage>
            <HeaderDeslogado></HeaderDeslogado>
        </HomePage>
    )
}

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`