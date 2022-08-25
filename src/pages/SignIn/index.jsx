import {FiArrowLeft, FiUser, FiLock,FiMail} from 'react-icons/fi'

import { Background, Container } from "./styles";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'


import {useAuth} from '../../hooks/auth'
import { useState } from 'react';

export function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handdleSignIn(){
    signIn({
      email,
      password
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
            Faça seu login
          </h2>


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

          <Button title='Entrar' onClick={handdleSignIn}/>
          <ButtonText title='Criar conta' to='/register'/>
        </div>

        <Background/>
      </main>
    </Container>
  )
}