import {FiArrowLeft,} from 'react-icons/fi'
import { Container,Content } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText } from "../../components/ButtonText";
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Markup } from '../../components/Markup'
import { Button } from '../../components/Button'


export function CreateMovie(){
  return(
    <Container>
      <Header/>

      <main>
        <Content>
          <div className="sub-header">
            <ButtonText title='Voltar' icon={FiArrowLeft} to='/profile' />
            <h2>Novo filme</h2>
          </div>

          <div className="input-wrapper">
            <Input placeholder='Título'/>
            <Input placeholder='Sua nota (de 0 a 5)'/>

          </div>

          <Textarea placeholder='Observações'/>

          <h3>
            Marcadores
          </h3>
          <div className="markup">
              <Markup title='React' />
              <Markup title='Novo marcador' isNew/>
          </div>

          <div className="buttons">

            <Button title='Excluir filme' className='btn-remove'/>
            <Button title='Salvar alterações' className='btn-save'/>
          </div>
        </Content>

      </main>
    </Container>
  )
}