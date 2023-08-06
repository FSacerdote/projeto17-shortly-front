import { styled } from "styled-components"
import trofeu from "../assets/trofeu.png"
import User from "./User"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ScoreBoard(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/ranking`)
            .then((resposta)=> setUsers(resposta.data))
            .catch((error)=> console.log(error.response))
    }, [])

    return(
    <Container>
        <Titulo>
            <img src={trofeu} alt="" />
            <p>Ranking</p>
        </Titulo>
        <Ranking>
            <UsersContainer>
                {users.map((user, index)=> <User key={index} index={index} user={user}></User>)}
            </UsersContainer>
        </Ranking>
    </Container>
    )
}

const Container = styled.div`
    width: 1017px;
    height: 348px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: #000;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
    }
    gap: 0px 10px;
`

const Ranking = styled.div`
    padding: 19px 0 0 40px;
    width: 1017px;
    height: 241px;
    border-radius: 24px 24px 0px 0px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
`

const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 192px;
    overflow: scroll;
`