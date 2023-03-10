import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

// use the prompt 'rafce' to make a boilerplate for a functional component

const LandingPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email:'',
    password:'',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);
  const [login, { err, data2 }] = useMutation(LOGIN_USER);
  // eventually this will be a fetch request to the backend
  // also, once you get data from the database about latest jobs, you will want to limit the results
  const [currentPosts, setCurrentPosts] = useState([
    
    {
      id: 1,
      description: 'Post your job here'
    },
    
    {
      id: 2,
      title: 'Babysitter needed Friday night',
      description: 'I need a babysitter for my 2 year old son on Friday night from 7-9 pm. I will put him to sleep before you arrive.',
      author: 'Lisa',
      date: 'March 6th',
      time: '7:10 pm',
      comment: 'I would love to chat more about this job!'
    },
    {
      id: 3,
      title: 'Babysitter needed Saturday night',
      description: 'I am looking for a sitter for 3 kids ages 2, 4, and 6 on Saturday, March 11th from 6-10 pm.',
      author: 'Megan',
      date: 'March 6th',
      time: '5:56 pm'
    },
    {
      id: 4,
      title: 'Need babysitter for 2 hours on Sunday',
      description: 'I need a babysitter for my 4 year old son on Sunday, March 12th from 1-4 pm.',
      author: 'Matt',
      date: '3-4-23',
      time: '2:16 PM'
    },
    {
      id: 5,
      title: 'Babysitter needed next Friday night',
      description: 'I need a babysitter for my 2 year old son on Friday, march 10th from 7-9 pm. He will be asleep when you arrive.',
      author: 'Gaye',
      date: 'March 5th',
      time: '8:04 pm'
    },
    {
      id: 6,
      title: 'Babysitter needed for graduation',
      description: 'I am looking for a sitter for 3 kids ages 2, 5, and 7 on Saturday, March 11th from 6-10 pm.',
      author: 'Miguel',
      date: 'March 4th',
      time: '9:56 pm'
    }

   ])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

   const handleFormSignup = async (event) => {
     event.preventDefault();
     console.log(formState);

     try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      console.log('You are signed up!');
     } catch (e) {
      console.error(e);
     }
    };

    const handleFormLogin = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });

      Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
      console.log('You are signed in!');
      //clear form values
      setFormState({
        email:'',
        password: '',
        name: ''
      });
    };
  return (
    <>
      <div id='header' className='right flex-1'></div>
      <Nav />
      {/* <h1> Welcome to Find A Sitter! <span></span> </h1> */}

      <div id='landingPageBoxes'>
        <div id='loginForms'>
          <div id='signInBox'>
            <h1> Sign In </h1>
            <Form className="formInfo" id="signInForm" onSubmit={handleFormLogin}>
                <Form.Group controlId="formEmail" className="formItem">
                  <Form.Label></Form.Label> 
                  <Form.Control placeholder="Enter Email" name = "email" value={formState.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formPassword" className="formItem">
                  <Form.Label></Form.Label> 
                  <Form.Control placeholder="Enter Password" name ="password" value={formState.password} onChange={handleChange} />
                </Form.Group>
                <Button variant="secondary" type="submit" id="signupSubmit">
                  Sign In
                </Button>
            </Form>
          </div>
          <div id='signUpBox'>
            <h1> Sign Up </h1>
            <Form className="formInfo" id="signUpForm" onSubmit={handleFormSignup}>
                <Form.Group controlId="formEmail" className="formItem">
                  <Form.Label></Form.Label> 
                  <Form.Control placeholder="Enter Email" name ="email"value={formState.email} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formName" className="formItem">
                  <Form.Label></Form.Label> 
                  <Form.Control placeholder="Enter Name" name="name" value={formState.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formPassword" className="formItem">
                  <Form.Label></Form.Label> 
                  <Form.Control placeholder="Enter Password" name = "password" value={formState.password} onChange={handleChange}/>
                </Form.Group>
                <Button variant="secondary" type="submit" id="signupSubmit">
                  I'm A Parent
                </Button>
                <Button variant="secondary" type="submit" id="signupSubmit">
                  I'm A Sitter  
                </Button>
            </Form>
          </div>


        </div>
        <div id='posts'>
          <h1> Latest Jobs </h1>
          {/* <Link to={{pathname: `/sitters`, data: currentPosts }}>Visit Sitters Page</Link> */}
          {currentPosts.map((post) => (
            <div className='singlePost'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>Posted by: {post.author}</p>
              <p>Posted on: {post.date} at: {post.time}</p>
              <p>{post.comment}</p>
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}

export default LandingPage;