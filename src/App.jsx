import './App.css'

function App() {


  const handleSubmit = (e) =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const user = {email,password};

      console.log(email,password);
      fetch('http://localhost:5000/users',{
        method:'post',
        headers:{
          'content-type':'application/json',
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertId){
          alert('users added successfully')
          form.reset();
        }
  })
  }


  return (
    <>
     
      <div>
      <h1>simple CRUD Client</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="ee" />
        <br></br>
        <input type="text" name="password" id="pp" />
        <br/>
        <input type="submit" value="submit" id="ss" />
      </form>
     </div>
       
    </>
  )
}

export default App
