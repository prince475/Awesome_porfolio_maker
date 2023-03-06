import React from 'react'
// import {MdOutlineDeleteSweep} from "react-icons/md"

export default function ProjectCard({title,description,id, deleteProject}) {




  return (
    <div key={id}>

        <div key={id} className="projects-card">
                <p className="project-title">{title}</p>
                <p>{description}</p>
                <button className='delete-btn' onClick={()=> deleteProject(id)}>delete<ion-icon name="trash-outline"></ion-icon></button>                
        </div> 
      
    </div>
  )
}


