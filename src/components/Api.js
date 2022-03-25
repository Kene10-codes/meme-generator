import { useEffect, useState } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)
    
    console.log("Component rendered")
    
    const url = `https://swapi.dev/api/people/${count}`
    fetch(url) 
          .then(res => res.json())
          .then(data => setStarWarsData(data))

    useEffect(() => {
        console.log("ran")
        fetch(url) 
          .then(res => res.json())
          .then(data => setStarWarsData(data))
    }, [])
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <button onClick={() => setCount(prev => prev + 1)}>Get character</button>
        </div>
    )
}
