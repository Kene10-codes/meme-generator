import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState(true)
    const [messages, setMessages] = useState(["a", "b"])
    

    // setMessages(prev => {
    //     return prev.map()
    // })

    return (
        <div>
             { messages.length > 0  && <h1>You have {messages.length} unread messages!</h1>}
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            
            <hr />

            <button onClick={() => setIsShown(prev => !prev)}>{isShown ? "SHOW PUNCHLINE" : "HIDE PUNCHLINE"}</button>
        </div>
    )
}