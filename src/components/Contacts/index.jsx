import {useState,useEffect} from 'react'
import  './styles.css'
import List from './List'
import Form from './Form'

function Contacts() {

  const [contacts,setContacts]=useState([
    {
      fullname:'Hatice',
      phonenumber:'1453571'
    },
    {      
      fullname:'Zeynep',
      phonenumber:'107113'},
    {
      fullname:'Aise',
      phonenumber:'571628'
    }
  ])

  useEffect(()=>{
    console.log(contacts)

  },[contacts])

  return (
    
    <div id='container'>
      <h1>Contacts</h1>
    <List contacts={contacts}/>
    <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts