import { styled } from "styled-components"
import trash from "../assets/trash.png"
import axios from "axios"
import { UserContext } from "../contexts/UserContext"
import { useContext } from "react"

export default function Url({urlObject}){
    const {shortUrl, url, visitCount, id} = urlObject

    const {token} = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function deleteUrl (){
        axios.delete(`${import.meta.env.VITE_API_URL}/urls/${id}`, config)
            .then(()=>location.reload())
            .catch((error)=>{console.log(error.response)})
    }

    function openUrl (){
        axios.get(`${import.meta.env.VITE_API_URL}/urls/open/${shortUrl}`)
            .then()
            .catch((error)=>console.log(error.response))
    }

    return(
        <Container>
            <Shorten onClick={openUrl}>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </Shorten>
            <Remove  onClick={deleteUrl}>
                <img src={trash} alt="Simbolo de delete" />
            </Remove>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    min-height: 60px;
`

const Shorten = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 887px;
    padding-left: 21px;
    padding-right: 94px;
    border-radius: 12px 0px 0px 12px;
    background: #80CC74;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    border: none;
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-overflow: '...';
    p{
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden; 
        text-overflow: ellipsis; 
    }
`
const Remove = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    border-radius: 0px 12px 12px 0px;
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    border: 1px solid rgba(120, 177, 89, 0.25);
    img{
        width: 22px;
        height: 26px;
    }
`