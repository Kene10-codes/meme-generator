import { useState } from 'react';
import './App.css';
import Header  from './components/Header';
import Meme from './components/Meme';
// import StarComp from './components/SrarComp';
// import boxes from './boxes';
// import Box from './components/Box'
// import jokesData from './jokesData';
// import Joke from './components/Joke';
// import Form from './components/Form';
// import Form2 from './components/Form2'
// import Api from './components/Api'
// import WindowTracker from './components/WindowTracker';

function App(props) {

//   const [reply, setReply] = useState(true)
//   const [things, setThings] = useState(["Things 1", "Things 2"])
//   const [user, setUser] = useState("Joe")
//   const [contact, setContact] = useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: false
// })

// const [window, setWindow] = useState(true)
// const [squares, setSquares] = useState(boxes)

// function toggle(id) {
//   setSquares(prev => {
//     return prev.map(square => square.id === id ? {...square, on: !square.on} : square
//     )

//   })

  //  setSquares(prev => {
  //    const newSquares = []
  //    for (let i = 0; i < prev.length; i++) {
  //      const currentSquare = prev[i]
  //      if (currentSquare === id ) {
  //        const updateSquare = {
  //          ...currentSquare,
  //          on: !currentSquare.on
  //        }
  //        newSquares.push(updateSquare)  
  //      } else {
  //        newSquares.push(currentSquare)
  //      }
  //    }
  //    return newSquares
  //  })
// }
// const squareElement = squares.map(square => (
//   <Box 
//      key={square.id} 
//      on={square.on}
//      handleClick={() => toggle(square.id)}
//      />

    
// ));


// const jokeElements = jokesData.map(joke => {
//   return (
//       <Joke 
//           key={joke.id}
//           setup={joke.setup} 
//           punchline={joke.punchline} 
//       />
//   )
// })

// function toggleFavorite() {
//   setContact(prev => {
//     return {
//       ...prev, isFavorite: !prev.isFavorite
//     }
//   })
// }

// function addItem() {
//   setThings(prev => [...prev, `Things ${prev.length + 1}`])
// }
// const thingsElement = things.map(thing => <li>{thing}</li>)




//  function goingOut(){ 
//   setReply(prevState => !prevState)
//  }
  return (
    <div className="App">
      
             {/* <button onClick={() => setWindow((prev) => !prev)}>
                Toggle WindowTracker
            </button>
            {window && <WindowTracker /> } */}
      {/* <Form2 />
      <Form /> */}
      {/* {jokeElements} */}
      {/* <Box square={squareElement} on={squareElement.on} /> */}
      {/* {squareElement} */}
       {/* <article className="card">
                <img src="" className="card--image" />
                <div className="card--info">
                     <StarComp isFilled={contact} handleClick={toggleFavorite} user={user} /> 
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
      <div onClick={goingOut}>{reply ? "Yes" : "No"}</div>
      <button onClick={addItem}>Click to Add</button>
      {thingsElement} */}
      {/* <Api /> */}
      <Header />
      <Meme />
    
    </div>
  );
}

export default App;
