import {FiPlus} from 'react-icons/fi'
import { Container} from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Tag } from '../../components/Tag';
import { Note } from '../../components/Note';
import { Input }  from '../../components/Input'


import {  useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';
import { Section } from '../../components/Section';

export function Home(){
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])

  function createNewNote(){
    navigate('/create')
  }

  function handlePreview(id){
    navigate(`/preview/${id}`)
  }

  useEffect(()=>{
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`)

      console.log(response)
      
      setNotes(response.data)
    }
    fetchNotes()
  },[search])

  return(
    <Container>
      <Header/>
      <main>
        <div className="text-home" >
          <h2>Meus Filmes</h2>
          <Input
        onChange={e => setSearch(e.target.value)} 
        placeholder='Pesquisar pelo título'/>
          <Button 
            onClick={createNewNote}
            icon={FiPlus} 
            type='button' 
            title='Adicionar filmes'
          />
        </div>

        <Section>
          {
              notes.map(note => (
                <Note 
                  key={String(note.id)}
                  data={note}
                  onClick={() => {handlePreview(note.id)}}
                />

              ))
            }

        </Section>

        

      </main>

    </Container>
  )
}