import {FiArrowLeft,} from 'react-icons/fi'
import { Container,Content } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Markup } from '../../components/Markup'
import { Button } from '../../components/Button'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';


export function CreateMovie(){
  const {user} = useAuth()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [rating,setRating] = useState('')
  const [description, setDescription] = useState('')

  const [markups, setMarkups] = useState([])
  const [newMarkup, setNewMarkup] = useState('')


  function handleAddMarkup(){
    setMarkups(prevState => [...prevState, newMarkup])
    setNewMarkup('')
  }

  function handleRemoveMarkup(deleted){
    setMarkups(prevState => prevState.filter(markup => markup !==deleted))
  }


  function handleBack(){
    navigate(-1)
  }

  async function handleNewMovie(){
    if(!title || !description || !rating){
      return alert('Por favor preencha todos os campos')
    }

    if(newMarkup){
      return alert('Existe marcadores que ainda não foram adicionados')
    }

    await api.post('/notes', 
      {
        user_name: user.name,
        title,
        description,
        tags: markups,
        rating: Number(rating)
    })

    alert('Filme cadastrado com sucesso')
    navigate(-1)
  }

  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <div className="sub-header">
            <ButtonText title='Voltar' icon={FiArrowLeft} to='/profile' />
            <h2>Novo filme</h2>
          </div>

          <div className="input-wrapper">
            <Input
              required 
              placeholder='Título'
              onChange={e => setTitle(e.target.value)}
              />
            <Input 
              required 
              type='number'
              placeholder='Sua nota (de 0 a 5)'
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            required 
            onChange={e => setDescription(e.target.value)}
            placeholder='Observações'
          />

          <h3>
            Marcadores
          </h3>
          <div className="markup">
              {
                markups.map((markup,index)=>(
                  <Markup 
                  key={String(index)}
                  value={markup}
                  onClick={()=> handleRemoveMarkup(markup)}
  
                />

                ))
              }
              <Markup 
                title='Novo marcador'
                isNew
                value={newMarkup}
                onChange={e => setNewMarkup(e.target.value)}
                onClick={handleAddMarkup}

              />
          </div>

          <div className="buttons">

            <Button 
              onClick={handleBack}
              title='Excluir filme' 
              className='btn-remove'
            />
            <Button 
              onClick={handleNewMovie}
              title='Salvar alterações' className='btn-save'
              />
          </div>
        </Content>

      </main>
    </Container>
  )
}