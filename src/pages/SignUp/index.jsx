import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi'

import { Background, Container } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../service/api'

export function SignUp(){
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()
  
  function handleSingUp(){
    if(!name || !email || !password){
      return alert('Preencha todos os campos')
    }
    api.post('/users', { name, email, password})
    .then(() => {
      alert('Usuário cadastrado com sucesso')
      navigate(-1)
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar')
      }
    })
  }

  return(
    <Container>
      <main>
        <div className="login">
          <h1>
            RocketMovies
          </h1>
          <p>
            Aplicação para acompanhar tudo que assistir
          </p>

          <h2>
            Crie sua conta
          </h2>

          <Input
            onChange={e => setName(e.target.value) } 
            placeholder='Nome' 
            type='text' 
            icon={FiUser}
          />

          <Input 
            onChange={e => setEmail(e.target.value)}
            placeholder='Email' 
            type='email'
            icon={FiMail}
          />

          <Input 
            onChange={e => setPassword(e.target.value)}
            placeholder='Senha' 
            type='password' 
            icon={FiLock}
          />

          <Button title='Cadastrar' onClick={handleSingUp}/>
          <ButtonText title='Voltar para o login' icon={FiArrowLeft} to='/'/>
        </div>

        <Background/>
      </main>
    </Container>
  )
}