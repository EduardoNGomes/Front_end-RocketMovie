import {FiArrowLeft} from 'react-icons/fi'
import { AiFillStar, AiOutlineStar} from "react-icons/ai";
import {MdOutlineWatchLater} from 'react-icons/md'

import { Container,Content } from "./styles";

import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Tag} from '../../components/Tag'
import { Rate } from '../../components/Rate';


import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';


import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { api } from '../../service/api';
import avatarPlaceHolder from '../../assets/images/avatar_placeholder.svg'

export function MoviePreview(){
  const {user} = useAuth()
  const avatarUrl = user.img ? `${api.defaults.baseURL}/files/${user.img}` : avatarPlaceHolder

  const navigate = useNavigate()


  const [data, setData] = useState(null)
  const params = useParams()


    async function handleRemove(){
      const confirm = window.confirm('Deseja realmente remover o filme?')

      if(confirm){
        await api.delete(`/notes/${params.id}`) 
        navigate(-1)
      }
    }

  useEffect(()=>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)

      setData(response.data)

    }
    fetchNote()
  },[])
  return(
    <Container>
      <Header/>
      <main>
      { 
        data &&
        <Content>
          <div className="sub-header">
            <div className="btn">
              <ButtonText title='Voltar' icon={FiArrowLeft} to='/'/>
              <button onClick={handleRemove}>Excluir</button>
            </div>

            <div className="title">
              <h2>{data.title}</h2>
              {<Rate data={data}/>}

            </div>

            <div className="author">

              <img src={avatarUrl} alt="User image" />
              <span>Por {user.name}</span>

              <div className="time">
                <MdOutlineWatchLater/>
                <span className='date'>23/05/02</span>
                <span> às </span>
                <span className='hour'>08:00</span>
              </div>

            </div>
              <div className="tags">
              {data.tags && 
              data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}
              </div>
          </div>

          <div className="text">
            <p>
              {data.description}
            </p>

            
          </div>



        </Content>
    }
      </main>

    </Container>
  )
}