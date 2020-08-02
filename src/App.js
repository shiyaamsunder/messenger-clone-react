import React, { useState, useEffect } from 'react'
import { FormControl, Input, } from "@material-ui/core"
import "./App.css"
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {

  const [input, setInput] = useState()
  const [messages, setMessages] = useState([{
    username: 'test', message: 'hello'
  },])
  const [username, setUsername] = useState()


  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(
          doc => ({ id: doc.id, message: doc.data() }
          )))
      })
  }, [])
  useEffect(() => {
    setUsername(prompt('Enter Your Name'))
  }, [])




  const sendMessage = (event) => {

    event.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }


  return (
    <div className="App">
      <img src="https://logo.clearbit.com/messenger.com" alt="" />
      <h1>Messenger-Clone</h1>
      <h2>Hello {username === '' ? 'Unknown user' : username}</h2>

      <form className='app_form'>
        <FormControl className='app_formControl'>
          <Input
            placeholder="Enter a message"

            className="app_input"
            value={input}
            onChange={(event) => setInput(event.target.value)}>
          </Input>

          <IconButton
            className='app__iconButton'
            type="submit"
            disabled={!input}
            onClick={sendMessage}
            variant="contained"
            color="primary">
            <SendIcon></SendIcon>
          </IconButton>
        </FormControl>



      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message
              username={username}
              message={message}
              key={id} />
          ))
        }
      </FlipMove>



    </div>
  )
}

export default App
