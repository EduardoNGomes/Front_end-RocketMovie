import { Container } from './styles'
import { Input }  from '../Input'
import { Link } from 'react-router-dom'
import avatarPlaceHolder from '../../assets/images/avatar_placeholder.svg'


import { useAuth } from '../../hooks/auth'
import { api } from '../../service/api'

export function Header(){
  const {signOut,user} = useAuth()

  const avatarUrl = user.img ? `${api.defaults.baseURL}/files/${user.img}` : avatarPlaceHolder


  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título'/>
      <div>
        <div className="text">
          <h2>{user.name}</h2>
          <a onClick={signOut}>Sair</a>
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt="User Img" />
        </Link>
      </div>
    </Container>
  )
}