import { useState } from 'react';
import { useAuth } from '../../hooks/auth'

import { api } from '../../service/api';

import {FiArrowLeft, FiUser, FiLock,FiMail,FiCamera} from 'react-icons/fi'

import { Container, Avatar } from "./styles";

import {ButtonText} from '../../components/ButtonText'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import avatarPlaceHolder from '../../assets/images/avatar_placeholder.svg'


export function Profile(){
  const {user, updateProfile} = useAuth()
  const [name,setName] = useState(user.name)
  const [email,setEmail] = useState(user.email)
  const [passwordOld,setPasswordOld] = useState('')
  const [passwordNew,setPasswordNew] = useState('')

  
  const avatarUrl = user.img ? `${api.defaults.baseURL}/files/${user.img}` : avatarPlaceHolder
  const [avatar,setAvatar] = useState(avatarUrl)
  const [avatarFile,setAvatarFile] = useState(null)

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)
    
    const imagePreview = URL.createObjectURL(file)
    console.log(imagePreview)
    setAvatar(imagePreview)

  }


  async function handleUpdate(){
    const user = {
      name,
      email,
      password: passwordOld,
      new_password: passwordNew
    }

    await updateProfile({user,avatarFile})
  }



  return (
    <Container>
      <div className="bg">

        <div className="btn">

          <ButtonText title='voltar' icon={FiArrowLeft} to='/'/>
        </div>
      </div>

      <main>

        <Avatar>

        <img src={avatar} alt="User image" />
        <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id='avatar' 
              type='file'
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>

        <div className="info">
          <Input 
            onChange={e => setName(e.target.value)}
            placeholder='Nome' 
            value={name}
            type='text' 
            icon={FiUser}
          />

          <Input 
            onChange={e => setEmail(e.target.value)}
            placeholder='Email' 
            value={email}
            type='email' 
            icon={FiMail}
          />

          <Input 
            onChange={e => setPasswordOld(e.target.value)}

            placeholder='Senha atual' 
            type='password' 
            icon={FiLock}
          />

          <Input 
            onChange={e => setPasswordNew(e.target.value)}

            placeholder='Nova Senha' 
            type='password' 
            icon={FiLock}
          />

          <Button 
            title='Salvar'
            onClick={handleUpdate}
          />
        </div>
      </main>
    </Container>
  )
}