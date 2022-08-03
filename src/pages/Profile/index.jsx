import {FiArrowLeft, FiUser, FiLock,FiMail} from 'react-icons/fi'

import { Container } from "./styles";

import {ButtonText} from '../../components/ButtonText'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'


export function Profile(){
  return (
    <Container>
      <div className="bg">

        <div className="btn">

          <ButtonText title='voltar' icon={FiArrowLeft} to='/'/>
        </div>
      </div>

      <main>
        <img src="https://github.com/eduardongomes.png" alt="User image" />

        <div className="info">
          <Input placeholder='Nome' type='text' icon={FiUser}/>
          <Input placeholder='Email' type='email' icon={FiMail}/>
          <Input placeholder='Senha atual' type='password' icon={FiLock}/>
          <Input placeholder='Nova Senha' type='password' icon={FiLock}/>

          <Button title='Salvar'/>
        </div>
      </main>
    </Container>
  )
}