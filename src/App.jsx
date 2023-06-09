/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const HandleUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert("user addded successfully");
         
        }
      }
      )
      .catch(error => {
        console.log(error);


      });


  }

  return (
    <>

      <h1>Mongo DB connect</h1>
      <form onSubmit={HandleUser}>
        <input type="text" name='name' />
        <input type="email" name="email" id="" />
        <input type="submit" value="Submit" />

      </form>

    </>
  )
}

export default App
