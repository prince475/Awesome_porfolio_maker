import React from 'react'

function Home() {
  return (
    <div>
      <div className='home'>
        <div className='card-avatar'>
            <img src="images/icon.png" alt="Avatar" className='home--img'/>
            <div class="container">
                <h4><b>John Doe</b></h4>
                <p>Software Engineer</p>
            </div>
        </div>
        <form className='project-card'>
            <h3>Projects</h3>
            <ol>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
            </ol>
        </form>
        <form className='project-card'>
            <h3>Skills</h3>
            <ol>
                <li>skill 1</li>
                <li>skill 2</li>
                <li>skill 3</li>
                <li>skill 4</li>
            </ol>
        </form>
      </div>
    </div>
  )
}

export default Home
