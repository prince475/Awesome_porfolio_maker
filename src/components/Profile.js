import React from 'react'
import { useState, useEffect } from 'react'
import icon from '../images/icon.png'
import './Home.css'
import ProfileCard from './ProfileCard'

function Home() {

  const [profile, setProfile] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])

  let projectToken = {
    "title": title,
    "description": description
  }


  useEffect( ()=>{
      fetch("http://localhost:9292/skill")
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          setProfile(data)
      })
  },[])


  function deleteSkill(id){
      fetch(`http://127.0.0.1:9292/skills/destroy/${id}`,{
        method: "DELETE"
      })
      .then(()=>{
          setProfile((prof) => prof.filter((it) => it.id !== id))
      })
  }

  function handleLogIn(){

    fetch('http://127.0.0.1:9292/project/create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectToken)
    })
    .then(res => res.json())
    .then((data)=>{
    console.log(data)

})
}





  return (
    <div>
      <h2>WELCOME TO MY PORTFOLIO</h2>
      <div className='home'>
        <div className='card-avatar'>
            <img src={icon} alt="Avatar" className='home-img' width={100}/>
            <div class="container">
                <h4><b>User</b></h4>
                {/* <p>Software Engineer</p> */}
            </div>
        </div>
        <div className="registration">
            <div className="r-container">
                    <div className="r-left">
                    <p className="r-title">Skills</p>


                 </div>
            </div>

            <div className="r2-container">
                <div className="r-right"></div>    
                <div className="flex-container">
                   
                    {profile.map((value)=><ProfileCard name={value.name} key={value.id} id={value.id} deleteSkill={deleteSkill}/>)}

                </div>
            </div>
        </div>  
        <div className="add-project"></div>   
        <form className="">
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Description"></input>
            <button type="submit"></button>
        </form>   
      </div>
    </div>
  )
}

export default Home
