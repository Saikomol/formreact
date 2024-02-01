import { useState } from "react";

export default function SignUpForm(){

const [username, setUserName] = useState("");
const [password, setPassWord] = useState("");
const [error, setError] = useState(null);    
const [token, setToken] = useState(null);

async function  handleSubmit  (event) {

    event.preventDefault();

    try {
      let res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: "some-username",
        passWord: "super-secret-999",
      }),
    });
    let data = await res.json();
    setToken(res.token);
    console.log(data);
    console.log("Signup successful:", data)
 
    } catch (error) {
      setError(error.message);
    }
  }   
   
    return (
        <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
     
      <form onSubmit={handleSubmit}>
        <label>
          UserName : {""}
        <input  
        value = {username}
        name="username" 
        onChange={(e)=>setUserName(e.target.value)}
        />
        </label>
        <label>
        PassWord : {""} 
        <input 
        type = "password" 
        name="password"
        value = {password} 
        onChange={(e)=>setPassWord(e.target.value)}
        /> 
      
        </label>
        <button>Submit</button>
      </form>
      </>
      )}
    