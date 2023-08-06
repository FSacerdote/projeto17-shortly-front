import { styled } from "styled-components"

export default function User({user, index}){

    const {name, linksCount, visitCount} = user

    return(
        <Container>
            <span>{index + 1}. {name} -</span> {linksCount} links - {visitCount} visualizações
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