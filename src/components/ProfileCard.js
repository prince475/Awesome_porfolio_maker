import React from 'react'

// import {MdOutlineDeleteSweep} from "react-icons/md"

export default function ProfileCard({name, id, deleteSkill}) {




  return (
    <div>
        <div key={id}>

            <div key={id} className="skills-card">
                    <p className="project-title">{name}</p>
                    <button className='delete-btn' onClick={()=> deleteSkill(id)}>delete<ion-icon name="trash-outline"></ion-icon></button>                
            </div> 
        </div>
            {/* <div key={id}>
                <div key={id} className="skills-card">
                    <p className="project-title">{name}</p>
                    <button onClick={()=> deleteSkill(id)}>delete</button>                
            </div> 
        </div> */}
    </div>
  )
}


