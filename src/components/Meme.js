import { useEffect, useState } from "react"
import memeData from "../memeData"

function Meme(props) {

    
   
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    const url = "https://api.imgflip.com/get_memes"
    useEffect(() => {
        fetch(url)
             .then(res => res.json())
             .then(data => setAllMemes(data.data.memes))
             .catch(err => console.log(err))
    }, [])

    console.log(allMemes)

    function  getMemeImage() {
        const randomeNumber = Math.floor(Math.random() * allMemes.length)
        console.log(randomeNumber)
        let url = allMemes[randomeNumber].url
        setMeme(prev => {
            return {
                ...prev, randomImage: url
            }
        })
    }

    function handleChange(e) {
        setMeme(prev => {
            const {name, value} = e.target
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                   type="text"
                   placeholder="Top text"
                   className="form--inputs"
                   name="topText"
                   onChange={handleChange}
                   value={meme.topText}
                 />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--inputs"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                 />
                <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme