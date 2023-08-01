import { styled } from "styled-components";
import HeaderLogado from "../components/HeaderLogado";

export default function UserHome (){
    return(
        <HomePage>
            <HeaderLogado></HeaderLogado>
        </HomePage>
    )
}

const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`