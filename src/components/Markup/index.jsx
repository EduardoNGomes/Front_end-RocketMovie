import {Container} from './styles'
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'


export function Markup({title, isNew=false,onClick, ...rest}){
  return(
    <Container isNew={isNew} >
      
        <input 
          type="text" 
          placeholder={title} 
          readOnly={!isNew}
          {...rest}
        />
        <button onClick={onClick}>
          
        {isNew ? <AiOutlinePlus/> : <AiOutlineClose/> } 
        </button>
        
    </Container>

  )

}