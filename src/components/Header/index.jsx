import { Container } from './styles'
import { Input }  from '../Input'
import { Link } from 'react-router-dom'

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título'/>
      <div>
        <div className="text">
          <h2>Eduardo Gomes</h2>
          <a href="#">Sair</a>
        </div>
        <Link to='/profile'>
          <img src="https://github.com/eduardongomes.png" alt="User Img" />
        </Link>
      </div>
    </Container>
  )
}