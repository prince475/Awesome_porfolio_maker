import React from 'react'

// import {MdOutlineDeleteSweep} from "react-icons/md"

export default function ProfileCard({name, id, deleteSkill}) {




  return (
    <div>
        <div key={id}>

            <div key={id} className="projects-card">
                    <p className="project-title">{name}</p>
                    <button onClick={()=> deleteSkill(id)}>delete</button>                
            </div> 
        
        </div>
    </div>
  )
}


