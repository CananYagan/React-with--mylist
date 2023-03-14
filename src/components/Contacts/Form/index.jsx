import {useState,useEffect} from 'react'

const cleanSetContacts={fullname:"",phonenumber:""}

function Form({addContacts ,contacts}) {
const [form,setForm]=useState({fullname:'',phonenumber:''})

const onChanegeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
}

useEffect(()=>{
setForm(cleanSetContacts)

},[contacts])

const onSubmit=(e)=>{
    e.preventDefault();
    if (form.fullname==="" || form.phonenumber==="") {
        return false
    }
     

    addContacts([...contacts,form])

    console.log(form)
}
  return (
    <form  onSubmit={onSubmit}>
      <div>
        <input name="fullname" placeholder='fullname' value={form.fullname} onChange={onChanegeInput}/>
      </div>
      <div>
        <input name="phonenumber" placeholder='phonenumber' value={form.phonenumber} onChange={onChanegeInput} />
      </div>
      <div className='btn'>
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form