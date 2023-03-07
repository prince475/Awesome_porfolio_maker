import React from 'react'
import { useState, useEffect } from 'react'
import icon from '../images/icon.png'
import './Home.css'
import HomeCard from './HomeCard'

function Home() {

  const [profile, setProfile] = useState([])


  useEffect( ()=>{
      fetch("https://my-portfolio-application-sinatra.onrender.com/project/project")
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          setProfile(data)
      })
  },[])


  function deleteProject(id){
      fetch(`https://my-portfolio-application-sinatra.onrender.com/project/projects/destroy/${id}`,{
        method: "DELETE"
      })
      .then(()=>{
          setProfile((prof) => prof.filter((it) => it.id !== id))
      })
  }




  return (
    <div className='background'>
            <h2 className='title-h2'>WELCOME TO MY-PORTFOLIO</h2>

      <div className='home'>
        <div className='card-avatar'>
            <img src={icon} alt="Avatar" className='home-img' width={100}/>
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Software Engineer</p>
            </div>
        </div>
        <div className="registration">
            <div className="r-container">
                    <div className="r-left">
                    <p className="r-title">Check out what others are working on to get inspiration to be innovative...</p>

                 </div>
            </div>

            <div className="r2-container">
                <div className="r-right"></div>
                <div className="flex-container">

                    {profile.map((value)=><HomeCard title={value.title} description={value.description} key={value.id} id={value.id} deleteProject={deleteProject}/>)}

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
