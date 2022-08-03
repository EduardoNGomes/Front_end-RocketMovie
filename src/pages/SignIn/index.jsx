import {FiArrowLeft, FiUser, FiLock,FiMail} from 'react-icons/fi'


import { Background, Container } from "./styles";

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'


export function SignIn(){
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


          <Input placeholder='Email' type='email' icon={FiMail}/>
          <Input placeholder='Senha' type='password' icon={FiLock}/>

          <Button title='Entrar'/>
          <ButtonText title='Criar conta' to='/register'/>
        </div>

        <Background/>
      </main>
    </Container>
  )
}