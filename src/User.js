import React from 'react'
import PropTypes from 'prop-types';

const UserData = [
    {
     name:"Naruto",
     city:"Chennai",
     role:"Blockchain Developer",
     skills:["UI/Ux", "React JS", "Python", "Solidity", "Leadership"],
     online:true,
     profile:"naruto.webp"
   },
   {
     name:"Itachi",
     city:"Chennai",
     role:"Blockchain Developer",
     skills:["UI/Ux", "React JS", "Python", "Solidity", "Leadership"],
     online:false,
     profile:"itachi.webp"
   },
   {
    name:"Obito",
    city:"Chennai",
    role:"Blockchain Developer",
    skills:["UI/Ux", "React JS", "Python", "Solidity", "Leadership"],
    online:false,
    profile:"obito.webp"
   }
]

const User = (props) => {
  return (
    <div className='card-container'>
      <span className={props.online? 'pro online' : 'pro offline'}>{props.online? "Online" : "Offline"}</span>
      <img src={props.profile} alt='user' className='img'></img>
      <h3>{props.name}</h3>
      <h4>{props.city}</h4>
      <p>{props.role}</p>
      <div className='buttons'>
        <button className='primary'>Message</button>
        <button className='primary outline'>Follow</button>
      </div>
      <div className='skills'>
        <h5>Skills</h5>
        <ul>{props.skills.map((skill, index)=>(<li key={index}>{skill}</li>))}</ul>
      </div>
    </div>
  )
}

const UserCard = ()=>{
    return (
        <>
            {UserData.map((user, index)=>(            <User
                key={index}
                name={user.name}
                city={user.city}
                role={user.role}
                skills={user.skills}
                online={user.online}
                profile={user.profile}
                />
            ))}
        </>
        // <User
        // name="Keerthick"
        // city="Chennai"
        // role="Blockchain Developer"
        // skills={["UI/Ux", "React JS", "Python", "Solidity", "Leadership"]}
        // online={true}
        // profile="naruto.webp"
        // />
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    profile: PropTypes.string.isRequired,
}

export default UserCard