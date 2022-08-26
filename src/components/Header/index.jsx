import { Container } from './styles'
import { Link } from 'react-router-dom'
import avatarPlaceHolder from '../../assets/images/avatar_placeholder.svg'


import { useAuth } from '../../hooks/auth'
import { api } from '../../service/api'
import { useEffect, useState } from 'react'


export function Header(){
  const [search,setSearch] = useState('')

  const {signOut,user} = useAuth()

  const avatarUrl = user.img ? `${api.defaults.baseURL}/files/${user.img}` : avatarPlaceHolder



  return(

    <Container>
      <h1>RocketMovies</h1>

      <div>
        <div className="text">
          <h2>{user.name}</h2>
        
        <Link to='/'>
          <a onClick={signOut}>Sair</a>
        </Link>
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt="User Img" />
        </Link>
      </div>
    </Container>
  )
}