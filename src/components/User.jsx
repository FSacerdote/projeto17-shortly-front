import { styled } from "styled-components"

export default function User(){
    return(
        <Container>
            <span>1. Fulaninha -</span> 32 links - 1.703.584 visualizações
        </Container>
    )
}

const Container = styled.div`
    color: #000;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 22px;
    font-weight: 400;
    span{
        font-weight: 500;
    }
`