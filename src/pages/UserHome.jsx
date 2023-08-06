import { styled } from "styled-components";
import HeaderLogado from "../components/HeaderLogado";
import Url from "../components/Url";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function UserHome (){
    const [newUrl, setNewUrl] = useState("")

    const {token} = useContext(UserContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const [user, setUser] = useState()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/users/me`, config)
            .then((resposta)=> setUser(resposta.data))
            .catch((error)=>console.log(error.response))
    }, [])

    function postUrl (event){
        event.preventDefault()
        const body = {url: newUrl}
        axios.post(`${import.meta.env.VITE_API_URL}/urls/shorten`, body, config)
            .then(()=>location.reload())
            .catch((error)=>{
                if(error.response.status === 422) return alert("Formato inválido de url")
                alert("Erro ao encurtar a url, tente novamente mais tarde")
            })
    }

    return(
        <HomePage>
            <HeaderLogado></HeaderLogado>
            <Container>
                <Encurtador onSubmit={postUrl}>
                    <input placeholder="Links que cabem no bolso" type="url" value={newUrl} onChange={(event)=> setNewUrl(event.target.value)} required/>
                    <button type="submit">Encurtar link</button>
                </Encurtador>
                <Links>
                    {user?.shortenedUrls.map((url)=> <Url key={url.id} urlObject={url}></Url>)}
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

const Encurtador = styled.form`
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