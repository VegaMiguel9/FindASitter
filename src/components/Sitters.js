import React, { useState} from 'react'
import Nav from './sitterNav'
import { useLocation } from 'react-router-dom';
import pfp from '../imgs/profileicon.jpg'
import '../sitter.css'
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import Uploads from './uploadimg'



<head>
  <body>
  
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  </body>
</head>

const UserProfile = (props) => {

  // eventually this will be a fetch request to the backend
  // also, once you get data from the database about latest jobs, you will want to limit the results
  const [currentName, setName] = useState([
    {
      id: 1,
      fullName: 'Anna Martinez',
      email: 'annamart123@gmail.com',
    },

  ])

  const [userName, setuserName] = useState([
    {
      id: 1,
      userName: 'Azenitram',
    }
  ])

  const [Certification, setCertification] = useState([
    {
      id: 1,
      certification: 'We have 3 kids blah blah blah'
    },
    // {
    //   id: 2,
    //   certification: 'First Aid'
    // }
  ])
  const [Experience, setExperience] = useState([
    {
      id: 1,
      experience: 'idk what to put here'
    },
    // {
    //   id: 2,
    //   experience: 'Great at math'
    // }
  ])

  const [currentReview, setCurrentReview] = useState([
    {
      id: 1,
      review: 'Very Good',
      author: 'Lisa'
    },

  ])
  const location = useLocation();

  console.log("current posts data", props.location)
  return (
    <>
     
      <div className='navBar'>
        <h3 className='navBorder'><Nav /></h3>
      </div>
      {/* prfile picture / name / email code  */}
      <div className='flexPicture' id="whatIsIt">
        
        <div className='picName'> 
          {currentName.map((post) => (
            <div>
              {/* <h1>{post.firstName} {post.lastName}</h1> */}
              {/* <h1 className='email'>{post.email}</h1> */}
            </div>
          ))}
        </div>

        {/* <div className='webButtons' id="whatIsThis"><Nav /></div> */}
        {/* {userName.map((post) => (
          <h1 className='headerSize'> {post.userName} </h1>
        ))} */}
      </div>
      <div className='textinputFlex'>   
        {/* prfile picture / name / email code  */}
        <div className='backGround'>
          <div className='flexPicture' id="whereIsThis">
            {/* <img src={pfp} alt = "profile picture"></img> */}
            <Uploads />
            <div className='picName'> 
              {currentName.map((post) => (
                <div>
                  <h1 className='info'>{post.fullName}</h1>
                  <h1 className='info'>{post.email}</h1>
                </div>
              ))}
            </div>
          </div>
          {/* certification code */}
          <div className='info'>        
            <div className='cert'>
              <h1> About </h1>
              {Certification.map((post) => (
                <div className='whiteTextBox'>
                  <li>{post.certification}</li>
                </div>
              ))}
            </div>
            {/* experience code  */}
            <div className='exp'>
              <h1> Experience </h1>
              {Experience.map((post) => (
                <div className='whiteTextBox'>
                  <li>{post.experience}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='inputFlex'>
          
          <div className='expInputMargin'>
            
          </div>
        </div>
      </div>
      {/* reviews code */}
      <div className='reviews'>
        <h1> Reviews </h1>
        {currentReview.map((post) => (
          <div className='whiteTextBox'>
            <h6>Posted by: {post.author}</h6>
            <p>{post.review}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default UserProfile;