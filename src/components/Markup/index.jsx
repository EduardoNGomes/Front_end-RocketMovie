import {Container} from './styles'
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'


export function Markup({title, isNew, ...rest}){
  return(
    <Container isNew={isNew} {...rest}>
      {title}
      {isNew ? <AiOutlinePlus/> : <AiOutlineClose/> }
    </Container>

  )

}